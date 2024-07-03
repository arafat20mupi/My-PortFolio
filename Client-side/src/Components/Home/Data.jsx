import { useEffect, useRef } from 'react';
import { Social } from './Social';
import { FaPaperPlane } from 'react-icons/fa';
import Typed from 'typed.js';

const Data = () => {
    const el = useRef(null);

    useEffect(() => {
       
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer', 'MERN Stack Developer', 'React.js Developer', 'Junior Web Developer'],
            typeSpeed: 80,
            loop: true,
            loopCount: Infinity,
            backDelay: 700,
            backSpeed: 40,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="">
            <div className="flex flex-col-reverse md:flex-row justify-between text-center w-full  items-center h-full">
                <div className=" ">
                    <Social />
                </div>
                <div className=" md:w-full flex flex-col md:flex-row items-center justify-center">
                    <div className="text-center space-y-6 md:text-left p-4 max-w-lg">
                        <h1 className="text-3xl md:text-4xl font-bold">Arafat Islam</h1>
                        <p className="text-lg my-2"><span ref={el}></span></p>
                        <p className="text-base my-2">
                            "🚀 MERN Developer | Crafting digital magic with MongoDB, Express.js, React and Node.js. Let's build the future together! ✨"
                        </p>
                        <button
                            className="mt-4 bg-black text-white px-4 py-2 rounded flex items-center"
                            onClick={() => window.location.href = 'mailto:arafatislam6619@gmail.com'}
                        >
                            Say Hello <FaPaperPlane className="ml-2" />
                        </button>
                    </div>
                    <div className="max-w-sm mt-4 md:mt-0 md:ml-12">
                        <img
                            alt="Arafat Islam"
                            src="portfolio.jpg"
                            className="rounded-lg w-64 h-64 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
