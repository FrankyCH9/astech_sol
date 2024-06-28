// MessengerButton.js
'use client'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';

const MessengerButton = () => {
  const userId = '100093145065962'; 
  const goToMessenger = () => {
    window.open(`https://m.me/${userId}`, '_blank');
  };

  return (
    <div className="fixed top-1/2 transform -translate-y-1/2 right-4 mt-20">
      <div
        onClick={goToMessenger}
        className="bg-blue-500 w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-blue-600"
      >
        <FontAwesomeIcon 
          icon={faFacebookMessenger} 
          className="text-white text-2xl" 
        />
      </div>
    </div>
  );
};

export default MessengerButton;
