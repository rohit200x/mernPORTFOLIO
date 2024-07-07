import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, I'm Rohit Shendurkar, a Full-Stack Developer and pre-final year student at the Indian Institute of Information Technology, Nagpur. Passionate about coding and technology, I'm on a journey to innovate and create meaningful solutions.  <b>    Coading Enthusiast</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
        <Typography>Email: rohitshendurkar2017@gmail.com</Typography>
        <Typography>Phone: +91 8421252700</Typography>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/rohit200x" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com" target="black">
          <BsYoutube />
        </a>
        <a href="https://instagram.com/rohit_200x/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/rohit-shendurkar-6b70b127b//" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
