import React from 'react';
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiBootstrapFill, RiNpmjsFill } from "react-icons/ri";
import { SiTailwindcss, SiReact, SiMui, SiReactrouter, SiExpress, SiMongodb, SiMongoose, SiPostman, SiRender } from "react-icons/si";
import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
import { BiLogoRedux } from "react-icons/bi";
import { FaNode, FaGit, FaGithub, FaChrome } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { PiTerminalFill } from "react-icons/pi";
import { IoLogoFigma, IoLogoVercel } from "react-icons/io5";

const frontend = [
  { label: 'Html', icon: <AiOutlineHtml5 /> },
  { label: 'Css', icon: <FaCss3Alt /> },
  { label: 'Javascript', icon: <IoLogoJavascript /> },
  { label: 'Bootstrap', icon: <RiBootstrapFill /> },
  { label: 'Tailwind', icon: <SiTailwindcss /> },
  { label: 'React', icon: <SiReact /> },
  { label: 'React Router', icon: <SiReactrouter /> },
];

const backend = [
  { label: 'Node.js', icon: <FaNode /> },
  { label: 'Express.js', icon: <SiExpress /> },
  { label: 'MongoDb', icon: <SiMongodb /> },
];

const tools = [
  { label: 'Terminal', icon: <PiTerminalFill /> },
  { label: 'Vs Code', icon: <TbBrandVscode /> },
  { label: 'Git', icon: <FaGit /> },
  { label: 'Github', icon: <FaGithub /> },
  { label: 'NPM', icon: <RiNpmjsFill /> },
  { label: 'Postman', icon: <SiPostman /> },
  { label: 'Chrome DevTools', icon: <FaChrome /> },
  { label: 'Figma', icon: <IoLogoFigma /> },
  { label: 'Render', icon: <SiRender /> },
  { label: 'Vercel', icon: <IoLogoVercel /> },
];

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center w-full p-5">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-semibold tracking-wide font-poppins">Skills</h2>
        <p className="text-gray-600 font-poppins">My Technical Level</p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-5 w-full">
        <div className="max-w-xs mb-5">
          <div className="bg-white shadow-md rounded-lg p-5 h-64 w-80">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <div className="grid grid-cols-2 gap-2">
              {frontend.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-xs mb-5">
          <div className="bg-white shadow-md rounded-lg p-5 h-64 w-80">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <div className="grid grid-cols-1 gap-2">
              {backend.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-xs mb-5">
          <div className="bg-white shadow-md rounded-lg p-5 h-64 w-80">
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <div className="grid grid-cols-2 gap-2">
              {tools.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
