import { List, Img, Ul } from "./imageGalleryItem.styled";
import { mediaItem } from "../../images/index";
import { useState } from "react";
import Modal from "../modal/modal";

const ImageGalleryItem = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSelectedImage = (imag) => {
    setSelectedImage(imag);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setShowModal(false);
  };

  return (
    <>
      <Ul>
        {mediaItem.map((imag, index) => (
          <List key={index}>
            <Img
              src={imag}
              alt={imag.toString()}
              onClick={() => handleSelectedImage(imag)}
            />
          </List>
        ))}
        {showModal && (
          <Modal selectedImage={selectedImage} onClose={closeModal} />
        )}
      </Ul>
    </>
  );
};

export default ImageGalleryItem;
