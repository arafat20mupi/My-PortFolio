import { useRef, useState } from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const formRef = useRef();
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [alert, setAlert] = useState({ message: '', severity: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS template ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS service ID
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS user ID
    ).then((result) => {
      console.log(result.text);
      setAlert({ message: 'SUCCESS! Your message has been sent.', severity: 'success' });
    }, (error) => {
      console.log(error.text);
      setAlert({ message: 'ERROR! Something went wrong.', severity: 'error' });
    });

    // Clear form fields
    setClientName('');
    setClientEmail('');
    setProjectDetails('');
  };

  return (
    <div className="flex flex-col items-center py-10 space-y-6 justify-center w-full max-w-md">
      <h1 className="text-3xl font-medium mb-5">Write me your project</h1>
      <form ref={formRef} onSubmit={sendEmail} className="w-full">
        <label htmlFor="clientName" className="sr-only">Name</label>
        <input
          id="clientName"
          type="text"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
        <label htmlFor="clientEmail" className="sr-only">Email</label>
        <input
          id="clientEmail"
          type="email"
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Email"
          value={clientEmail}
          onChange={(e) => setClientEmail(e.target.value)}
          required
        />
        <label htmlFor="projectDetails" className="sr-only">Project Details</label>
        <textarea
          id="projectDetails"
          className="w-full px-4 py-2 mb-4 border rounded-md resize-none focus:outline-none focus:border-blue-500"
          rows="4"
          placeholder="Project Details"
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn border bg-black text-white text-lg  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
        >
          Send me <CiLocationArrow1 className="inline-block text-white ml-2" />
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
