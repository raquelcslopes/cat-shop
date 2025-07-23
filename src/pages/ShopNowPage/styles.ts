import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FilterContainer = styled.div`
  height: fit-content;
  width: 20%;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-right: 50px;
  gap: 30px;
  padding-top: 30px;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  height: 100%;
  width: 80%;
  margin-right: 10px;
  margin-top: 10px;
  margin-left: 10px;
`;

export const ListMobile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
gap: 20px
`;