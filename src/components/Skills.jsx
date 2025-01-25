import React from "react";
import "../assets/styles/ContentStyle.css";
import * as motion from "motion/react-client";
import { Tooltip } from "@material-tailwind/react";
import MongoDB from "../assets/mongodb.svg";
import Css from "../assets/css.svg";
import Express from "../assets/express.svg";
import Figma from "../assets/figma.svg";
import Github from "../assets/github.svg";
import Html from "../assets/html.svg";
import Js from "../assets/javascript.svg";
import Node from "../assets/node-js.svg";
import Psql from "../assets/postgresql.svg";
import ReactLogo from "../assets/react.svg";
import Redux from "../assets/redux.svg";
import Tailwind from "../assets/tailwind-css.svg";
import TS from "../assets/typescript.svg";
import AWS from "../assets/aws.svg";
import Git from "../assets/git.svg";
import Postman from "../assets/postman.svg";

const Skills = () => {
  const box = {
    width: 80,
    height: 80,
  };

  const logos = [
    { name: "MongoDB", logo: MongoDB, link: "https://www.mongodb.com/" },
    { name: "ExpressJS", logo: Express, link: "https://expressjs.com/" },
    { name: "ReactJS", logo: ReactLogo, link: "https://react.dev/" },
    { name: "NodeJS", logo: Node, link: "https://nodejs.org/en" },
    { name: "PostgreSQL", logo: Psql, link: "https://www.postgresql.org/" },
    { name: "HTML", logo: Html, link: "#" },
    { name: "CSS", logo: Css, link: "#" },
    { name: "Tailwind", logo: Tailwind, link: "https://tailwindcss.com/" },
    { name: "Redux", logo: Redux, link: "https://redux.js.org/" },
    { name: "TypeScript", logo: TS, link: "https://www.typescriptlang.org/" },
    { name: "Javascript", logo: Js, link: "https://www.javascript.com/" },
    { name: "Github", logo: Github, link: "https://github.com/" },
    { name: "Figma", logo: Figma, link: "https://www.figma.com/" },
    { name: "AWS", logo: AWS, link: "https://aws.amazon.com/" },
    { name: "Git", logo: Git, link: "#" },
    { name: "Postman", logo: Postman, link: "https://www.postman.com/" },
  ];

  return (
    <div className="mt-32">
      <h1 className="text-2xl headfont">Skills</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 space-y-6 lg:ms-20 ">
        {logos.map((item, ind) => (
          <Tooltip
            key={ind}
            content={item.name}
            className="bg-white text-black"
          >
            <a key={ind} href={item.link}>
              <motion.img
                key={ind}
                src={item.logo}
                alt={`Logo ${ind + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={box}
              />
            </a>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Skills;
