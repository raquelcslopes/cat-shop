import SVGButton from "../SVGButtons/index";
import heartIcon from "../../assets/heart.svg";
import { Image, Container, InfoContainer, TitleContainer, Title, Price } from "./styles";

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
        <SVGButton
          src={heartIcon}
          alt={"Heart Icon"}
          onClick={onClick}
        ></SVGButton>
        </TitleContainer>
        <Price>{price}</Price>
      </InfoContainer>
    </Container>
  );
}

export default ItemForSale;
