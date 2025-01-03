"use client"
import Link from "next/link";
import { useState } from "react";
import { CgShapeHexagon } from "react-icons/cg";
import { PiUserRectangleLight } from "react-icons/pi";
import { RxEnvelopeOpen } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi"; // Hamburger Icon
import { AiOutlineClose } from "react-icons/ai"; // Close Icon
import Image from "next/image";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("doctor");
    window.location.href = "/signup"; // Redirect to login page
  };

  return (
    <>
      {/* Hamburger Menu Button for Small Screens */}
      <div className="w-full shadow-lg lg:hidden bg-white h-16 px-10 fixed top-0 z-50  flex justify-end items-center " >
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-3xl"
        >
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Sidebar */}
      <section
        className={`${isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 w-full md:w-[250px] h-[100vh]  fixed  top-0 left-0 bg-white shadow-xl p-10 flex flex-col gap-10 transition-transform duration-300 ease-in-out`}
      >
        <div className="py-5 pt-10 " >
          <Image src={'/DarkLogo.png'} alt="" width={200} height={200} />
        </div>
        <ul className="flex flex-col gap-5 text-gray-500">
          <li className="w-full p-3 rounded-xl hover:text-white hover:bg-blue-600 cursor-pointer">
            <Link href={'/dashboard'} className="flex gap-3 items-center">
              <CgShapeHexagon />
              Dashboard
            </Link>
          </li>
          <li className="w-full p-3 rounded-xl hover:text-white hover:bg-blue-600 cursor-pointer">
            <Link href={'/activity'} className="flex gap-3 items-center">
              <PiUserRectangleLight className="text-2xl" />
              Activity
            </Link>
          </li>
          <li className="w-full p-3 rounded-xl hover:text-white hover:bg-blue-600 cursor-pointer">
            <Link href={'/messaging'} className="flex gap-3 items-center">
              <RxEnvelopeOpen />
              Messages
            </Link>
          </li>
          <li className="w-full p-3 rounded-xl hover:text-white hover:bg-blue-600 cursor-pointer">
            <Link href={'/profile'} className="flex gap-3 items-center">
              <PiUserRectangleLight className="text-2xl" />
              Profile
            </Link>
          </li>
          <li className="w-full mt-7 text-red-600 p-3 rounded-xl hover:text-white hover:bg-red-700 cursor-pointer">
            <button
              onClick={handleLogout}
              className="flex gap-3 items-center text-blue-600 hover:text-blue-800"
            >
              <CiLogout />
              Logout
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}
