import React from 'react';
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaBalanceScale, FaBrain, FaClock, FaComments, FaCss3Alt, FaHandshake, FaLightbulb, FaMedal, FaRegSmile, FaUserTie } from "react-icons/fa";
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

const softSkills = [
  { label: 'Communication', icon: <FaComments /> },
  { label: 'Teamwork', icon: <FaHandshake /> },
  { label: 'Problem Solving', icon: <FaLightbulb /> },
  { label: 'Positive Attitude', icon: <FaRegSmile /> },
  { label: 'Leadership', icon: <FaUserTie /> },
  { label: 'Adaptability', icon: <FaMedal /> },
  { label: 'Time Management', icon: <FaClock /> },
  { label: 'Critical Thinking', icon: <FaBrain /> },
  { label: 'Conflict Resolution', icon: <FaBalanceScale /> },
];

const Skills = () => {
  return (
    <div id="skills" className="f w-full p-5">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-semibold tracking-wide font-poppins">Skills</h2>
        <p className="text-gray-600 mt-2 font-poppins">My Technical Level</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center md:justify-between items-center gap-5 w-full">
        <div className="max-w-xs mb-5">
          <div className="bg-white shadow-md rounded-lg p-5 h-64 w-96">
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
          <div className="bg-white shadow-md rounded-lg p-5 h-64 w-96">
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
          <div className="bg-white shadow-md rounded-lg p-5 h-64 w-96">
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
        <div className="max-w-xs mb-5">
          <div className="bg-white shadow-md rounded-lg p-5 h-64 w-96">
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              {softSkills.map((item, index) => (
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
