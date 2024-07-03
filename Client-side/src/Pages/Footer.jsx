
const  Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
                    <p>Email: arafatislam6619@gmail.com</p>
                    <p>Phone: +8801722172906</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                    <p><a href="https://www.linkedin.com/in/arafatislam03" className="text-gray-400 hover:text-white ">LinkedIn</a></p>
                    <p><a href="https://github.com/arafat20mupi" className="text-gray-400 hover:text-white">GitHub</a></p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <p><a href="#projects" className="text-gray-400 hover:text-white">Projects</a></p>
                    <p><a href="#about" className="text-gray-400 hover:text-white">About Me</a></p>
                    <p><a href="#resume" className="text-gray-400 hover:text-white">Resume</a></p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Navigation</h3>
                    <p><a href="/" className="text-gray-400 hover:text-white">Home</a></p>
                    <p><a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a></p>
                    <p><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></p>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p>&copy; {new Date().getFullYear()} Arafat Islam. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
