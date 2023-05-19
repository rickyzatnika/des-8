import { useState } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  return (
    <>
      <div
        className="w-full min-h-screen flex flex-col relative items-center justify-center"
        id="header"
      >
        <div className="w-full min-h-screen absolute top-0  ">
          <Image
            src="/img/gallery-12.png"
            alt=""
            width={350}
            height={800}
            style={{ width: "auto", height: "auto" }}
            layout="responsive"
            objectFit="cover"
            objectPosition="top"
            blurDataURL="/img/gallery-12.png"
            placeholder="blur"
            priority
          />
        </div>
        <div className="w-full h-screen bg-gradient-to-tr from-black via-black/60 to-transparent absolute top-0 z-10"></div>
        <div className="w-full h-full relative z-20 flex flex-col items-center space-y-8 justify-between">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-zinc-300/80 font-[Hattori] text-sm sm:text-xl"
          >
            The Wedding Of
          </motion.h1>
          <div className="text-center leading-relaxed py-4">
            <motion.h3
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-5xl  px-2 font-extrabold bg-gradient-to-t from-[#516C56] via-emerald-500 font-[parisienne] to-emerald-900 bg-clip-text text-transparent py-2 "
            >
              Yanwar
            </motion.h3>
            <span className="font-[parisienne] text-3xl text-zinc-200">&</span>
            <motion.h4
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-5xl  px-2 font-extrabold bg-gradient-to-b from-[#516C56] via-emerald-500 font-[parisienne] to-emerald-900  bg-clip-text text-transparent py-2"
            >
              Asri
            </motion.h4>
          </div>
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col relative z-50 items-center gap-1 justify-center"
          >
            <div className="mouse"></div>
            <small className="text-zinc-300/80">scroll down</small>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;
