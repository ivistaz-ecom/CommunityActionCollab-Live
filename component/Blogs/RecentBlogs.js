"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ConfigData from "../../config.json";
import {
  Carousel,
  Button,
  Spinner,
  Row,
  Col,
  Container,
  Card,
} from "react-bootstrap";
import Image from "next/image";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { useMediaQuery } from "react-responsive"; // Add this import

const RecentBlogs = () => {
  const siteUrl = ConfigData.wpApiUrl;
  const serverUrl = ConfigData.SERVER;
  const categoryId = 107;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const carouselRef = useRef(null);

  // Media query to detect desktop screens
  const isDesktop = useMediaQuery({ minWidth: 992 });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://docs.communityactioncollab.org/wp-json/wp/v2/posts?categories=${categoryId}&_embed&production[]=${serverUrl}`
        );
        const data = await response.json();

        const formattedData = data.map((post) => {
          const imageUrl =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/images/about_banner_1.jpeg";

          return {
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, ""), // Remove HTML tags
            imageUrl,
            slug: post.slug,
            media_link: post.acf?.media_link || null,
          };
        });

        setData(formattedData.slice(0, 4)); // Only show the latest 4 blogs
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (categoryId) fetchPosts();
  }, [siteUrl, serverUrl, categoryId]);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <Container className="mx-auto">
      <div className="pb-5">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <Container className="d-flex justify-content-center gap-3">
              <Card className="border-2 p-4 mt-4 animate-pulse">
                <Row className="align-items-center">
                  <Col lg="6" className="d-flex justify-content-center">
                    <div
                      style={{
                        backgroundColor: "#746C6C",
                        height: "160px",
                        width: "384px",
                      }}
                    />
                  </Col>
                  <Col lg="6">
                    <div
                      className="mb-2"
                      style={{
                        height: "12px",
                        width: "384px",
                        backgroundColor: "#B9B9B9",
                      }}
                    />
                    <div
                      className="mb-2"
                      style={{
                        height: "12px",
                        width: "320px",
                        backgroundColor: "#B9B9B9",
                      }}
                    />
                    <div
                      className="mb-2"
                      style={{
                        height: "12px",
                        width: "288px",
                        backgroundColor: "#B9B9B9",
                      }}
                    />
                  </Col>
                </Row>
              </Card>
            </Container>
          </div>
        ) : (
          <Container>
          <Carousel
  ref={carouselRef}
  interval={isDesktop ? null : 3000} // Disable auto-slide on desktop
  controls={false}
  indicators={false}
  className="mt-4 border border-warning shadow-sm"
>
  {data.map((post) => (
    <Carousel.Item key={post.id}>
      <Row>
        {/* Left Side - Image */}
        <Col md={6} className="p-0">
          <Image
            width={500}
            height={400}
            src={post.imageUrl}
            alt={post.title}
            className="w-100 object-fit-cover"
          />
        </Col>

        {/* Right Side - Content */}
        <Col
          md={6}
          className="p-4 d-flex flex-column justify-content-center"
        >
          <h3
            className="mb-3 fw-bold text-black"
            dangerouslySetInnerHTML={{ __html: post.title }}
          ></h3>

          <div
            className="text-muted post-content-recent"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          ></div>

          <div className="mt-3 pb-4">
            {post.media_link ? (
              <a
                href={post.media_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <Button
                  variant=""
                  className="d-flex align-items-center border-read-more"
                >
                  Read More
                  <FiArrowRight className="ms-2" />
                </Button>
              </a>
            ) : (
              <Link
                href={`/blogs/${post.slug}`}
                className="text-decoration-none"
              >
                <Button
                  variant=""
                  className="d-flex align-items-center border-read-more"
                >
                  Read More
                  <FiArrowRight className="ms-2" />
                </Button>
              </Link>
            )}
          </div>
        </Col>
      </Row>
    </Carousel.Item>
  ))}
</Carousel>
          </Container>
        )}

        {/* Custom Arrow Buttons */}
        {(isDesktop && data.length > 2) || !isDesktop ? (
          <div className="d-flex justify-content-center gap-0 mt-4">
            <Button
              variant="light"
              className="border rounded-0 shadow"
              onClick={handlePrev}
            >
              <LuArrowLeft size={24} />
            </Button>
            <Button
              variant="light"
              className="border rounded-0 shadow"
              onClick={handleNext}
            >
              <LuArrowRight size={24} />
            </Button>
          </div>
        ) : null}
      </div>
    </Container>
  );
};

export default RecentBlogs;