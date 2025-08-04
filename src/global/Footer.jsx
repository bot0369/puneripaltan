import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 py-6 md:flex md:gap-15">
        <div>
          <p className="text-white text-center md:px-18 text-lg my-3">
            Copyright © 2025 Puneri Paltan
          </p>
        </div>

        <div>
          <ul className="flex justify-center space-x-4 md:space-x-10">
            <div className="group p-4 rounded-full bg-neutral-50 hover:bg-orange-400 ">
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 text-xl group-hover:text-white"
                >
                  <FaFacebookF />
                </a>
              </li>
            </div>
            <div className="group p-4 rounded-full bg-neutral-50 hover:bg-orange-400 hover:text-white">
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 text-xl group-hover:text-white"
                >
                  <FaTwitter />
                </a>
              </li>
            </div>
            <div className="group p-4 rounded-full bg-neutral-50 hover:bg-orange-400 hover:text-white">
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 text-xl group-hover:text-white"
                >
                  <FaInstagram />
                </a>
              </li>
            </div>
            <div className="group p-4 rounded-full bg-neutral-50 hover:bg-orange-400 hover:text-white">
              <li>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 text-xl group-hover:text-white"
                >
                  <FaYoutube />
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div>
          <img
            src="src/assets/images/dl_logo.png"
            alt=""
            className="mx-auto mt-5 md:mt-3 w-20 md:px-40 md:w-100"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
