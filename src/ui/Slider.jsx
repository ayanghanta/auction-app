import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoEllipseOutline,
  IoEllipseSharp,
} from "react-icons/io5";
import { useState } from "react";
import styles from "./Slider.module.css";

function Slider({ imagesx }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/antique-camera.jpg",
    "/images/gold-old-compas.jpg",
    "/images/pocket-watch.jpg",
    "/images/retro-typewriter.jpg",
    "/images/sand-watch.jpg",
    "/images/vintage-mask.jpg",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.slideImage}
            />
          ))}
        </div>
        <IoChevronBackOutline
          className={styles.navIconLeft}
          onClick={handlePrev}
        />
        <IoChevronForwardOutline
          className={styles.navIconRight}
          onClick={handleNext}
        />
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={
              index === currentIndex ? styles.activeDot : styles.inactiveDot
            }
          >
            {index === currentIndex ? <IoEllipseSharp /> : <IoEllipseOutline />}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
