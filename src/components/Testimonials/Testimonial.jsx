import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Baha from "../../img/Baha.jpg";
import Abhi from "../../img/Abhi.png";

const Testimonial = () => {
  const clients = [
    {
      img: Baha,
      review:
        "I've had the pleasure of teaching Lashman in both Object-Oriented System Analysis and Programming 2 with C#. Throughout these courses, Lashman consistently impressed me with his strong grasp of complex programming concepts and their ability to apply object-oriented principles effectively. I highly recommend him for any opportunities he seek, as he has the skills and dedication to excel in the field.",
    },
    {
      img: Abhi,
      review:
        "I've had the pleasure of working with Lashman for four months at Ace Project Space at Red River College. As a developer myself, I've witnessed firsthand Lashman's exceptional troubleshooting and code understanding abilities. Their ability to approach errors was instrumental in the RAIN Project. Beyond their technical expertise, Lashman is a highly collaborative and motivated individual who is always eager to learn and grow. I wholeheartedly recommend Lashman for any IT position.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Instructors and colleagues always receive </span>
        <span>exceptional work </span>
        <span>from me... </span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
