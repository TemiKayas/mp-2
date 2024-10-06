import { useEffect, useState } from "react";
import ArtworkDisplay from "./components/ArtworkDisplay";
import { Artwork } from "./interfaces/ArtData.ts";
import styled from "styled-components";
import MyHeader from "./components/MyHeader.tsx";
import Footer from "./components/Footer.tsx";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
  background-color: lightcoral;
`;

export default function App() {
  const [data, setData] = useState<Artwork[]>([]);

    useEffect(() => {
    async function fetchData(): Promise<void> {
        try {
            const rawData = await fetch("https://api.artic.edu/api/v1/artworks?limit=25");
            const { data }: { data: Artwork[] } = await rawData.json();

            // filter out images with null image_id
            const filteredData = data.filter((artwork) => artwork.image_id !== null);

            // call helper function to ensure valid images
            const validImages = await validateImages(filteredData);

            // use only 10 valid images
            setData(validImages.slice(0, 10));
        } catch (error) {
            console.log("There was an error: " + error);
          }
        }

        fetchData();
    }, []);

    // helper function to validate images
    // refrenced https://stackoverflow.com/questions/63472275/returning-status-values-after-using-promise-for-onload-and-onerror
    const validateImages = async (artworks: Artwork[]): Promise<Artwork[]> => {
        const checks = artworks.map((artwork) => {
            const imageUrl = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;

            return new Promise<Artwork | null>((resolve) => {
                const img = new Image();
                img.src = imageUrl;
                img.onload = () => resolve(artwork); // valid image
                img.onerror = () => resolve(null);   // bad image
            });
        });

    // get rid of null and non-loading images
    const validatedArtworks = (await Promise.all(checks)).filter(
        (artwork): artwork is Artwork => artwork !== null
    );
    return validatedArtworks;
    };

    return (
      <>
        <MyHeader />
        <ParentDiv>
          <ArtworkDisplay data={data} />
        </ParentDiv>
        <Footer />
      </>
    );
}