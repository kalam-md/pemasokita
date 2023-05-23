import { useState } from 'react';
import { navLinks } from '../constants';

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-lime border-b border-gray-300">
      <div className="w-[80%] mx-auto py-5 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-poppins text-gray-800 text-lg font-semibold text-[27px]">Pemaso<span className=' font-bold text-green-leaf'>Kita</span></span>
        </div>

        {/* web */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-10">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.title ? "text-green-leaf" : "text-[#3F3F3F]"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-16"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>


        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            className="text-gray-900 focus:outline-none focus:text-green-leaf"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {toggle ? (
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

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-lime absolute top-16 mt-2 w-full right-0 sidebar`}
          >
            <ul className="list-none flex justify-end items-center flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-green-leaf" : "text-[#3F3F3F]"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* <div className="md:hidden">
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
        </div> */}

    </nav>
  )
}
