import styled from "styled-components";
import { theme } from "../constants";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.BLACK};
  color: ${theme.colors.WHITE};
  margin: 0;
  padding: 0;
  height: 70px;
  width: 100%;
  justify-content: space-between;
`;

export const BrandName = styled.button`
  font-weight: bolder;
  font-size: ${theme.fontSize.large};
  font-family: ${theme.font.secondary};
  padding-left: 50px;
  display: flex;
  align-self: center;
  background: none;
  border: none;
  color: ${theme.colors.WHITE};
`;

export const Li = styled.li`
  list-style: none;
    font-family: ${theme.font.primary};
    font-size: ${theme.fontSize.medium};
    cursor: pointer;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-self: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-right: 10px;
`;
