import React from "react";
import "../../App.css";
// import ControlledCarousel from "../ControlledCarousel";
import ImageGallery from "../ImageGallery";
import SimpleReactLightbox from "simple-react-lightbox";

export default function Gallery() {
  return (
    <>
      <div className="gallery">GALLERY</div>
      {/* <ControlledCarousel /> */}
      <SimpleReactLightbox>
        <ImageGallery />
      </SimpleReactLightbox>
    </>
  );
}
