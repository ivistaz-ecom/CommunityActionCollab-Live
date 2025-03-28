// components/Banner.js
"use client";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import CountUp from "react-countup";
import { Navbar, NavDropdown } from "react-bootstrap";
import Image from "next/image";

function Banner() {
  return (
    <Container fluid className="p-0">
    <Image className="w-100 img-fluid" src="/images/imapact-banner.png" width={1200} height={500} />
  </Container>
  
  );
}

export default Banner;
