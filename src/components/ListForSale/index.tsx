import { useEffect, useState } from "react";
import ItemForSale from "../../components/ItemForSale";
import { getRandomImage } from "../../service/randomImageService";
import { Container } from "./styles";

interface CatImage {
  url?: string;
  id?: string;
}

function ListForSale() {
  const [randomImage, setRandomImage] = useState<CatImage[] | null>([]);
  const [loading, setLoading] = useState(true);

  const catNames = [
    "Mingau",
    "Luna",
    "Simba",
    "Nina",
    "Tom",
    "Léo",
    "Mia",
    "Felícia",
    "Chico",
    "Bidu",
    "Whiskers",
    "Garfield",
    "Salem",
    "Tigrão",
    "Bolota",
    "Bolinha",
    "Fofinho",
    "Mimi",
    "Nino",
    "Biscoito",
    "Tico",
    "Zizi",
    "Lili",
    "Dudinha",
    "Amora",
    "Pipoca",
    "Pitico",
    "Jujuba",
    "Nega",
    "Juju",
    "Lorde Ronron",
    "Sr. Bigodes",
    "Capitão Miaus",
    "Mestre Gato",
    "Don Gato",
    "Chatonildo",
    "Gatonildo",
    "Feijão",
    "Panqueca",
    "Sushi",
    "Batata",
    "Zé Peludo",
    "Miojo",
    "Pixel",
    "Teclado",
    "Crookshanks",
    "Bagheera",
    "Puss in Boots",
    "Yoda",
    "Gollum",
    "Arya",
    "Loki",
    "Totoro",
    "Stitch",
    "Meowth",
    "Doraemon",
    "Aurora",
    "Astro",
    "Orion",
    "Nebula",
    "Eclipse",
    "Cosmos",
    "Nyx",
    "Pandora",
    "Sol",
    "Gaia",
    "Misty",
    "Selene",
    "Atlas",
    "Vega",
    "Neve",
    "Carvão",
    "Cinza",
    "Pingo",
    "Mancha",
    "Chocolate",
    "Areia",
    "Listrado",
    "Café",
    "Bege",
    "Tigrinho",
    "Panda",
    "Dourado",
    "Sombra",
    "Pérola",
  ];

  const randomCatName = () => {
    const index = Math.floor(Math.random() * catNames.length);
    return catNames[index];
  };

  const randomPrice = () => {
    const random = (Math.random() * 40 + 10).toFixed(2);
    return `${random}`;
  };

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await getRandomImage(3);
        setRandomImage(response);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRandomImage();
  }, []);

  if (loading) return <p>Image is loading</p>;
  if (!randomImage) return <p>Image is temporarily unavailable </p>;

  return (
    <Container>
      <ItemForSale
        image={randomImage[0].url || ""}
        title={randomCatName()}
        price={randomPrice()}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></ItemForSale>
      <ItemForSale
        image={randomImage[1].url || ""}
        title={randomCatName()}
        price={randomPrice()}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></ItemForSale>
      <ItemForSale
        image={randomImage[2].url || ""}
        title={randomCatName()}
        price={randomPrice()}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></ItemForSale>
    </Container>
  );
}

export default ListForSale;
