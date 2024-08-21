import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./Lashman_Singh_IT_Resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Professional</span>
        <span>Services</span>
        <p>
          I specialize in developing applications and websites with hands-on
          experience in various technologies. My skills include working with
          <br />
          MERN stack (MongoDB, Express.js, React.js, Node.js), C#, .NET, HTML,
          CSS, JavaScript, PHP. Additionally, I am proficient in
          <br />
          Python and Django for backend development. I have a proven track
          record in delivering high-quality solutions and enjoy tackling <br />
          complex challenges. Whether it's building responsive web pages or
          creating interactive user interfaces, I bring a results-driven
          <br />
          approach to every project.
        </p>

        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={
              "Proficient in UI/UX design with tools like Figma, Sketch, and Adobe XD."
            }
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Development"}
            detail={
              "Experienced in C#, .NET, HTML, CSS, JavaScript, React, Node.js, PHP, Python, and Django."
            }
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Database & APIs"}
            detail={
              "Skilled in SQL databases (PostgreSQL, MySQL), MongoDB, and RESTful API integration."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
