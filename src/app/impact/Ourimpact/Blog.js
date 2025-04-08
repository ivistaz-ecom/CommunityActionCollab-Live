"use client";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { RotatingLines } from "react-loader-spinner";
import configData from "../../../../config.json";

const Blog = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState([]);
  const [newCat, setNewCat] = useState();
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1); // Track the current page
  const [morePostsAvailable, setMorePostsAvailable] = useState(true);

  // Replace this with your actual 'blogs' category ID
  const excludedCategoryId = "105, 107";

  const communities = [
    { name: "Covid-response", value: "44" },
    { name: "Factory unorganised workers", value: "11" },
    { name: "Fisherfolk", value: "39" },
    { name: "Gay men & Transgenders", value: "8" },
    { name: "Health workers", value: "14" },
    { name: "In & out of school children", value: "17" },
    { name: "Migrants", value: "16" },
    { name: "Organization", value: "55" },
    { name: "Person with disabilities", value: "9" },
    { name: "Persons Living with HIV", value: "51" },
    { name: "Sex workers", value: "10" },
    { name: "Small farmers", value: "13" },
    { name: "Street children", value: "15" },
    { name: "Street vendors", value: "12" },
    { name: "Tribals", value: "32" },
    { name: "Urban Poor", value: "35" },
    { name: "Vaccination", value: "43" },
  ];

  const postFetch = async (pageNum = 1) => {
    const perPage = 10;
    const offset = (pageNum - 1) * perPage;
    setLoading(true);

    // Exclude the "blogs" category unless a specific category is selected
    let url = `${configData.siteUrl}posts?_embed&per_page=${perPage}&offset=${offset}&categories_exclude=${excludedCategoryId}`;

    if (newCat !== undefined) {
      url += `&categories=${newCat}`;
    }

    const response = await fetch(url);
    const newData = await response.json();
    setLoader(false);

    if (newData.length < perPage) {
      setMorePostsAvailable(false);
    }

    setData((prevData) =>
      pageNum === 1 ? newData : [...prevData, ...newData]
    );
    setPage(pageNum);
    setLoading(false);
  };

  const handleTabClick = (categoryId) => {
    setNewCat(categoryId);
    setMorePostsAvailable(true);
    postFetch();
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    postFetch(nextPage);
    setLoading(true);
  };

  useEffect(() => {
    postFetch();
    setLoading(false);
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <Container className="sticky-top">
            <h3 className="title-s fs-5">IN THE SECTION</h3>
            <Tab.Container id="vertical-tabs-example" defaultActiveKey="home">
              <Nav variant="fs-4" className="flex-column tab-about">
                <Nav.Item>
                  <Nav.Link className="t-tab fs-6 fw-light" href="/impact">
                    All Communities
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  {communities.map((community, index) => (
                    <Link
                      href=""
                      className="t-tab nav-link fs-6 fw-light"
                      key={index}
                      onClick={() => handleTabClick(community.value)}
                    >
                      {community.name}
                    </Link>
                  ))}
                </Nav.Item>
              </Nav>
            </Tab.Container>
          </Container>
        </Col>

        <Col lg={9} className="mt-5">
          <Row>
            {data.map((item) => (
              <Col key={item.id} sm={4}>
                <Link href={`/${item.slug}`} className="text-decoration-none">
                  <div className="card blog_card">
                    <Image
                      src={
                        item["_embedded"]["wp:featuredmedia"]["0"]["source_url"]
                      }
                      className="card-img-top"
                      alt=""
                      width={300}
                      height={300}
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        dangerouslySetInnerHTML={{
                          __html: item.title.rendered,
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>

          {loading && (
            <div className="text-center mt-4">
              <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="#1C7C9C"
                strokeWidth="2"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
              />
            </div>
          )}

          {morePostsAvailable && (
            <div className="text-center mt-4 mb-5">
              <Button className="p-btn" onClick={handleLoadMore}>
                Load More
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
