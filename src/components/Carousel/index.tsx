import { useState } from "react";
import {
  CarouselContainer,
  CarouselImg,
  Container,
  Image,
  InfoContainer,
  Subtitles,
} from "./styles";
import SVGButtons from "../SVGButtons/index.tsx";
import arrowLeftIcon from "../../assets/arrowLeft.svg";
import arrowRightIcon from "../../assets/arrowRight.svg";

const catNames = ["Whiskers", "Mittens", "Shadow", "Luna", "Smokey"];

const catDescriptions = [
  "Professional napper with a PhD in Laziness.",
  "Eats like a king, acts like a drama queen.",
  "Meows at 3AM like it's a concert.",
  "Believes every box is a luxury condo.",
  "Thinks the laser pointer is a worthy opponent."
];

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Container>
      <h1>{catNames[currentIndex]}</h1>
      <CarouselContainer>
        <SVGButtons
          onClick={prevSlide}
          src={arrowLeftIcon}
          alt={"Arrow left"}
        ></SVGButtons>
        <CarouselImg>
          <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          <Subtitles>{catDescriptions[currentIndex]}</Subtitles>
        </CarouselImg>
        <SVGButtons
          onClick={nextSlide}
          src={arrowRightIcon}
          alt={"Arrow right"}
        ></SVGButtons>
      </CarouselContainer>
    </Container>
  );
};

export default Carousel;
