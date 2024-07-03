import { FaCheckCircle, FaBusinessTime, FaHeadset, FaFileDownload } from 'react-icons/fa';
import Qualification from './Qualification';

const About = () => {
  return (
    <div id="about" className="flex flex-col items-center p-6">
      {/* About section */}
      <div className="text-center mb-6">
        <h4 className="text-4xl font-semibold tracking-wider">About Me</h4>
        <p className="text-gray-600 tracking-wide">My Introduction</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 p-5">
        <div className="w-80 pb-12">
          <img
            alt="Arafat Islam"
            src="portfolio.jpg"
            className="rounded-lg"
          />
        </div>
        <div className="max-w-3xl">
          <div className="flex justify-around gap-4">
            <div className="w-28 text-center p-4 border rounded-lg">
              <FaCheckCircle className="text-3xl mx-auto" />
              <h6 className="text-lg font-semibold mt-2">Experience</h6>
              <p className="text-gray-600">1+ Years</p>
            </div>
            <div className="w-28 text-center p-4 border rounded-lg">
              <FaBusinessTime className="text-3xl mx-auto" />
              <h6 className="text-lg font-semibold mt-2">Completed</h6>
              <p className="text-gray-600">10+ Projects</p>
            </div>
            <div className="w-28 text-center p-4 border rounded-lg">
              <FaHeadset className="text-3xl mx-auto" />
              <h6 className="text-lg font-semibold mt-2">Support</h6>
              <p className="text-gray-600">Online 24/7</p>
            </div>
          </div>
          <div className="mt-6 text-lg tracking-wide leading-relaxed">
            <p>
              🚀Welcome to the digital realm where creativity meets functionality! I am{' '}
              <span className="font-bold text-black">Arafat Islam</span>, a passionate MERN developer on a mission to craft immersive and seamless web experiences. With a palette of MongoDB, Express.js, React, and Node.js, I breathe life into ideas, turning concepts into captivating digital realities. Join me on a journey where innovation converges with technology, and every line of code tells a unique story. Let's build the future, one pixel at a time! ✨
            </p>
            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded flex items-center hover:bg-gray-700"
              onClick={() => window.location.href = 'mailto:moin.coder@gmail.com'}
            >
              Download Resume <FaFileDownload className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      {/* Qualification section */}
      <Qualification />
    </div>
  );
}

export default About;
