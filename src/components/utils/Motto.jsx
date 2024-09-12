import React from "react";
import myVideo from "../../assets/video.mp4";

const Motto = () => {
    return (
        <div className="motto-container">
            <div className="motto">
                <div className="last">
                    <h1>HEALTHY CONSCIOUS LIVING</h1>
                    <span>
                        Healthy Conscious Living includes conscious business
                        practices to ensure our impact on our world and
                        communities is a positive one. At the foundation of
                        ORGANIC INDIA’s products, company, and sourcing is
                        regenerative agriculture that not only sustains but
                        replenishes the earth; fair trade practices that support
                        and honour farmer partners with equitable wages, health
                        care, and ongoing organic agricultural training; and a
                        LEED Platinum certified production facility that is a
                        marvel of top-tier sustainable design, construction, and
                        operations. This all culminates in the creation of
                        Organic, Non-GMO herbal teas and supplements that
                        support the health of the population, the vibrancy of
                        the planet, and the livelihood of communities in India.
                    </span>
                </div>
            </div>

            <div className="motto-video">
                <div className="last">
                    <div className="video-container">
                        <video width="100%" height="auto" controls>
                            <source src={myVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>{" "}
            </div>
        </div>
    );
};

export default Motto;
