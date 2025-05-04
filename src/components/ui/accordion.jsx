import { useState } from 'react';

const Accordion = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the section if it's already open
    } else {
      setActiveIndex(index); // Open the clicked section
    }
  };

  return (
    <div className="space-y-4">
      {children.map((child, index) => (
        <AccordionItem
          key={index}
          index={index}
          isActive={activeIndex === index}
          onToggle={handleToggle}
        >
          {child}
        </AccordionItem>
      ))}
    </div>
  );
};

const AccordionItem = ({ index, isActive, onToggle, children }) => {
  return (
    <div className="border-b border-gray-200">
      <div
        onClick={() => onToggle(index)}
        className="flex justify-between items-center cursor-pointer py-3 px-4 bg-gray-100 rounded-md hover:bg-gray-200"
      >
        <h3 className="text-lg font-semibold">{children.props.question}</h3>
        <span className={`transform transition-transform ${isActive ? 'rotate-180' : ''}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      {isActive && (
        <div className="py-2 px-4 text-sm text-gray-700">
          <p>{children.props.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
