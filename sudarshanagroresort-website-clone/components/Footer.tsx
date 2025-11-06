import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { IoCall } from "react-icons/io5";

interface footer {
  title: string;
  paragraph: string;
  links: [
    {
      facebook: string;
    },
    {
      linkedin: string;
    },

    {
      instagram: string;
    }
  ];
  quickLinks: [
    {
      name: string;
      link: string;
    }
  ];
  location: string;
  phoneNumber: string;
  email: string;
}

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#008000] py-12 text-white ">
          <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row  gap-16 px-[21px] justify-between">
            <div className="flex flex-col gap-4 w-full md:w-[40%]">
              <h2 className="text-2xl font-semibold">Sudarshan Agro Resort</h2>
              <p className="text-base">
                Enjoy your recreational time with <br /> Sudarshan Park and
                Resort in a Nepali Style. We offer you the best hospitality for
                your golden memories.
              </p>
              <div className="flex gap-6 text-xl">
                <Link href="/">
                  <FaFacebookSquare />
                </Link>
                <Link href="/">
                  <FaLinkedin />{" "}
                </Link>
                <Link href="/">
                  <FaSquareInstagram />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-[20%]">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <div className="flex flex-col gap-0 justify-between mt-6">
                <div className="flex items-center gap-1">
                  <span className="h-px w-2 bg-white"></span>
                  <Link href={"/"}>Gallery</Link>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-px w-2 bg-white"></span>
                  <Link href={"/"}>Contact</Link>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-px w-2 bg-white"></span>
                  <Link href={"/"}>Services</Link>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-px w-2 bg-white"></span>
                  <Link href={"/"}>Rooms</Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[40%]">
              <h3 className="text-xl font-semibold">Get in Touch</h3>
              <div className="flex mt-6 flex-col gap-4">
                <div className="flex  items-center gap-3">
                  <FaLocationDot />
                  Lalbhitti, Belbari-2, Morang, Nepal
                </div>
                <div className="flex  items-center gap-3">
                  <IoCall /> +977-9852020058
                </div>
                <div className="flex  items-center gap-3">
                  <AiOutlineMail /> booking@sudarshanagroresort.com.np
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#141414] text-white">
          <div className="max-w-[1170px] px-[21px]  mx-auto md:flex-row flex-col gap-4 items-center md:items-baseline text-center flex justify-between py-4 ">
            <p>Copyright © 2025 Sudarshan Agro Resort. All rights reserved.</p>
            <p>
              Technology Partner :{" "}
              <Link
                href={"/"}
                className="cursor-pointer text-[#337ab7] hover:text-[#23527c]"
              >
                PRACAS
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
