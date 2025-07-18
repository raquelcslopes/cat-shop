import SVGButton from "../SVGButtons/index";
import heartIcon from "../../assets/heart.svg";
import {
  Image,
  Container,
  InfoContainer,
  TitleContainer,
  Title,
  Price,
} from "./styles";
import HeartButton from "../HeartButton";

interface ItemForSaleProps {
  image: string;
  title: string;
  price: string;
  onClick: () => void;
}

//TODO add logic of heart button

function ItemForSale({ image, title, price, onClick }: ItemForSaleProps) {
  return (
    <Container>
      <Image src={image} alt="Cat photo" />
      <InfoContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <HeartButton></HeartButton>
        </TitleContainer>
        <Price>{price}</Price>
      </InfoContainer>
    </Container>
  );
}

export default ItemForSale;
