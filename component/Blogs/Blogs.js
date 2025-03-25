"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Header from "../Header";
import Banner from "@/app/impact/Ourimpact/Banner";
import ConfigData from "../../config.json";
import { FiArrowRight } from "react-icons/fi";
import RecentBlogs from "./RecentBlogs";

const Blogs = ({ categoryId = 105 }) => {
  const [posts, setPosts] = useState([]);
  const serverUrl = ConfigData.SERVER;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${ConfigData.siteUrl}posts?categories=${categoryId}&_embed&production[]=${serverUrl}`
        );
        const data = await response.json();

        const formattedData = data.map((post) => {
          const imageUrl =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/images/about_banner_1.jpeg";

          return {
            id: post.id,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, ""),
            imageUrl,
            slug: post.slug,
          };
        });

        setPosts(formattedData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    if (categoryId) fetchPosts();
  }, [categoryId]);

  return (
    <>
      <Header />
      <Banner />
      <div className="mt-5">
        <h2 className="text-center stories-text" style={{ color: "#1C7C9C" }}>
          Blogs
        </h2>
      </div>
      <RecentBlogs />
      <Container style={{ border: "", padding: "20px" }}>
        <Row>
          {posts.map((post, index) => (
            <Col
              key={post.id}
              md={4}
              className={`mb-0 ${
                index !== posts.length - 0
                  ? "border border-warning border-bottom"
                  : ""
              }`}
            >
              <Card
                className={`group border-0 overflow-hidden h-100 p-4 pt-4`}
                style={{
                  // boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                  border: "1px solid #ffc107",
                }}
              >
                <div className="relative border border-warning">
                  {/* Image */}
                  {post.imageUrl && (
                    <Image
                      width={500}
                      height={300}
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-100 h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="relative z-10">
                    <Card.Body className="p-0 pt-4 px-3">
                      <Card.Title
                        className="text-dark fw-bold post-content-title "
                        style={{
                          fontSize: "18px",
                          lineHeight: "1.4",
                        }}
                      >
                        <span
                          dangerouslySetInnerHTML={{ __html: post.title }}
                          className="border-2 border-warning"
                        />
                      </Card.Title>
                      <Card.Text
                        className="mt-2 text-muted post-content"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.6",
                        }}
                      >
                        <span  dangerouslySetInnerHTML={{ __html: post.excerpt }}/>
                      </Card.Text>
                    </Card.Body>
                  </div>
                  <div className="mt-3 pb-4 px-3">
                    <Link
                      href={`/blogs/${post.slug}`}
                      passHref
                      className="text-decoration-none"
                    >
                      <Button
                        variant=""
                        className=" d-flex align-items-center border-read-more"
                      >
                        Read More
                        <FiArrowRight className="ms-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Blogs;
