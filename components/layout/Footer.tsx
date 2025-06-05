import React from "react";
import Link from "next/link";
import { SiX, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white p-8 flex justify-between items-center">
      <p>
        &copy; {new Date().getFullYear()} Exceptional Client Engagement & Leadership. All
        rights reserved.
      </p>
      <div className="flex gap-4">
        <Link href="https://twitter.com" target="_blank">
          <SiX
            className="text-white hover:text-gray-400 transition duration-200"
            size={24}
          />
        </Link>
        <Link href="https://linkedin.com" target="_blank">
          <SiLinkedin
            className="text-white hover:text-gray-400 transition duration-200"
            size={24}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
