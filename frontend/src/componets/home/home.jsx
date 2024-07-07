import React, { useEffect } from "react";
import "./home.css";
import * as THREE from "three";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../Timeline/Timeline";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, skills }) => {
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

    let canvas = null; // Declare canvas variable

    // Wait until component is mounted to find canvas element
    const findCanvas = () => {
      canvas = document.querySelector(".homeCanvas");
      if (canvas) {
        const renderer = new THREE.WebGLRenderer({ canvas });

        const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
        const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);

        const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(venusGeometry, venusMaterial);
        venus.position.set(8, 5, 5);

        const pointLight = new THREE.PointLight(0xffffff, 1);
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

        return () => {
          window.removeEventListener("mousemove", findCanvas); // Remove event listener when component unmounts
        };
      }
    };

    findCanvas();

    // Event listener for scroll effect
    window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillsBox");

      if (skillsBox) {
        if (window.scrollY > 1500) {
          skillsBox.style.animationName = "homeskillsBoxAnimationOn";
        } else {
          skillsBox.style.animationName = "homeskillsBoxAnimationOff";
        }
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {}); // Clean up scroll event listener
    };
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p></p>
          <p></p>
          <p>R</p>
          <p>O</p>
          <p>H</p>
          <p>I</p>
          <p>T</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">ENGINEER</Typography>
          <Typography variant="h2">LEARNER</Typography>
        </div>

        <Link to="/projects" className="linkInhomeCanvasContainer">
          VIEW WORK
        </Link>
        <a
          href="https://drive.google.com/file/d/1WXA1Q0iIF6M4perRIRV0m-CdQRSvcyfb/view?usp=sharing"
          className="linkInhomeCanvasContainer2"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>

 <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[
                { date: "12/5/18", title: "DRHS", description: "School" },
                { date: "8/11/22", title: "IIIT Nagpur", description: "College" },
            ]} />
      </div>
      {/* <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={timelines} />
      </div> */}

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img
              src="https://hopetutors.com/wp-content/uploads/2017/03/nodejs-logo-1.png"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img
              src="https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI"
              alt="Face2"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img
              src="https://global.discourse-cdn.com/auth0/original/3X/0/d/0d4ce340c752172f4e50c8c8194154ba0645bf3e.png"
              alt="Face3"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s"
              alt="Face4"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
              alt="Face5"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20230803130837/CSS.webp"
              alt="Face6"
            />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
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
    </div>
  );
};

export default Home;
