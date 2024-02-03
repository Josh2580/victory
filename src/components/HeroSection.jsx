import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import HeroImgFirst from "../assets/5slide.png";
import HeroImgSecond from "../assets/4.png";
import HeroImgThird from "../assets/1.png";
import { Button } from "react-bootstrap";

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  let style = {
    width: "100%",
    height: " 400px",
    objectFit: "cover",
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ heigth: "100vh" }}
    >
      <Carousel.Item>
        <img src={HeroImgFirst} alt="First slide" style={style} />
        <Carousel.Caption>
          <h3>Digital Excellence, Realized</h3>
          <br />

          <p style={{ fontSize: "13px" }}>
            <span className="fw-bold">Transform Your Online Presence: </span>
            Elevate your brand with cutting-edge web development and bespoke
            graphic design.
          </p>
          <br />

          <Button>Discover How</Button>
          <br />
          <br />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={HeroImgSecond} alt="Second slide" style={style} />
        <Carousel.Caption>
          <h3>Branding That Stands Out</h3>
          <br />

          <p style={{ fontSize: "13px" }}>
            <span className="fw-bold">Create a Lasting Impression: </span>
            From logos to comprehensive branding, we craft identities that
            resonate and endure.
          </p>
          <br />

          <Button>Begin Your Brand's Transformation</Button>
          <br />
          <br />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={HeroImgThird} alt="Third slide" style={style} />
        <Carousel.Caption>
          <h3>Intuitive Design Meets Functionality</h3>
          <br />

          <p style={{ fontSize: "13px" }}>
            <span className="fw-bold">Design That Delights: </span>
            Merge aesthetics with usability through our expert UI/UX design
            services. Enhance user experience, engagement, and satisfaction.
          </p>
          <br />

          <Button>Enhance Your User Experience</Button>
          <br />
          <br />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
