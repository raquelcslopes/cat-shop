import styled from "styled-components";
import { theme } from "../../constants";

export const ItemsCount = styled.div<{$color?: boolean}>`
  color: black;
  background-color: ${theme.colors.WHITE};
  font-weight: 600;
  border-radius: 10%;
  height: fit-content;
  width: 20px;
  padding: 1px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
`;
