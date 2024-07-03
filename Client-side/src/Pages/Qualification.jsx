import { useState } from 'react';

const education = [
    {
        label: 'Diploma In Engineering',
        description: 'Munshiganj Polytechnic Institute',
    },
    {
        label: 'Department:',
        description: 'Computer Science and Technology',
    },
    {
        label: 'Programming Language:',
        description: 'Good understanding of JavaScript and React JS',
    },
    {
        label: 'Undergraduate Student:',
        description: '8th semester is running',
    },
    {
        label: 'Graduation might complete:',
        description: 'End of 2024',
    }
];

const experience = [
    {
        label: 'Frontend Development:',
        description: 'Strong knowledge of React.js',
    },
    {
        label: 'Backend Development:',
        description: 'Good understanding of Node.js, Express.js & MongoDB',
    },
    {
        label: 'Web Services:',
        description: 'RESTful API development and integration',
    },
    {
        label: 'Problem Solving:',
        description: 'Ability to troubleshoot and solve complex technical issues efficiently.',
    },
    {
        label: 'Multitasking:',
        description: 'Have ability to manage multiple projects simultaneously.',
    },
    {
        label: 'Creative UI Design',
        description: 'Ability to design visually appealing and innovative user interfaces',
    },
];

const Qualification = () => {
    const [activeSection, setActiveSection] = useState('education');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <div id="qualification" className="text-center mt-7 mb-7">
                <h4 className="text-4xl font-semibold tracking-wide">Qualification</h4>
                <p className="text-gray-600 tracking-wide">My Personal Journey</p>
            </div>
            
            <div className="text-center mt-3">
                <button
                    className={`mx-1 px-4 py-2 rounded-md font-semibold text-sm border-2 ${activeSection === "education" ? 'bg-black text-white' : 'bg-white text-black'} border-black hover:bg-gray-300`}
                    onClick={() => handleSectionChange('education')}
                >
                    Education
                </button>
                <span className="mx-2 text-lg font-semibold">&</span>
                <button
                    className={`mx-1 px-4 py-2 rounded-md font-semibold text-sm border-2 ${activeSection === "experience" ? 'bg-black text-white' : 'bg-white text-black'} border-black hover:bg-gray-300`}
                    onClick={() => handleSectionChange('experience')}
                >
                    Experience
                </button>
            </div>
            <div className="w-full flex flex-wrap justify-center mt-5">
                <div className="max-w-3xl pb-15 mt-5 flex flex-wrap gap-7 justify-center">
                    {activeSection === 'education' && (
                        <div className="w-[400px]">
                            {education.map((step, index) => (
                                <div key={index} className="mb-4 p-4 border-b-2">
                                    <h6 className="text-lg font-bold">{step.label}</h6>
                                    <p className="italic">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeSection === 'experience' && (
                        <div className="w-[400px]">
                            {experience.map((step, index) => (
                                <div key={index} className="mb-4 p-4 border-b-2">
                                    <h6 className="text-lg font-bold">{step.label}</h6>
                                    <p className="italic">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Qualification;