import styled from "styled-components";
import { theme } from "../constants";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  @media (min-width: 800px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
  color: white;
  list-style: none;;
  font-family: ${theme.font.primary};
`;

export const Burger = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    cursor: pointer;

    div {
      height: 3px;
      background: #333;
      border-radius: 2px;
    }
  }
`;

export const MobileMenu = styled.ul<{ $open: boolean }>`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 40px;
    left: 0;
    width: 100px;
    gap: 5px;
    height: 100px;
    background: black;

    padding: 1rem;
    transform: ${({ $open }) =>
      $open ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;
