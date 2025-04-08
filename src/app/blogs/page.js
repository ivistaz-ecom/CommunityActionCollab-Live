import React from 'react'
import Blogs from "../../../component/Blogs/Blogs"
import { headers } from 'next/headers';
import Script from 'next/script';

export async function generateMetadata() {
  const headersList = headers();
  const domain = headersList.get('host') || 'communityactioncollab.org';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const canonicalUrl = `${protocol}://${domain}/blogs`;

  return {
    title: 'Blogs | Community Action Collab',
    description: 'Read our latest blogs and articles about community development, humanitarian crises, and building resilience.',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: 'Blogs | Community Action Collab',
      description: 'Read our latest blogs and articles about community development, humanitarian crises, and building resilience.',
      url: canonicalUrl,
      siteName: 'Community Action Collab',
      type: 'website',
      images: [
        {
          url: '/images/action_banner.jpeg',
          width: 1200,
          height: 630,
          alt: 'Community Action Collab Blogs',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blogs | Community Action Collab',
      description: 'Read our latest blogs and articles about community development, humanitarian crises, and building resilience.',
      images: ['/images/action_banner.jpeg'],
      creator: '@CommunityAction',
    },
  };
}

export default function BlogsPage() {
  const headersList = headers();
  const domain = headersList.get('host') || 'communityactioncollab.org';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const canonicalUrl = `${protocol}://${domain}/blogs`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blogs | Community Action Collab",
    "description": "Read our latest blogs and articles about community development, humanitarian crises, and building resilience.",
    "url": canonicalUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Community Action Collab",
      "logo": {
        "@type": "ImageObject",
        "url": `${protocol}://${domain}/images/action_banner.jpeg`
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": `${protocol}://${domain}/images/action_banner.jpeg`,
      "width": "1200",
      "height": "630",
      "alt": "Community Action Collab Blogs"
    }
  };

  return (
    <div>
      <Script
        id="blogs-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Blogs/>
    </div>
  )
}