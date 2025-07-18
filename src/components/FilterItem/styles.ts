import styled from "styled-components";
import { theme } from "../constants";

export const Button = styled.button`
  background: none;
  border: none;
  border-bottom: 1px solid ${theme.colors.BLACK};
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  cursor: pointer;
`;

export const Icon = styled.img<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

export const HiddenContainer = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? "flex" : "none")};
  flex-direction: column;
  font-size: ${theme.fontSize.small};
  padding: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const HiddenItem = styled.label`
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  font-size: 18px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const CheckBox = styled.div`
display: flex;
`;