import React, { useState, useEffect } from "react";
import "../../styles/SlideShow.css"; // Add your custom CSS styles
import image2 from "../../assets/image2.jpg"; // Replace with your image paths

import image5 from "../../assets/image5.jpg";

const images = [image2, image5];

const SlideShow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const delay = 8000; // 3 seconds delay between slides

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Auto-play functionality using useEffect
    useEffect(() => {
        const timer = setInterval(nextSlide, delay);
        return () => clearInterval(timer); // Clean up the timer
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={
                            index === currentIndex ? "slide active" : "slide"
                        }
                    >
                        {index === currentIndex && (
                            <img src={image} alt={`Slide ${index + 1}`} />
                        )}
                    </div>
                ))}

                {/* Navigation Controls */}
                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>

            {/* Dots for navigation */}
            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={
                            index === currentIndex ? "dot active" : "dot"
                        }
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default SlideShow;
