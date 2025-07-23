import cat from "../../assets/cat.jpeg";
import smileIcon from "../../assets/smile.svg";
import organicIcon from "../../assets/organic.svg";
import starIcon from "../../assets/star.svg";
import {
  Image,
  RightContainer,
  DesktopWrapper,
  P,
  H1,
  Button,
  TopContainer,
  BottomContainer,
  Text,
  IconsContainer,
  MobileWrapper,
  InfoContainer,
  PMobile,
  H1Mobile,
  ButtonMobile,
  IconsContainerMobile,
} from "./styles";
import { useCartContext } from "../../context/CartContext";
import { useState, useEffect } from "react";

export const useIsMobile = (breakpoint = 800) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

function HomePage() {
  const { addToCart } = useCartContext();
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileWrapper>
      <img src={cat} alt="Cat of the day" />
      <InfoContainer>
        <PMobile>PRICE DROP ANNOUNCEMENT</PMobile>
        <H1Mobile>CAT OF THE DAY</H1Mobile>
        <PMobile>NOW AT $9,99</PMobile>
        <ButtonMobile onClick={addToCart}>ADD TO CART</ButtonMobile>
      </InfoContainer>
      <IconsContainerMobile>
        <img src={smileIcon} alt="Smile Icon" />
        <Text>30 000 + HAPPY COSTUMERS</Text>
      </IconsContainerMobile>
      <IconsContainerMobile>
        <img src={organicIcon} alt="Organic Icon" />
        <Text>ORGANIC NATURAL PRODUCTS</Text>
      </IconsContainerMobile>
      <IconsContainerMobile>
        <img src={starIcon} alt="Star Icon" />
        <Text>2 000+ 5 STARS REVIEW</Text>
      </IconsContainerMobile>
    </MobileWrapper>
  ) : (
    <DesktopWrapper>
      <TopContainer>
        <Image src={cat} alt="Cat background" />
        <RightContainer>
          <P>PRICE DROP ANNOUNCEMENT</P>
          <H1>CAT OF THE DAY</H1>
          <P $top={"0px"} $left={"390px"}>
            NOW AT $9,99
          </P>
          <Button onClick={addToCart}>ADD TO CART</Button>
        </RightContainer>
      </TopContainer>
      <BottomContainer>
        <IconsContainer>
          <img src={smileIcon} alt="Smile Icon" />
          <Text>30 000 + HAPPY COSTUMERS</Text>
        </IconsContainer>
        <IconsContainer>
          <img src={organicIcon} alt="Organic Icon" />
          <Text>ORGANIC NATURAL PRODUCTS</Text>
        </IconsContainer>
        <IconsContainer>
          <img src={starIcon} alt="Star Icon" />
          <Text>2 000+ 5 STARS REVIEW</Text>
        </IconsContainer>
      </BottomContainer>
    </DesktopWrapper>
  );
}

export default HomePage;
