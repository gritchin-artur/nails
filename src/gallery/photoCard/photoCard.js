import { Div, DivContainer } from "./photoCard.styled";
import { mediaItem } from "../../images";

export const PhotoCard = () => {
  //   const { filter, onChange } = useFilterParams();

  return (
    <DivContainer>
      {mediaItem.map((imag, index) => (
        <Div
          style={{
            backgroundImage: `url(${imag})`,
          }}
          key={index}
        />
      ))}
      {/* <Img src={nails} alt="nails" width="300px" height="300px"></Img> */}
    </DivContainer>
  );
};
