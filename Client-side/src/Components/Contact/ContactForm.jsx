import { useRef, useState } from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';

const ContactForm = () => {
  const formRef = useRef();
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [alert, setAlert] = useState({ message: '', severity: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    // Simulate form submission
    console.log('Form submitted with:', {
      clientName,
      clientEmail,
      projectDetails
    });

    // Clear form fields
    setClientName('');
    setClientEmail('');
    setProjectDetails('');

    // Show success message
    setAlert({ message: 'SUCCESS! Your message has been sent.', severity: 'success' });
  };

  return (
    <div className="flex flex-col items-center py-10 space-y-6 justify-center w-full max-w-md">
      <h1 className="text-3xl font-medium mb-5">Write me your project</h1>
      <form ref={formRef} onSubmit={sendEmail} className="w-full">
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
        <input
          type="email"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
          required
        />
        <textarea
          className="w-full px-4 py-2 mb-4 border rounded-md resize-none focus:outline-none focus:border-blue-500"
          rows="4"
          placeholder="Project Details"
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Send me <CiLocationArrow1 className="inline-block ml-2" />
        </button>
      </form>
      {alert.message && (
        <div className={`mt-4 px-4 py-2 bg-${alert.severity === 'success' ? 'green' : 'red'}-200 text-${alert.severity === 'success' ? 'green' : 'red'}-800 rounded-md`}>
          {alert.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
