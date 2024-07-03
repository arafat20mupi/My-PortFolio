import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';

const info = [
  { icon: <MdOutlineMail />, name: 'Email', contact: 'arafatislam6619@gmail.com' },
  { icon: <FaWhatsapp />, name: 'WhatsApp', contact: '+8801722172906' },
  { icon: <SiTelegram />, name: 'Telegram', contact: '@Arafat_dev' }
];

const openContact = (contactMethod) => {
  switch (contactMethod) {
    case 'WhatsApp':
      window.open('https://wa.me/+8801722172906', '_blank');
      break;
    case 'Telegram':
      window.open('https://t.me/Arafat_dev', '_blank');
      break;
    default:
      window.location.href = `mailto:${info.find(item => item.name === contactMethod)?.contact}`;
  }
};

const QuickContact = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl font-medium mb-5">Talk to me</h1>
      <div className="flex flex-col gap-5">
        {info.map((data, index) => (
          <div key={index} className="bg-white min-w-80 md:min-w-[500px] shadow-md rounded-md p-4 text-center flex flex-col items-center">
            <div className="text-4xl">{data.icon}</div>
            <h6 className="text-lg font-medium mt-2">{data.name}</h6>
            <p className="text-gray-600">{data.contact}</p>
            <button
              className="bg-transparent hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
              onClick={() => openContact(data.name)}
              aria-label={`Open ${data.name}`}
            >
              Write me <FaLongArrowAltRight className="inline-block ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickContact;
