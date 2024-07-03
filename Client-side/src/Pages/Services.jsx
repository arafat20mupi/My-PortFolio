
const services = [
  { des:'Transform your ideas into fully functional and visually stunning web applications with my expertise in the MERN stack. From concept to deployment, I handle every aspect of development, ensuring a seamless user experience.',label: 'Full-Stack Web Development'},
  { des:'Create engaging and responsive user interfaces with the power of React.js. I specialize in building interactive and dynamic frontends that provide a modern and intuitive user experience.',label: 'React.js Frontend Development'},
  { des:'Leverage the speed and scalability of Node.js for your backend needs. I design and implement server-side logic that powers your applications, ensuring high performance and seamless integration with frontend technologies.',label: 'Node.js Backend Development'},
  { des:'Build APIs that suit your specific project requirements. Whether you prefer the simplicity of RESTful APIs , I have the expertise to design and implement solutions that meet your needs.',label: ' RESTful'},
  { des:'Optimize data storage and retrieval with MongoDB. I design scalable and efficient database architectures, ensuring your application handles data seamlessly while maintaining flexibility for future growth.',label: 'MongoDB Database Design'},
  { des:'Streamline your development workflow with robust deployment. I set up continuous integration and deployment pipelines, manage server configurations, and ensure your application is ready for production.',label: 'Deployment'}
];

const Services = () => {
  return (
    <div id="services" className="flex-grow mt-4">
      <div className="text-center mb-7">
        <h4 className="text-4xl font-semibold tracking-wide font-poppins">Services</h4>
        <p className="text-gray-600 font-poppins">What I offer</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-screen-lg flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="max-w-md">
              <div className="bg-white shadow-md rounded-lg p-6 h-72">
                <h6 className="text-xl font-semibold mb-4">{service.label}</h6>
                <p className="text-gray-600">{service.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
