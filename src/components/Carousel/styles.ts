import styled from "styled-components";
import {theme} from "../constants"

export const SlideshowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
height: 300px;
width: 30px;
object-fit: cover;
`;

export const Title = styled.h1`
display: flex;
justify-content: center;
`;

export const Text = styled.p`
  background-color:rgba(0, 0, 0, 0.54);
  color: white;
  font-size: 20px;
  font-family: ${theme.font.primary};
display: flex;
justify-content: center;
`;

export const Button = styled.button`
background: none;
border: none;
color: black;
font-weight: bolder;
cursor: pointer;
`;