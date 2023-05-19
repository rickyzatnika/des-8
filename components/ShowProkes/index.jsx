import React, { useState } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const ShowProtocol = () => {
  const images = [
    {
      id: 1,
      src: "/img/prokes-1.png",
    },
    {
      id: 2,
      src: "/img/prokes-2.png",
    },
    {
      id: 3,
      src: "/img/prokes-3.png",
    },
    {
      id: 4,
      src: "/img/prokes-4.png",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
        className="w-full min-h-3xl  pt-2 pb-6 px-2 sm:px-3  "
      >
        <div className=" w-full flex flex-col py-8 items-center shadow-xl rounded-xl shadow-black/20 bg-gradient-to-t from-zinc-200/60 to-white justify-between">
          <div className="text-md w-full   text-center ">
            <h1 className="font-[Hattori] text-zinc-100 tracking-widest px-4 py-1 bg- w-fit mx-auto bg-[#524446] rounded-full">
              CORONAVIRUS
            </h1>
            <span className="text-[#524446]">PREVENTION</span>
          </div>
          <div className=" py-4 grid grid-cols-2 px-3 items-center justify-center">
            {images.map((image) => (
              <div key={image.id} className=" w-full h-full col-span-1 ">
                <Image
                  src={image.src}
                  alt=""
                  width={300}
                  height={350}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={image.src}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ShowProtocol;
