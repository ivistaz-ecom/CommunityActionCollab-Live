import React from 'react';
import Posts from './Blogpost';
import { headers } from 'next/headers';

// This function generates metadata for the page
export async function generateMetadata({ params }) {
  try {
    const headersList = headers();
    const domain = headersList.get('host') || 'communityactioncollab.org';
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';

    const res = await fetch(
      `https://docs.communityactioncollab.org/wp-json/wp/v2/posts?_embed&slug=${params.slug}`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!res.ok) {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    const result = await res.json();
    
    if (!result || result.length === 0) {
      return {
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

    const post = result[0];
    const canonicalUrl = `${protocol}://${domain}/blogs/${params.slug}`;
    
    // Clean up the title and description
    const title = post.acf?.meta_title || post.title.rendered.replace(/<[^>]*>/g, '');
    const description = post.acf?.meta_descriptions || post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160);
    
    // Get the featured image
    const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                 '/images/default-blog-image.jpg';
    
    // Format the publication date
    const publishDate = new Date(post.date).toISOString();
    const modifiedDate = post.modified ? new Date(post.modified).toISOString() : publishDate;
    
    // Create schema markup
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": title,
      "description": description,
      "image": image,
      "datePublished": publishDate,
      "dateModified": modifiedDate,
      "author": {
        "@type": "Person",
        "name": post.acf?.blog_author_name || "Community Action Collab"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Community Action Collab",
        "logo": {
          "@type": "ImageObject",
          "url": `${protocol}://${domain}/images/cac_favicon-150x150.png`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      }
    };

    return {
      title,
      description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title,
        description,
        url: canonicalUrl,
        siteName: 'Community Action Collab',
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        locale: 'en_US',
        type: 'article',
        publishedTime: publishDate,
        modifiedTime: modifiedDate,
        authors: [post.acf?.blog_author_name || "Community Action Collab"],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
      },
      other: {
        'application/ld+json': JSON.stringify(schema),
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post',
      description: 'Community Action Collab blog post',
    };
  }
}

const Page = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <Posts slug={slug} />
    </div>
  );
};

export default Page;
