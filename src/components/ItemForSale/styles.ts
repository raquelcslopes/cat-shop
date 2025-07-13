import styled from "styled-components";
import { theme } from "../../components/constants";

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const Image = styled.img`
height: 550px;
width: 350px;
object-fit: cover;
`;

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
width: 350px;
`;

export const Title = styled.div`
width: 330px;
font-family: ${theme.font.primary};
display: flex;
justify-content: center;
`;

export const TitleContainer = styled.div`
display: flex;
flex-direction: row;
width: 350px;
`;

export const Price = styled.div`
display: flex;
align-self:center;
font-family: ${theme.font.primary};
`;