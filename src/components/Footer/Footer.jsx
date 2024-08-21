import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div id="color" className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a
          href="mailto:lashmansingh38034@gmail.com"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span>lashmansingh38034@gmail.com</span>
        </a>
        <div className="f-icons">
          <a href="https://www.instagram.com/lashman_singh034/">
            <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/-lashman-singh/">
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/Lashman-singh">
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
