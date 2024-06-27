// WhatsAppButton.js
'use client'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const phoneNumber = '944140507';
  const goWasap = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 right-0 mb-20 mr-4">
      <div
        onClick={goWasap}
        className="bg-green-500 w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-green-600"
      >
        <FontAwesomeIcon 
          icon={faWhatsapp} 
          className="text-white text-2xl" 
        />
      </div>
    </div>
  );
};

export default WhatsAppButton;
