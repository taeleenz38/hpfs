import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-10 py-4 shadow-md">
      <div className="flex items-center gap-12 text-xl font-medium">
        <Link href="/">
          <Image src="/" alt="HPSA Logo" width={50} height={50} />
        </Link>
        <Link href="/" className="hover:text-primary duration-200 ">Home</Link>
        <Link href="/" className="hover:text-primary duration-200 ">About</Link>
        <Link href="/" className="hover:text-primary duration-200 ">Courses</Link>
        <Link href="/" className="hover:text-primary duration-200 ">Contact</Link>
      </div>

      <div className="flex items-center gap-2 text-xl font-medium">
        <Button className="text-xl hover:cursor-pointer duration-200">Sign In</Button>
        <Button className="text-xl hover:cursor-pointer duration-200">Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
