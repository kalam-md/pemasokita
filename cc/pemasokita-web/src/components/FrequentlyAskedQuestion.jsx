import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function FrequentlyAskedQuestion() {
  const faqs = [
    {
      id: 1,
      title: 'What is Tailwind CSS?',
      content:
        'Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. It provides a set of pre-designed utility classes that you can combine to create the desired styles.',
    },
    {
      id: 2,
      title: 'How do I install Tailwind CSS?',
      content:
        'To install Tailwind CSS in your project, you need to use a package manager like npm or yarn. Run the following command to install Tailwind CSS and its dependencies: \n\nnpm install tailwindcss',
    },
    {
      id: 3,
      title: 'Can I customize Tailwind CSS styles?',
      content:
        'Yes, Tailwind CSS provides a configuration file where you can customize various aspects of the framework. You can generate a default configuration file using the following command: \n\nnpx tailwindcss init',
    },
    {
      id: 4,
      title: 'Can I customize Tailwind CSS styles?',
      content:
        'Yes, Tailwind CSS provides a configuration file where you can customize various aspects of the framework. You can generate a default configuration file using the following command: \n\nnpx tailwindcss init',
    },
  ];

  const Accordion = ({ id, title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen );
    };

    return (
      <div className="rounded-md transition-all duration-200 border-solid border-2 border-gray-200 cursor-pointer hover:bg-gray-50">
        <button
          className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          onClick={toggleAccordion}
        >
          <span className="flex text-lg font-semibold text-black">{title}</span>
          <KeyboardArrowDownIcon className={`text-gray-400`} />
        </button>
        {isOpen && (
          <div className="px-4 pb-5 sm:px-6 sm:pb-6">
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className={`w-[80%] mx-auto flex-col sm:py-16 py-6`}>
      <div className="mx-auto">
        <h1 className="font-poppins font-bold xs:text-[48px] text-[40px] text-gray-800 xs:leading-[76.8px] leading-[66.8px] w-full text-center">Frequently Asked Questions </h1>
      </div>
      <div className="grid gap-4">
        <div className="mx-auto mt-8 grid gap-4 w-full">
          {faqs.map((faq) => (
            <Accordion key={faq.id} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
