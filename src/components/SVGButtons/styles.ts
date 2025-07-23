import styled from "styled-components";
import { theme } from "../constants";

export const SVGButton = styled.button`
background: none;
border: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-family: ${theme.font.primary};
font-size: 18px;
gap: 5px;
`;

export const Image = styled.img`
width: 80%;
`;