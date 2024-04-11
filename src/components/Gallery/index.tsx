import React from "react";

import "./styles.scss";

interface ImageData {
  url: string;
  alt: string;
}

interface GalleryProps {
  images: ImageData[];
}

const Gallery: React.FC<GalleryProps> = (props) => {
  return (
    <article className="gallery">
      {props.images?.map(
        (image, index) =>
          index < 8 && (
            <img key={index} src={image.url} alt={image.alt ? image.alt : ""} />
          )
      )}
    </article>
  );
};

export default Gallery;
