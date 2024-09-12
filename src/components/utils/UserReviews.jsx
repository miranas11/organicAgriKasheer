import React, { useState, useEffect } from "react";
import "../../styles/UserReviews.css";
import usericon from "../../assets/user-icon.avif";

const reviews = [
    {
        productName: "Gajar Anchar",
        review: "This is the best product I've used. It's fresh and tastes amazing. Totally recommended!",
        userName: "Mir Anas",
    },
    {
        productName: "Apple Juice",
        review: "Refreshing and organic! I can't believe how much better it tastes than other brands.",
        userName: "Sara Khan",
    },
    {
        productName: "Organic Honey",
        review: "The best honey I've ever tasted. I love the flavor, and it feels great knowing it's organic.",
        userName: "John Doe",
    },
];

const UserReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    // Auto-play functionality using useEffect (optional)
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000); // Change slides every 5 seconds
        return () => clearInterval(timer); // Clean up the timer
    }, []);

    return (
        <div className="reviews-container">
            <div className="carousel-buttons">
                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>

            <div className="review">
                <div className="user-photo-container">
                    <div className="user-photo-frame">
                        <img src={usericon} className="user-icon" alt="User" />
                    </div>
                </div>
                <div className="user-review">
                    <div className="user-review-box">
                        <div className="review-product-name">
                            {reviews[currentIndex].productName}
                        </div>
                        <div className="review-data">
                            {reviews[currentIndex].review}
                        </div>
                        <div className="user-name">
                            {reviews[currentIndex].userName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserReviews;
