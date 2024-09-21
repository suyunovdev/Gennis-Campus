import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import Container from "./container/Container";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header shadow-lg w-full bg-white sticky top-0 left-0 z-50">
      <Container>
        <nav className="flex justify-between items-center  py-4 md:px-10">
          {/* Logo Section */}
          <div className="left flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-auto transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Menu Section - Desktop and Mobile */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent  z-40 shadow-md md:shadow-none`}
          >
            <ul className="flex flex-col md:flex-row items-center md:gap-8 gap-4 md:text-lg text-base font-medium md:py-0 py-4 md:px-0 px-6 text-gray-800">
              {[
                { name: "Bosh sahifa", path: "/" },
                { name: "Biz haqimizda", path: "/about" },
                { name: "Kurslar", path: "/courses" },
                { name: "Natijalar", path: "/progress" },
                { name: "O'qituvchilar", path: "/teachers" },
                { name: "Yangiliklar", path: "/news" },
                { name: "Afzalliklar", path: "/advantages" },
                { name: "Kitoblar", path: "/books" },
                { name: "Consulting", path: "/consulting" },
                { name: "Bog'lanish", path: "/contact" },
              ].map((item) => (
                <li key={item.name} className="relative group cursor-pointer">
                  <Link
                    to={item.path}
                    className="hover:text-blue-600 transition-colors text-[16px]"
                  >
                    {item.name}
                  </Link>
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <button className="btn px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;
