import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div>
            <h1 className="text-xl font-bold text-white">Fardin's Portfolio</h1>
            <p className="mt-2 text-gray-400">
              Building modern and user-friendly web experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-gray-300 cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-gray-300 cursor-pointer"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-gray-300 cursor-pointer"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-gray-300 cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold text-white">Get in Touch</h2>
            <a
              href="mailto:fardin3202a@gmail.com"
              className="text-gray-400 hover:underline"
            >
              Email: fardin3202a@gmail.com
            </a>
            <br />
            <a
              href="tel:+8801783444448"
              className="text-gray-400 hover:underline"
            >
              Phone: +880 178344 4448
            </a>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com" // Replace with actual Twitter link
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0017.45 2a4.48 4.48 0 00-4.49 4.47c0 .35.04.69.11 1A12.94 12.94 0 013 4.47a4.48 4.48 0 00-.61 2.25c0 1.56.8 2.94 2.02 3.74a4.47 4.47 0 01-2.03-.56v.06a4.48 4.48 0 003.59 4.39 4.5 4.5 0 01-2.03.08 4.48 4.48 0 004.18 3.11A9 9 0 012 20.05a12.92 12.92 0 007 2c8.29 0 12.84-6.86 12.84-12.83 0-.2 0-.39-.01-.58A9.2 9.2 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://github.com" // Replace with actual GitHub link
                className="text-gray-400 hover:text-white"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577v-2.254c-3.338.727-4.042-1.416-4.042-1.416-.546-1.386-1.333-1.754-1.333-1.754-1.089-.744.084-.729.084-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.305.764-1.604-2.665-.306-5.466-1.334-5.466-5.931 0-1.31.469-2.382 1.236-3.221-.124-.304-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.512 11.512 0 013.006-.404c1.02.004 2.047.138 3.006.404 2.291-1.553 3.3-1.23 3.3-1.23.653 1.649.242 2.872.118 3.176.768.839 1.236 1.911 1.236 3.221 0 4.609-2.804 5.625-5.475 5.922.43.372.823 1.105.823 2.226v3.293c0 .319.218.694.825.576 4.765-1.585 8.202-6.082 8.202-11.385 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Fardin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
