import { Container, FilterContainer, ProductsContainer } from "./styles";
import ListForSale from "../../components/ListForSale";
import FilterItem from "../../components/FilterItem";
import { getBreeds } from "../../service/breedsService";
import { useEffect, useState } from "react";
import { CatBreed } from "../../service/breedsService";

const catColors = [
  "Black",
  "White",
  "Gray",
  "Orange",
  "Brown",
  "Cream",
  "Blue",
  "Calico",
  "Tortoiseshell",
  "Tabby",
  "Ginger",
  "Buff",
  "Chocolate",
  "Lilac",
  "Fawn",
  "Seal",
  "Pointed",
  "Smoke",
  "Silver",
  "Golden",
];

const priceRanges = [
  "$10 - $20",
  "$20 - $30",
  "$30 - $40",
  "$40 - $50"
];


const catGender = ["Male", "Female"];

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
            array={catColors.map((color) => color)}
          ></FilterItem>
          <FilterItem
            text={"GENDER"}
            array={catGender.map((gender) => gender)}
          ></FilterItem>
          <FilterItem
            text={"PRICE"}
            array={priceRanges.map((price) => price)}
          ></FilterItem>
          <FilterItem
            text={"ORIGIN"}
            array={breeds.map((breed) => breed.origin)}
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
