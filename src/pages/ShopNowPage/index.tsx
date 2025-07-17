import { Container, FilterContainer, ProductsContainer } from "./styles";
import ListForSale from "../../components/ListForSale";
import FilterItem from "../../components/FilterItem";
import { getBreeds } from "../../service/breedsService";
import { useEffect, useState } from "react";
import { CatBreed } from "../../service/breedsService";

function ShopNow() {
  const [breeds, setBreeds] = useState<CatBreed[]>([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await getBreeds();
      setBreeds(response);
    };
    fetchBreeds();
  }, []);

  return (
    <>
      <Container>
        <FilterContainer>
          <FilterItem
            text={"BREED"}
            array={breeds.map((breed) => breed.name)}
          ></FilterItem>
          <FilterItem
            text={"COLOR"}
            array={breeds.map((breed) => breed.origin)}
          ></FilterItem>
          <FilterItem
            text={"GENDER"}
            array={breeds.map((breed) => breed.name)}
          ></FilterItem>
          <FilterItem
            text={"PRICE"}
            array={breeds.map((breed) => breed.temperament)}
          ></FilterItem>
          <FilterItem
            text={"TEMPERAMENT"}
            array={breeds.map((breed) => breed.temperament)}
          ></FilterItem>
          <FilterItem
            text={"ORIGIN"}
            array={breeds.map((breed) => breed.temperament)}
          ></FilterItem>
        </FilterContainer>
        <ProductsContainer>
          <ListForSale></ListForSale>
        </ProductsContainer>
      </Container>
    </>
  );
}

export default ShopNow;
