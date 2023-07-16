import React from "react";
import styled from "styled-components";

const ImageContainer = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
`;

interface ImageProps {
  src: string;
  alt: string;

}

const ImageSlot: React.FC<ImageProps> = ({ src, alt }) => {
  return <ImageContainer src={src} alt={alt} />;
};

export default ImageSlot;