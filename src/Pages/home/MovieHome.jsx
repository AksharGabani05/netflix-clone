import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlay, FaListAlt } from "react-icons/fa"; 
import Poster from "../../components/Poster";
import Header from "../../components/Header";
import Footer from "./Footer";

function MovieHome() {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
     
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Header />
          <Container
            fluid
            className="bg-dark text-light p-5"
            style={{
              position: "relative",
              backgroundImage: "url('https://img.etimg.com/photo/msid-96576274/jung_e.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
           
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            ></div>

            <Row
              className="align-items-center h-100"
              style={{ position: "relative", zIndex: 1 }}
            >
           
              <Col
                md={6}
                className="d-flex flex-column justify-content-center align-items-start text-left"
              >
                <h1 className="display-3 font-weight-bold">STRANGER THINGS</h1>
                <p className="lead">
                  When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
                </p>

                <div className="d-flex gap-3 mt-4 flex-wrap">
                  <Button
                    variant="danger"
                    size="lg"
                    className="d-flex align-items-center justify-content-center responsive-btn"
                    style={{
                      borderRadius: "50px",
                      padding: "12px 25px",
                      fontSize: "18px",
                      boxShadow: "0px 4px 10px rgba(255, 0, 0, 0.2)",
                      transition: "transform 0.3s ease",
                      textTransform: "uppercase",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    <FaPlay className="me-2" /> Watch Now
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="d-flex align-items-center justify-content-center responsive-btn"
                    style={{
                      borderRadius: "50px",
                      padding: "12px 25px",
                      fontSize: "18px",
                      boxShadow: "0px 4px 10px rgba(128, 128, 128, 0.2)",
                      transition: "transform 0.3s ease",
                      textTransform: "uppercase",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    <FaListAlt className="me-2" /> Add to List
                  </Button>
                </div>

                <div className="mt-4">
                  <h3 className="h4">Ranking: 9.0/10</h3>
                </div>
              </Col>
            </Row>
          </Container>
          <Poster />
          <Footer />
        </>
      )}
    </>
  );
}

export default MovieHome;


