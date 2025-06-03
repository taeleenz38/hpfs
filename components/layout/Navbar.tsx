import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-100 bg-background w-full flex justify-between items-center px-24 py-4 shadow-md">
      <Link href="/" className="w-1/4">
        <Image src="/images/LOGO.svg" alt="HPSA Logo" width={60} height={60} />
      </Link>
      <div className="flex gap-16 text-2xl font-medium">
        <Link href="/" className="hover:text-primary duration-200">
          Home
        </Link>
        <Link href="/courses" className="hover:text-primary duration-200">
          Courses
        </Link>
        <Link href="/about" className="hover:text-primary duration-200">
          About
        </Link>
        <Link href="/contact" className="hover:text-primary duration-200">
          Contact
        </Link>
      </div>
      <div className="flex justify-end gap-2 text-xl font-medium w-1/4">
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
