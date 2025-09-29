import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from '../assets/images/chlogo.png'

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  // Replace with your numbers (international format, no + or spaces)
  const numbers = [
    { phone: "2348102956759", label: "Emmy" },
    { phone: "2348098765432", label: "Raph" },
    { phone: "2347034236272", label: "Usman" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp size={28} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute bottom-16 right-0 w-56">
          {/* Popup Container */}
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header with Logo */}
            <div className="flex items-center gap-2 p-3 border-b">
              <img
                src={logo} // replace with your logo path
                alt="Logo"
                className="w-6 h-6 object-contain"
              />
              <span className="font-semibold text-gray-700">Chat with us</span>
            </div>

            {/* Numbers */}
            <div className="p-2">
              {numbers.map((num, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${num.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md hover:bg-gray-100 text-gray-800"
                >
                  {num.label}
                </a>
              ))}
            </div>

            {/* Chat bubble (arrow) */}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white rotate-45 shadow-md"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
