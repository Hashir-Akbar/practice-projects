import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsEnvelope } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileHeader from "./MobileHeader";

const Header: React.FC = () => {
  return (
    <header className="font-poppins">
      <div className="bg-[#3d7703] text-white">
        <div className="flex p-8 sm:py-2.5 sm:px-4 lg:px-0 flex-col max-w-[1170px] mx-auto sm:flex-row items-center justify-between gap-3  text-sm">
          <div className="flex  flex-col gap-0 sm:gap-4 sm:flex-row items-center ">
            <div className="flex items-center justify-center gap-2">
              <FaPhone className="rotate-90" />
              <span>+977 9852020058</span>
            </div>
            <div className="flex items-center gap-2 pt-2 sm:pt-0">
              <Link
                href={"mailto:booking@sudarshanagroresort.com.np"}
                className="flex items-center gap-2"
              >
                <BsEnvelope />
                booking@sudarshanagroresort.com.np
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <Link
              href={"https://www.facebook.com/profile.php?id=61560859479882"}
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#191919] text-white relative md:block hidden">
        <div className="flex justify-between items-center p-4 max-w-[90%] mx-auto">
          <div>
            <Image src={"/logo.png"} width={80} height={80} alt="logo" />
          </div>
          <div className="flex gap-8 items-center">
            <nav className="md:block hidden">
              <ul className="flex gap-12 font-semibold">
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-[#008000] transition duration-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-[#008000] transition duration-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-[#008000] transition duration-500"
                  >
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-[#008000] transition duration-500"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-[#008000] transition duration-500"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="hover:text-[#008000] transition duration-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <RxHamburgerMenu className="md:hidden  text-3xl text-white font-bold" />

            <button className="sm:block hidden">
              {" "}
              <Link
                href={"/"}
                className="uppercase py-3 px-8 tracking-widest text-sm font-normal bg-[#008000] hover:bg-white transition-colors  duration-500 hover:text-[#008000] cursor-pointer "
              >
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
      <MobileHeader />
    </header>
  );
};

export default Header;
