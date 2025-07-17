import styled from "styled-components";
import { theme } from "../constants";

export const Button = styled.button`
  background: none;
  border: none;
  border-top: 1px solid ${theme.colors.BLACK};
  border-bottom: 1px solid ${theme.colors.BLACK};
  font-size: ${theme.fontSize.medium};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 50px 30px 50px;
  cursor: pointer;
`;

export const Icon = styled.img<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const HiddenContainer = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? "flex" : "none")};
  flex-direction: column;
  font-size: ${theme.fontSize.medium};
  padding: 10px;
`;

export const HiddenItem = styled.label`
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
