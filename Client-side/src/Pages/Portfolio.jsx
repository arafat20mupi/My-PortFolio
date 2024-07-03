import  { useState } from 'react';
import { TbWorldWww } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { FaMarkdown } from "react-icons/fa";

const projects = [
  { id: 1, title: 'Assetflow', img: 'screencapture-assetflow-2ac74-web-app-2024-07-03-17_01_26.png', categories: ['ReactJs', 'Full-Stack'], livelink: "https://assetflow-2ac74.web.app/", details: "https://github.com/arafat20mupi/AssetFlow/blob/main/README.md", frontendGithubLink: "https://github.com/arafat20mupi/AssetFlow/tree/main/Client_side", backendGithubLink: "https://github.com/arafat20mupi/AssetFlow/tree/main/Server_side" },
  { id: 2, title: 'Othaba.com', img: 'screencapture-assienment-11-web-app-2024-07-03-16_50_10.png', categories: ['ReactJs', 'Full-Stack'], livelink: "https://fullstack-nextjs-blood-bank.vercel.app/", details: "https://github.com/arafat20mupi/Othaba.com-client/blob/main/README.md", frontendGithubLink: "https://github.com/arafat20mupi/Othaba.com-client.git", backendGithubLink: "https://github.com/arafat20mupi/Othaba.com-client.git" },
  { id: 3, title: 'Turio', img: 'screencapture-tourism-web-cd8da-web-app-2024-07-03-17_09_26.png', categories: ['ReactJs', 'Full-Stack'], livelink: "https://tourism-web-cd8da.web.app/", details: "https://github.com/arafat20mupi/Tourism-client/blob/main/README.md", frontendGithubLink: "https://github.com/arafat20mupi/Tourism-client.git", backendGithubLink: "https://github.com/arafat20mupi/Tourism-server.git" },
  { id: 4, title: 'ReTro', img: 'screencapture-arafat20mupi-github-io-reTro-Assinment-2024-07-03-17_36_50.png', categories: ['JavaScript'], livelink: "https://arafat20mupi.github.io/reTro-Assinment/", details: "https://github.com/arafat20mupi/reTro-Assinment/blob/main/README.md", frontendGithubLink: "https://github.com/arafat20mupi/reTro-Assinment.git", backendGithubLink: "" },
  { id: 5, title: 'Home-Press', img: 'screencapture-assainment-9-6788e-web-app-2024-07-03-17_14_16.png', categories: ['ReactJs'], livelink: "https://assainment-9-6788e.web.app/", details: "https://github.com/arafat20mupi/Home-Press/blob/main/README.md", frontendGithubLink: "https://github.com/arafat20mupi/Home-Press.git", backendGithubLink: "" },
];

const icons = [
  { id: 1, icon: <TbWorldWww />, color: '#7dc5f5', label: "Live", key: "livelink" },
  { id: 2, icon: <FaMarkdown />, color: '#767674', label: "Details", key: "details" },
  { id: 3, icon: <IoLogoGithub />, color: 'black', label: "Frontend", key: "frontendGithubLink" },
  { id: 4, icon: <IoLogoGithub />, color: 'black', label: "Backend", key: "backendGithubLink" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(selectedCategory));

  const allCategories = [...new Set(projects.flatMap((project) => project.categories))];

  return (
    <div id="portfolio" className="flex-grow mt-10">
      <div className="text-center mb-7">
        <h4 className="text-4xl font-semibold tracking-wide font-poppins">Portfolio</h4>
        <p className="text-gray-600 font-poppins">My recent work</p>
      </div>
      <div className="flex  justify-center mb-7">
        <div className="flex border rounded-lg">
          <button
            className={`px-4 py-2 text-xs border  ${selectedCategory === 'All' ? 'text-white bg-black' : 'text-black  bg-white'} hover:bg-gray-300`}
            onClick={() => handleFilter('All')}
          >
            All
          </button>
          {allCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-xs  border ${selectedCategory === category ? 'text-white bg-black' : 'text-black  bg-white'} hover:bg-gray-300`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 px-3">
        {filteredProjects.map((project) => (
          <div key={project.id} className="border p-4 rounded shadow-lg">
            <div className="text-center mb-2">
              <h6 className="font-semibold text-2xl">{project.title}</h6>
            </div>
            <div className="flex justify-center mb-2">
              <img
                alt={project.title}
                src={`${project.img}`}
                className="w-full h-64 object-cover rounded"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {icons.map((iconSymbol) => (
                project[iconSymbol.key] && (
                  <div key={iconSymbol.id} className="flex justify-center">
                    <a href={project[iconSymbol.key]} target='_blank' rel='noopener noreferrer' className="flex items-center gap-1 px-4 text-lg" style={{ color: iconSymbol.color }}>
                      {iconSymbol.icon} <span className=" ">{iconSymbol.label}</span>
                    </a>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
