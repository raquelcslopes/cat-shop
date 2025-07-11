import styled from "styled-components";
import { theme } from "../../components/constants";

export const Container = styled.div`
display: flex;
flex-direction: column;
`;

export const TopContainer = styled.div`
display: flex;
flex-direction: row;
`;

export const BottomContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 50px;
margin-left: 50px;
margin-right: 50px;
`;

export const Image = styled.img`
width: 60%;
`;

export const LeftContainer = styled.div`
background-color: ${theme.colors.BLUE};
width: 100%;
`;

export const P = styled.p<{$top? : string, $left? : string}>`
color: ${theme.colors.WHITE};
font-family: ${theme.font.primary};
font-size: ${theme.fontSize.large};
padding-top: ${(props) => (props.$top || '150px')};
padding-left: ${(props) => (props.$left || '150px')};
`;

export const H1 = styled.h1`
color: ${theme.colors.WHITE};
font-family: ${theme.font.secondary};
font-size: 70px;
padding-left: 150px;
margin: 0px;
`;

export const Button = styled.button`
color: ${theme.colors.WHITE};
background-color: ${theme.colors.YELLOW};
padding: 10px;
border-radius: ${theme.borderRadius.small};
border: none;
display: flex;
justify-self: center;
margin-top: 300px;
cursor: pointer;
&:hover {
  opacity: 0.9;
}
`;

export const Text = styled.p`
font-family: ${theme.font.primary};
font-weight: bolder;
font-size: ${theme.fontSize.large};
`;

export const IconsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;