import React, { useState } from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const ShowProtocol = () => {
  const images = [
    {
      id: 1,
      src: "/image/prokes_1.png",
    },
    {
      id: 2,
      src: "/image/prokes_2.png",
    },
    {
      id: 3,
      src: "/image/prokes_3.png",
    },
    {
      id: 4,
      src: "/image/prokes_4.png",
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
        className="w-full min-h-3xl  shadow-xl pt-20 pb-0 shadow-black/20 bg-white"
      >
        <div className=" w-full h-full flex flex-col items-center justify-between">
          <div className="text-lg w-full shadow-lg py-3 shadow-black/30 text-zinc-200 bg-zinc-800 text-center ">
            <h1 className="font-[Hattori]">PROTOKOL KESEHATAN</h1>
            <p className="text-sm text-zinc-400 py-2 px-1">
              Tanpa mengurangi rasa hormat, acara ini menerapkan Protokol
              Kesehatan, sesuai dengan peraturan & rekomendasi pemerintah.
            </p>
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
