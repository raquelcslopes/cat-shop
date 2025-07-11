import cat from "../../assets/cat.jpeg";
import smileIcon from "../../assets/smile.svg";
import organicIcon from "../../assets/organic.svg";
import starIcon from "../../assets/star.svg";
import {
  Image,
  LeftContainer,
  Container,
  P,
  H1,
  Button,
  TopContainer,
  BottomContainer,
  Text,
  IconsContainer,
} from "./styles";
import { useCartContext } from "../../context/CartContext";

function HomePage() {
    const { addToCart } = useCartContext();

  return (
    <Container>
      <TopContainer>
        <Image src={cat} alt="Cat background" />
        <LeftContainer>
          <P>PRICE DROP ANNOUNCEMENT</P>
          <H1>CAT OF THE DAY</H1>
          <P $top={"0px"} $left={"390px"}>
            NOW AT $9,99
          </P>
          <Button onClick={addToCart}>ADD TO CART</Button>
        </LeftContainer>
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
    </Container>
  );
}

export default HomePage;
