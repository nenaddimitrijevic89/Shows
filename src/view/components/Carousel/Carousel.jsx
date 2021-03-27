import React from "react";

const Carousel = ({ images }) => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        {images &&
          images.map((img, i) => (
            <div class={`carousel-item ${i === 0 && `active`}`} key={img.id}>
              <img
                class="d-block w-100"
                src={img.original}
                alt={img.original}
              />
            </div>
          ))}
      </div>
      <a
        class="carousel-control-prev"
        // href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        // href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
