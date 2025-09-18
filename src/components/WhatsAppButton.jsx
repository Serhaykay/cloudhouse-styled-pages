import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  // Replace with your numbers (international format, no + or spaces)
  const numbers = [
    { phone: "2348102956759", label: "Emerald" },
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
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-2 w-44">
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
      )}
    </div>
  );
};

export default WhatsAppButton;
