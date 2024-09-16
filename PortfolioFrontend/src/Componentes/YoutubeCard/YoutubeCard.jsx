import React from "react";
import { Typography } from "@mui/material";
import "./YoutubeCard.css";
const YoutubeCard = ({ url = "https://youtu.be/fDQIzS1oB8U?si=Mtr7bho829qiX-GZ", title = "Title here ", image="https://www.lawyersnjurists.com/wp-content/uploads/2019/03/Look_Out_For_The_Different_Types_Of_Hindu_Marriages_Defined_In_Chronicles.jpg", }) => {



  return (
    <div className="youtubeCard">
      <a href={url} target="_blank">
        <img src={image} alt="video" />
        <Typography>{title}</Typography>
      </a>
    </div>
  );
};

export default YoutubeCard;
