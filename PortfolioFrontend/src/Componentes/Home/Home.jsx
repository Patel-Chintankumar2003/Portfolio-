import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine";
import {
  SiAndroid,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "../YoutubeCard/YoutubeCard";

const Home = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 8);

    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 120);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.background = spaceTexture;

    const constSpeed = 0.01;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1 ">
            <img
              src="https://1.bp.blogspot.com/-epdCr-KFzhM/YGRaLEXsgHI/AAAAAAAAdAE/kJZq7IQgKUc4tkbOrjNLN7ZvAL3kZfNPwCLcBGAsYHQ/s776/Meena%2BRashi%2BMantra%2BFor%2BMarriage.jpg"
              alt="face1"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://www.lawyersnjurists.com/wp-content/uploads/2019/03/Look_Out_For_The_Different_Types_Of_Hindu_Marriages_Defined_In_Chronicles.jpg"
              alt="face2"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://videogiri.com/wp-content/uploads/2022/10/Hindu-Marriage-Biodata-Template-1.jpg"
              alt="face3"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://i.pinimg.com/originals/1f/cd/34/1fcd347ddb6adb64006f5dd58335b5ee.jpg"
              alt="face4"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.lgzIjEz3_X_WSG0BvolJ8QHaEj&pid=Api&P=0&h=220"
              alt="face5"
            />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.gVbj_ROeM5mX7XYNT0TuigHaFB&pid=Api&P=0&h=220"
              alt="face6"
            />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox">
          <SiAndroid />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
        <Typography variant="h3">YOUTUBE VIDEOS</Typography>
        <div className="homeYoutubeWrapper">
          <YoutubeCard 
          image="https://tse4.mm.bing.net/th?id=OIP.gVbj_ROeM5mX7XYNT0TuigHaFB&pid=Api&P=0&h=220"
          title="sample one"
          />
          <YoutubeCard 
          image="https://tse4.mm.bing.net/th?id=OIP.gVbj_ROeM5mX7XYNT0TuigHaFB&pid=Api&P=0&h=220"
          title="sample one"
          />
          <YoutubeCard 
          image="https://tse4.mm.bing.net/th?id=OIP.gVbj_ROeM5mX7XYNT0TuigHaFB&pid=Api&P=0&h=220"
          title="sample one"
          />
          <YoutubeCard 
          image="https://tse4.mm.bing.net/th?id=OIP.gVbj_ROeM5mX7XYNT0TuigHaFB&pid=Api&P=0&h=220"
          title="sample one"
          />
          
        </div>
      </div>
      
    </div>
  );
};

export default Home;
