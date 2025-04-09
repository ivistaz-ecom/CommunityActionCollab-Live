import React from "react";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../../../component/Header";
import Footer from "../../../../component/Footer";
import PageNotFound from "../../../../component/pageNotFound";

const configData = {
  mainWebUrl: "https://communityactioncollab.org", // Adjust this based on your site configuration
};

// Schema Generator
const generateSchemaMarkup = (post) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    title: post.acf.meta_title || "No title Provided",
    description: post.acf.meta_descriptions || "No description provided",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${configData.mainWebUrl}/blog/${post.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Your Organization Name",
      logo: {
        "@type": "ImageObject",
        url: `${configData.mainWebUrl}/images/cac_favicon-150x150.png`,
      },
    },
    image: {
      "@type": "ImageObject",
      url:
        post.acf.featured_image_url ||
        `${configData.mainWebUrl}/default-image.png`,
      height: 600,
      width: 1200,
    },
  };
};

async function fetchPost(slug) {
  const response = await fetch(
    `https://docs.communityactioncollab.org/wp-json/wp/v2/seo-blog?_embed&slug=${slug}`,
    { next: { revalidate: 60 } } // Enable ISR (Incremental Static Regeneration)
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data.length > 0 ? data[0] : null; // Return the first post if slug is unique
}

const PostPage = async ({ params }) => {
  const { slug } = params;

  let post;
  try {
    post = await fetchPost(slug);
  } catch (error) {
    console.error("Error fetching post data:", error);
    return (
      <Container className="text-center p-0" fluid>
        <PageNotFound />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container className="text-center p-0" fluid>
        <PageNotFound />
      </Container>
    );
  }

  return (
    <>
      {/* Add Meta Tags and Schema in the <Head> */}
      <head>
        <title>{post.acf.meta_title}</title>
        <meta name="description" content={post.acf.meta_descriptions} />
        <meta httpEquiv="content-language" content="en" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={post.acf.keywords} />
        <link
          rel="canonical"
          href={`${configData.mainWebUrl}/blog/${post.slug}`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateSchemaMarkup(post)),
          }}
        />
      </head>

      <Header />

      {/* Page Content */}
      <div
        className="d-flex align-items-center justify-content-center text-white text-center cta-banner"
        style={{
          height: "500px",
          color: "#fff",
        }}
      >
        <h1
          className="fs-1 fw-bold"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </div>

      <Container className="my-5" fluid>
        <Row className="justify-content-center">
          <Col lg={10}>
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default PostPage;
