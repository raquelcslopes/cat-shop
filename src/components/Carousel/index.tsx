import { useState } from "react";
import { Button, Image, SlideshowContainer, Text, Title } from "./styles";

const catNames = ["Whiskers", "Mittens", "Shadow", "Luna", "Smokey"];

const catDescriptions = [
  "Professional napper with a PhD in Laziness.",
  "Eats like a king, acts like a drama queen.",
  "Meows at 3AM like it's a concert.",
  "Believes every box is a luxury condo.",
  "Thinks the laser pointer is a worthy opponent.",
];

const Carousel = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0); // Índice começa em 0

  const goToSlide = (n) => {
    let newIndex = n;
    if (n >= images.length) newIndex = 0;
    if (n < 0) newIndex = images.length - 1;
    setSlideIndex(newIndex);
  };

  return (
    <SlideshowContainer className="slideshow-container">
      <Button onClick={() => goToSlide(slideIndex - 1)}>❮</Button>

      {images.map((src, i) => (
        <div
          key={i}
          className={`mySlide ${i === slideIndex ? "active" : ""}`}
          style={{ display: i === slideIndex ? "block" : "none" }}
        >
          <Title>{catNames[i]}</Title>
          <Image src={src} alt={`Slide ${i + 1}`} style={{ width: "100%" }} />
          <Text>{catDescriptions[i]}</Text>
        </div>
      ))}

      <div className="dots-container">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === slideIndex ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          ></span>
        ))}
      </div>

      <Button onClick={() => goToSlide(slideIndex + 1)}>❯</Button>
    </SlideshowContainer>
  );
};

export default Carousel;
