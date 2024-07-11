import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const Social = () => {
    const openGitHubProfile = () => {
        window.open('https://github.com/arafat20mupi', '_blank');
    };

    const openLinkedInProfile = () => {
        window.open('https://www.linkedin.com/in/arafatislam03', '_blank');
    };

    const openWhatsAppProfile = () => {
        window.open('https://wa.me/+8801722172906', '_blank');
    };

    return (
        <div className="flex md:flex-col items-center  md:space-y-8 justify-center h-20 md:h-screen md:pb-6 pl-4 md:space-x-0  md:ml-10 space-x-5 md:pl-6">
            <button onClick={openGitHubProfile} className="bg-black p-2 rounded-full mb-2">
                <FaGithub className="text-white text-xl" />
            </button>
            <button onClick={openLinkedInProfile} className="bg-blue-700 p-2 rounded-full mb-2">
                <FaLinkedin className="text-white text-xl" />
            </button>
            <button onClick={openWhatsAppProfile} className="bg-green-700 p-2 rounded-full">
                <FaWhatsapp className="text-white text-xl" />
            </button>
        </div>
    );
};

export default Social;
