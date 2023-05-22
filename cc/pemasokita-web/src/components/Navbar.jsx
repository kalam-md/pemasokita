import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-lime border-b border-gray-300">
      <div className="w-[80%] mx-auto py-5 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-poppins text-black text-lg font-semibold text-[24px]">Pemaso<span className=' font-bold text-green-leaf'>Kita</span></span>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none focus:text-green-leaf"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  className="text-green-leaf"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.293 4.293L12 11.586 4.707 4.293 3.293 5.707l7 7-7 7 1.414 1.414L12 14.414l7.293 7.293 1.414-1.414-7-7 7-7z"
                />
              ) : (
                <path
                  className="text-green-leaf"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex items-center md:w-auto w-full`}
        >
          <div className="text-sm md:flex-grow font-poppins text-[18px] font-medium">
            <a
              className="text-green-leaf px-4 py-2 block md:inline-block"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-green-leaf px-4 py-2 block md:inline-block"
              href="#about"
            >
              About
            </a>
            <a
              className="text-green-leaf px-4 py-2 block md:inline-block"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
