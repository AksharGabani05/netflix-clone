import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaPlay, FaHeart, FaPlus, FaInfoCircle } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import './Poster.css'; 

const Poster = () => {
  const [showModal, setShowModal] = useState(false); 
  const [movieDetails, setMovieDetails] = useState(null);

  const categories = [
    { title: 'Popular on Netflix', images: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12'] },
    { title: 'Trending Now', images: ['t1', 't2', 't3', 't4', 't5', 't6'] },
    { title: 'TV Shows', images: ['tv1', 'tv2', 'tv3', 'tv4', 'tv5', 'tv6', 'tv7', 'tv8', 'tv9', 'tv10', 'tv11', 'tv12'] },
    { title: 'Blockbuster Action & Adventure', images: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'] },
    { title: 'Netflix Originals', images: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'] },
  ];

  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageClick = (imageName) => {
    const movieInfo = {
      title: `Movie: ${imageName}`,
      description: `Details about the movie: ${imageName}`,
      imageUrl: `https://github.com/carlosavilae/Netflix-Clone/blob/master/img/${imageName}.PNG?raw=true`,
    };
    setMovieDetails(movieInfo);
    setShowModal(true); 
  };

  return (
    <div className="wrapper bg-dark text-light">
      <section className="main-container container mt-5">
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="location mb-5">
            <h1 className="category-title">{category.title}</h1>
            <Slider {...sliderSettings}>
              {category.images.map((img, index) => (
                <div key={index} className="image-container p-2" onClick={() => handleImageClick(img)}>
                  <img
                    src={`https://github.com/carlosavilae/Netflix-Clone/blob/master/img/${img}.PNG?raw=true`}
                    alt={img}
                    className="img-fluid shadow rounded"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </section>
      {movieDetails && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          dialogClassName="custom-modal"
          backdrop="static" 
        >
          <Modal.Header closeButton className="text-light">
            <Modal.Title>{movieDetails.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

  <img
    src={movieDetails.imageUrl}
    alt={movieDetails.title}
    className="img-fluid mb-3 w-100"  
  />
  <p>{movieDetails.description}</p>
</Modal.Body>

          <Modal.Footer className="d-flex justify-content-between">
            <div>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                <FaPlay className="me-2" />Play
              </Button>
              <Button variant="outline-danger" onClick={() => console.log("Liked")}>
                <FaHeart className="me-2" /> Like
              </Button>
            </div>
            <div>
              <Button variant="outline-info" onClick={() => console.log("Added to My List")}>
                <FaPlus className="me-2" />List
              </Button>
              <Button variant="outline-primary" onClick={() => console.log("More Info")}>
                <FaInfoCircle className="me-2" />Info
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Poster;
