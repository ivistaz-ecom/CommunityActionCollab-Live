"use client";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Header from "../../../../component/Header";
import Footer from "../../../../component/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaTelegram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ConfigData from "../../../../config.json";
import PageNotFound from "../../../../component/pageNotFound";
import Script from "next/script";
import {
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";

const formatDate = (date) => {
  const d = new Date(date);
  const options = { year: "numeric", month: "long", day: "2-digit" };
  return d.toLocaleDateString("en-US", options);
};

const Posts = ({ slug }) => {
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://docs.communityactioncollab.org/wp-json/wp/v2/posts?_embed&slug=${slug}`
        );
        if (!res.ok)
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        const result = await res.json();
        if (!result || result.length === 0) {
          setNotFound(true);
        } else {
          setData(result);
        }
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [slug]);

  if (notFound) return <PageNotFound />;

  const post = data.length > 0 ? data[0] : null;

  return (
    <>
      <Header />

      {post && (
        <head>
          <meta charSet="utf-8" />
          <title>{post.acf.meta_title}</title>
          <meta name="description" content={post.acf.meta_descriptions} />

          {/* Canonical */}
          <link
            rel="canonical"
            href={`${ConfigData.mainWebUrl}/blogs/${post.slug}`}
          />

          {/* Open Graph Tags */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.acf.meta_title} />
          <meta
            property="og:description"
            content={post.acf.meta_descriptions}
          />
          <meta
            property="og:url"
            content={`${ConfigData.mainWebUrl}/blogs/${post.slug}`}
          />
          <meta property="og:site_name" content="Community Action Collab" />
          <meta property="og:image" content={post._embedded["wp:featuredmedia"][0].source_url} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.acf.meta_title} />
          <meta
            name="twitter:description"
            content={post.acf.meta_descriptions}
          />
          <meta name="twitter:image" content={post._embedded["wp:featuredmedia"][0].source_url} />

          {/* Twitter Meta */}
          <meta name="twitter:card" content="summary_large_image" />

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "WebSite",
                name: "Community Action Collab",
                url: `${ConfigData.mainWebUrl}`,
                potentialAction: {
                  "@type": "SearchAction",
                  target: `${ConfigData.mainWebUrl}/${slug}{search_term_string}`,
                  "query-input": "required name=search_term_string",
                },
              }),
            }}
          />
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossOrigin="anonymous"
          />
        </head>
      )}

{post && (
 <>
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
        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
          <Image
            src={post._embedded["wp:featuredmedia"][0].source_url}
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
          <TwitterShareButton
            url={`${ConfigData.mainWebUrl}/${slug}`}
            title={post.title.rendered}
          >
            <FaTwitter size={30} />
          </TwitterShareButton>
          <LinkedinShareButton
            url={`${ConfigData.mainWebUrl}/${slug}`}
            summary={post.title.rendered}
          >
            <FaLinkedin size={30} />
          </LinkedinShareButton>
          <TelegramShareButton
            url={`${ConfigData.mainWebUrl}/${slug}`}
            title={post.title.rendered}
          >
            <FaTelegram size={30} />
          </TelegramShareButton>
          <WhatsappShareButton
            url={`${ConfigData.mainWebUrl}/${slug}`}
            title={post.title.rendered}
          >
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
 </>
)}


      <Footer />
    </>
  );
};

export default Posts;
