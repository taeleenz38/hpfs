import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-24 py-6 shadow-md">
      <Link href="/">
        <Image src="/images/LOGO.svg" alt="HPSA Logo" width={75} height={75} />
      </Link>

      <div className="flex items-center gap-16 text-2xl font-medium">
        <Link href="/" className="hover:text-primary duration-200">
          Home
        </Link>
        <Link href="/" className="hover:text-primary duration-200">
          About
        </Link>
        <Link href="/" className="hover:text-primary duration-200">
          Courses
        </Link>
        <Link href="/" className="hover:text-primary duration-200">
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-2 text-xl font-medium">
        <Button className="text-xl hover:cursor-pointer duration-200">
          Sign In
        </Button>
        <Button className="text-xl hover:cursor-pointer duration-200">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
