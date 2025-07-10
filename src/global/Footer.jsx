import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 py-8 flex space-x-26">
        <div>
          <p className="text-white px-40 text-xl my-3">
            Copyright © 2025 Puneri Paltan
          </p>
        </div>

        <div>
          <ul className="flex justify-center space-x-10">
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
            className="px-40 w-100 my-3"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
