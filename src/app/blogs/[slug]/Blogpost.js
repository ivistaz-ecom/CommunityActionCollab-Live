'use client'
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Header from "../../../../component/Header";
import Footer from "../../../../component/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaTelegram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ConfigData from "../../../../config.json";
import PageNotFound from "../../../../component/pageNotFound";
import {
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import Script from "next/script";

const formatDate = (date) => {
  const d = new Date(date);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return d.toLocaleDateString("en-US", options);
};

const Posts = ({ slug }) => {
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [schemaJson, setSchemaJson] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://docs.communityactioncollab.org/wp-json/wp/v2/posts?_embed&slug=${slug}`
        );

        if (!res.ok) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        const result = await res.json();

        if (!result || result.length === 0) {
          setNotFound(true);
        } else {
          setPost(result[0]);
          
          // Create schema markup for the blog post
          const url = `${ConfigData.mainWebUrl}/blogs/${result[0].slug}`;
          const schemaMarkup = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": result[0].title.rendered.replace(/<[^>]*>/g, ''),
            "image": result[0].acf?.banner_image?.url || "",
            "datePublished": result[0].date,
            "dateModified": result[0].modified,
            "author": {
              "@type": "Person",
              "name": result[0].acf.blog_author_name.replace(/<[^>]*>/g, '')
            },
            "publisher": {
              "@type": "Organization",
              "name": "Community Action Collab",
              "logo": {
                "@type": "ImageObject",
                "url": `${ConfigData.mainWebUrl}/logo.png`
              }
            },
            "description": result[0].excerpt?.rendered?.replace(/<[^>]*>/g, '') || "",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          };
          
          setSchemaJson(JSON.stringify(schemaMarkup));
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog post:", error.message);
        setNotFound(true);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (notFound) return <PageNotFound />;

  const url = `${ConfigData.mainWebUrl}/blogs/${post.slug}`;

  return (
    <>
      {schemaJson && (
        <Script
          id="blog-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaJson }}
        />
      )}
      <Header />

      <div>
        <Container
          fluid
          className="impact_post d-flex flex-column justify-content-start text-start"
        >
          <Row>
            <Col>
              <h1
                className="post_title"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-start pt-3 text-white fs-5">
              <p
                className="text-start"
                dangerouslySetInnerHTML={{
                  __html: post.acf.blog_author_name,
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end pt-2 text-white fs-5">
              <p className="text-end">{formatDate(post.date)}</p>
            </Col>
          </Row>
        </Container>

        <Container fluid className="blog_post_content">
          <Row className="d-flex justify-content-center">
            <Col lg={6} className="g-0">
              {post.acf?.banner_image?.url && (
                <Image
                  src={post.acf.banner_image.url}
                  className="w-100 h-auto"
                  alt={post.title.rendered}
                  width={400}
                  height={400}
                />
              )}
            </Col>
          </Row>
          <Row className="post_contener">
            <Col lg={6} sm={12} className="blog_post">
              <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </Col>
            <Col>
              <div className="social-share">
                <TwitterShareButton url={url} title={post.title.rendered}>
                  <FaTwitter size={30} />
                </TwitterShareButton>
                <LinkedinShareButton url={url} summary={post.title.rendered}>
                  <FaLinkedin size={30} />
                </LinkedinShareButton>
                <TelegramShareButton url={url} title={post.title.rendered}>
                  <FaTelegram size={30} />
                </TelegramShareButton>
                <WhatsappShareButton url={url} title={post.title.rendered}>
                  <FaWhatsapp size={30} />
                </WhatsappShareButton>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <Link href="/blogs" className="post_button">
                SEE ALL BLOGS
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Posts;
