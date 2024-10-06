import { Artwork } from "../interfaces/ArtData.ts";
import styled from "styled-components";

const ArtworkCard = styled.div`
  margin: 2vh 2vw;
  border: 1px solid #ccc;
  width: 30vw;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ArtworkImage = styled.img`
  max-width: 25vw;
  height: auto;
`;

interface Props {
    data: Artwork[];
}

const MyDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const MyH2 = styled.h2`
    text-align: center;
    margin: 2vh 3vw;
`
const MyP = styled.p`
    text-align: center;
    margin: 2vh 3vw;
`

export default function ArtworkDisplay({ data }: Props) {
    const getImageUrl = (image_id: string) =>
        `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

    return (
        <MyDiv>
            {data.map((artwork) => (
                <ArtworkCard key={artwork.id}>
                    <MyH2>{artwork.title}</MyH2>
                    <ArtworkImage
                        src={getImageUrl(artwork.image_id)}
                        alt={artwork.alt_text}
                    />
                    <MyP>Thank you to the artist {artwork.artist_display}</MyP>
                </ArtworkCard>
            ))}
        </MyDiv>
    );
}