import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import HeroImgFirst from "../assets/5slide.png";
import HeroImgSecond from "../assets/2slide.png";
import HeroImgThird from "../assets/1slide.png";
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

          <p style={{ fontSize: "14px" }}>
            <span className="fw-bolder">
              Where Web Development Meets Stunning Design:{" "}
            </span>
            Craft an unforgettable online presence with seamless web development
            and vibrant graphic design. Elevate your brand today.
          </p>
          <br />

          <Button>Explore Our Services</Button>
          <br />
          <br />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={HeroImgSecond} alt="Second slide" style={style} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={HeroImgThird} alt="Third slide" style={style} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroSection;
