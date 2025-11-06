"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";
import { cn } from "@/lib/utils";

const MobileHeader = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  return (
    <>
      <div
        className={cn(
          isSticky
            ? "fixed w-full bg-[#787878] top-0"
            : "bg-[#191919] text-white relative md:hidden"
        )}
      >
        <div className="flex justify-between items-center p-4 max-w-[90%] mx-auto">
          <div>
            <Image src={"/logo.png"} width={80} height={80} alt="logo" />
          </div>
          <div className="flex gap-8 items-center">
            <RxHamburgerMenu
              className="md:hidden  text-3xl text-white font-bold cursor-pointer"
              onClick={() => setIsHamburgerOpen((e) => !e)}
            />
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

        <div className={"md:hidden  max-w-[90%] mx-auto bottom-0"}>
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: 0 }}
            animate={{ height: isHamburgerOpen ? "auto" : 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div>
              <ul className="border border-slate-500 mb-6">
                <li>
                  <Link
                    href="/"
                    className="py-4 px-6 bg-[#2d2d2d] block border-b border-stone-700 hover:bg-[#C09A76] hover:text-white transition duration-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="py-4  px-6 bg-[#2d2d2d] block border-b border-stone-700 hover:bg-[#C09A76] hover:text-white transition duration-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="py-4  px-6 bg-[#2d2d2d] block border-b border-stone-700 hover:bg-[#C09A76] hover:text-white transition duration-500"
                  >
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="py-4  px-6 bg-[#2d2d2d] block border-b border-stone-700 hover:bg-[#C09A76] hover:text-white transition duration-500"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="py-4  px-6 bg-[#2d2d2d] block border-b border-stone-700 hover:bg-[#C09A76] hover:text-white transition duration-500"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="py-4  px-6 bg-[#2d2d2d] block border-b border-stone-700 hover:bg-[#C09A76] hover:text-white transition duration-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
