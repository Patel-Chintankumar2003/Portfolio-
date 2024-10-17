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
          Hey, my name is Chintan Patel. I am a Full-Stack Developer or Android Developer.<b> Thanks for visiting my portfolio.</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Patel-Chintankumar2003/" target="black">
          <BsGithub />
        </a>
        <a href="https://www.youtube.com/@tours3661" target="black">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/_chintan_patel_1?igsh=MXhsbzd1MTdocmp2dg==" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/patel-chintankumar-b5116324a/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
