import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Mcd from "../../img/mcd.png";
import Election from "../../img/election.png";
import Spotify from "../../img/spotify.png";
import Simon from "../../img/simon.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://mcdonal-s-github-io.vercel.app/products.html">
            <img src={Mcd} alt="Mcdonald's" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://lashman-singh.github.io/spotify--clone/">
            <img src={Spotify} alt="Spotify clone" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://lashman-singh.github.io/Simone-says-game/">
            {" "}
            <img src={Simon} alt="Simon says game" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://winnipeg-election-result.vercel.app/">
            <img src={Election} alt="Winnipeg Election" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
