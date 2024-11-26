"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Modal, Button, Form, Spinner, ListGroup } from "react-bootstrap";
import Link from "next/link";
import { IoMdCloseCircleOutline } from "react-icons/io";

function SearchModal() {
  const [openModal, setOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchTime, setFetchTime] = useState(null);
  const [resultCount, setResultCount] = useState(0);

  const categoryIds = [
    44, 11, 39, 8, 14, 57, 17, 16, 55, 9, 51, 10, 13, 103, 104, 15, 12, 32, 1,
    35, 43,
  ]; // Example category IDs

  useEffect(() => {
    const fetchResults = async () => {
      if (!searchQuery) {
        setResults([]);
        setResultCount(0);
        setFetchTime(null);
        return;
      }

      setLoading(true);
      const startTime = performance.now();

      try {
        const resultsPerCategory = await Promise.all(
          categoryIds.map(async (id) => {
            const response = await fetch(
              `https://docs.communityactioncollab.org/wp-json/wp/v2/posts?search=${searchQuery}&categories=${id}`
            );
            return response.json();
          })
        );

        const allResults = resultsPerCategory.flat();
        const endTime = performance.now();

        setResults(allResults);
        setResultCount(allResults.length);
        setFetchTime((endTime - startTime).toFixed(2));
      } catch (error) {
        console.error("Error fetching results:", error);
      }

      setLoading(false);
    };

    const debounceTimer = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <div className="text-black">
      <Button
        variant="link"
        className="text-black fs-5 p-0 pe-5"
        onClick={() => setOpenModal(true)}
      >
        <FaSearch className="hover-search"/>
      </Button>

      {/* Modal */}
      <Modal
        show={openModal}
        onHide={() => setOpenModal(false)}
        centered
        backdrop="static"
        className="search-modal"
      >
        <Modal.Header closeButton className="bg-light">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Modal.Header>
        <Modal.Body className="bg-light">
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
              <p>Loading...</p>
            </div>
          ) : (
            <>
              {resultCount > 0 && (
                <p style={{ color: "#1c7c9c" }} className="fs-5">
                  Total <strong>{resultCount}</strong> results
                </p>
              )}
              {results.length > 0 ? (
                <ListGroup
                  className="overflow-auto"
                  style={{ maxHeight: "400px" }}
                >
                  {results.map((result, index) => {
                    const dynamicUrl = `/${result.slug || ""}`; // Ensure result.slug exists
                    const resultTitle = result.title?.rendered || "Untitled"; // Safely access the title

                    return (
                      <ListGroup.Item key={index}>
                        <Link
                          target="_self"
                          className="text-black hover-search"
                          href={dynamicUrl}
                          onClick={() => setOpenModal(false)}
                        >
                          <div
                            dangerouslySetInnerHTML={{ __html: resultTitle }}
                          ></div>
                        </Link>
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              ) : (
                searchQuery && <p>No results found.</p>
              )}
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SearchModal;
