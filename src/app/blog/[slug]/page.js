"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner, Alert, Navbar } from "react-bootstrap";
import Header from "../../../../component/Header";
import { usePathname } from "next/navigation";
import Footer from "../../../../component/Footer";
import Link from "next/link";
import PageNotFound from "../../../../component/pageNotFound";
const Post = ({ params }) => {
  const { slug } = params;
  const pathname = usePathname();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const configData = {
    mainWebUrl: "https://communityactioncollab.org", // Adjust this based on your site configuration
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://docs.communityactioncollab.org/wp-json/wp/v2/seo-blog?_embed&slug=${slug}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (Array.isArray(result) && result.length > 0) {
          setData(result);
        } else {
          setData(null);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const generateSchemaMarkup = (post) => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title.rendered,
      description: post.acf.meta_descriptions || "No description provided",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${configData.mainWebUrl}/${post.slug}`,
      },
      publisher: {
        "@type": "Organization",
        name: "Your Organization Name",
        logo: {
          "@type": "ImageObject",
          url: `${configData.mainWebUrl}/path-to-logo.png`,
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

  if (isLoading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error || !data) {
    return (
      <Container className="text-center p-0" fluid>
        <PageNotFound />
      </Container>
    );
  }

  return (
    <>
      <style>
        {`
                p {
                    font-size: 18px !important;
                    margin-bottom: 1rem;
                }
                `}
      </style>
      <Header />
      {data.map((post, index) => (
        <div key={index}>
          <head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>{post.acf.meta_title}</title>
            <meta name="description" content={post.acf.meta_descriptions} />
            <meta httpEquiv="content-language" content="en" />
            <meta name="robots" content="index, follow" />
            <link
              rel="canonical"
              href={`${configData.mainWebUrl}${pathname}`}
            />
            <meta name="keywords" content={post.acf.keywords} />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(generateSchemaMarkup(post)),
              }}
            />
          </head>
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
                <p
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
              </Col>
            </Row>
          </Container>
          <Footer/>
        </div>
      ))}
    </>
  );
};

export default Post;
