import { FiPhone, } from 'react-icons/fi'; 
import ContactForm from '../Components/Contact/ContactForm';
import QuickContact from '../Components/Contact/QuickContact';

const Contact = () => {
  return (
    <div id="contact" className="text-center md:mt-12 mt-6 font-poppins">
      <h4 className="text-3xl font-medium mb-2">Contact Me</h4>
      <p className="text-sm text-gray-600">Get in touch</p>

      <div className="flex justify-center items-start gap-10 flex-wrap p-5 pb-10">
        <QuickContact icon={<FiPhone />} title="Quick Contact" />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
