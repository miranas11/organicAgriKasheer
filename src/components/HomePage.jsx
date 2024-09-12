import React from "react";
import SlideShow from "./utils/SlideShow";
import "../styles/HomePage.css";

import usericon from "../assets/user-icon.avif";

import Motto from "./utils/Motto";
import UserReviews from "./utils/UserReviews";

const HomePage = () => {
    return (
        <>
            <SlideShow />
            <div className="homepage">
                <Motto />
                <UserReviews />
            </div>
        </>
    );
};

export default HomePage;

const UserReviews1 = () => {
    return (
        <div className="reviews-container">
            <div className="review">
                <div className="user-photo-container">
                    <div className="user-photo-frame">
                        <img src={usericon} className="user-icon" alt="User" />
                    </div>
                </div>
                <div className="user-review">
                    <div className="user-review-box">
                        <div className="review-product-name">Gajar Anchar</div>
                        <div className="review-data">
                            jkh hajsfj asdfhjkh hasdfhkj ahdhfkjahs hsadj
                            hkahska adskasfaskj kahsjfdhjakfkja sjkhfdah fdkjh
                            fkjlha s
                        </div>
                        <div className="user-name">Mir Anas</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
