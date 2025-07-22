import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import { getRandomImage } from "../../service/randomImageService";

function TopFavoritePage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await getRandomImage(5);
        setImages(response.map((item) => item.url));
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  if (loading) return <div>Loading...</div>;
  

  return (
    <div>
      <Carousel images={images}></Carousel>
    </div>
  );
}

export default TopFavoritePage;
