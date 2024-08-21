import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Amazon from "../../img/amazon.png";
import RRC from "../../img/RRC.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Worked with</span>
          <span id="color">RRC College & Dream Companies</span>
          <p>
            I have had the opportunity during my internship to work on real
            world projects, one of them is Radiology Artificial Intelligence
            with clients who runs a health care system.
            <br />
            These experiences have allowed me to refine my skills in application
            and web development, deliver high-quality solutions, and
            <br />
            adapt to various client needs and project requirements. My work
            spans across different industries, providing me with a broad
            <br />
            perspective and a solid foundation in both design and development.
            Whether it's building user-friendly interfaces or implementing
            <br />
            complex functionalities, I am committed to excellence and
            innovation.
          </p>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={RRC} alt="RRC" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Facebook" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;