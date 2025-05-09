import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "./SearchBar/SearchBar";
import NavLink from "./NavLink";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary header">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/cac_Logo.svg"
              width={200}
              height={50}
              alt="cac log"
              className="img_logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" className="me-4 nav-link fs-6">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="me-4 nav-link fs-6">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/action" className="me-4 nav-link fs-6">
                  Our Action
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/impact" className="me-4 nav-link fs-6">
                  Our Impact
                </Link>
              </li>
              <li className="nav-item dropdown mx-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Coalitions
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item fs-6"
                      href="https://www.cphcalliance.org/"
                      target="_blank"
                    >
                      CPHC - Comprehensive Primary Health Care
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item fs-6"
                      href="http://social-protection.communityactioncollab.org/"
                    >
                      SETU - Social Protection Coalition
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      className="dropdown-item fs-6"
                      href="https://greenhealthalliance.global/"
                    >
                      GHA - Green Health Alliance
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Initiatives
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item fs-6" href="/shilp">
                      SHILP
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item fs-6"
                      href="/economic-resilience"
                    >
                      Economic resilience
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  {/* <li>
                    <Link
                      className="dropdown-item fs-6"
                      href="https://covidactioncollab.org/vaxnow/"
                      target="_blank"
                    >
                      VaxNow
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li> */}
                  <li>
                    <Link
                      className="dropdown-item fs-6"
                      href="https://www.precisionhealth.in/"
                      target="_blank"
                    >
                      Precision Health
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-1">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resource Hub
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink href="/resource-hub">
                      Knowledgebase
                    </NavLink>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink href="/resource-hub">
                      Media
                    </NavLink>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item fs-6"
                      href="/blogs"
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="me-4 nav-link fs-6" href="/join-us">
                  Join Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="me-4 nav-link fs-6" href="/contact-us">
                  Contact Us
                </Link>
              </li>
              {/* <li><SearchModal/></li> */}
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div class="offcanvas-header">
          <Image
            src="/images/cac_Logo.svg"
            width={200}
            height={50}
            alt="cac log"
            className="img_logo"
          ></Image>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <nav className="">
            <div className="container-fluid">
              <div className="navbar">
                <ul className="navbar-nav" style={{ width: "100%" }}>
                  <li className="nav-item">
                    <Link href="/" className="me-4 nav-link fs-6">
                      Home
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link href="/about-us" className="me-4 nav-link fs-6">
                      About Us
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link href="/action" className="me-4 nav-link fs-6">
                      Our Action
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link href="/impact" className="me-4 nav-link fs-6">
                      Our Impact
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item dropdown mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Coalitions
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item fs-6"
                          href="https://www.cphcalliance.org/"
                          target="_blank"
                        >
                          CPHC - Comprehensive Primary Health Care
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          className="dropdown-item fs-6"
                          href="http://social-protection.communityactioncollab.org/"
                        >
                          SETU - Social Protection Coalition
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          target="_blank"
                          className="dropdown-item fs-6"
                          href="https://greenhealthalliance.global/"
                        >
                          GHA - Green Health Alliance
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <hr />
                  <li className="nav-item dropdown mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Our Initiatives
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          target="_blank"
                          className="dropdown-item fs-6"
                          href="http://social-protection.communityactioncollab.org/"
                        >
                          Social Protection
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item fs-6" href="/shilp">
                          SHILP
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-6"
                          href="/economic-resilience"
                        >
                          Economic resilience
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      {/* <li>
                        <Link
                          className="dropdown-item fs-6"
                          href="https://covidactioncollab.org/vaxnow/"
                          target="_blank"
                        >
                          VaxNow
                        </Link>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li> */}
                      <li>
                        <Link
                          className="dropdown-item fs-6"
                          href="https://www.precisionhealth.in/"
                          target="_blank"
                        >
                          Precision Health
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <hr />
                  <li className="nav-item dropdown mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Resource Hub
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink href="/resource-hub">
                          Knowledgebase
                        </NavLink>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink href="/resource-hub">
                          Media
                        </NavLink>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item fs-6"
                          href="/blogs"
                        >
                          Blogs
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <hr />
                  <li className="nav-item">
                    <Link className="me-4 nav-link fs-6" href="/join-us">
                      Join Us
                    </Link>
                  </li>
                  <hr />
                  <li className="nav-item d-flex">
                    <Link className="me-4 nav-link fs-6" href="/contact-us">
                      Contact Us
                    </Link>
                    {/* <SearchModal/> */}
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
