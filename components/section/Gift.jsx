import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";

const Gift = () => {
  const [copyText, setCopyText] = useState(true);
  const [activeButton, setActiveButton] = useState("button1");

  const bniClick = () => {
    setCopyText(false);
    setTimeout(() => {
      setCopyText(true);
    }, 1000);
    navigator.clipboard.writeText("0123456789");
    return () => clearTimeout();
  };
  // ====================================================
  const bcaClick = () => {
    setCopyText(false);
    setTimeout(() => {
      setCopyText(true);
    }, 1000);
    navigator.clipboard.writeText("012345678");
    return () => clearTimeout();
  };
  return (
    <>
      <div className="w-full min-h-3xl pb-14 flex items-center pt-8 ">
        <div className=" w-[96%] mx-auto pt-4 pb-8 rounded-[50px] h-full lg:w-5/6 px-4 lg:px-12 shadow-xl bg-zinc-100 shadow-black/20 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 items-center justify-center">
            <div>
              <motion.h3
                initial={{ y: -40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl text-[#444337] brush"
              >
                Share
              </motion.h3>
              <span className="font-[parisienne] text-5xl text-[#516C56]">
                Love
              </span>
            </div>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center  text-sm text-[#444337] leading-relaxed"
            >
              Doa dan restu Anda pada pernikahan kami sudah cukup sebagai
              hadiah, tetapi jika Anda ingin memberikan lebih, kami senang
              menerimanya dan itu akan melengkapi kebahagiaan kami bahkan lebih.
            </motion.p>
          </div>
          <div className="flex gap-3 pt-6">
            <button
              className={` tracking-widest ${
                activeButton === "button1"
                  ? "border px-8 py-1 text-zinc-200 rounded-full shadow-md bg-[#29819cc5]"
                  : "border px-8 py-1 text-zinc-400 rounded-full bg-zinc-100"
              }`}
              onClick={() => setActiveButton("button1")}
            >
              BNI
            </button>
            <button
              className={` tracking-widest ${
                activeButton === "button2"
                  ? "border px-8 py-1 text-zinc-200 rounded-full shadow-md bg-[#023497ae]"
                  : "border px-8 py-1 text-zinc-400 rounded-full bg-zinc-100"
              }`}
              onClick={() => setActiveButton("button2")}
            >
              BCA
            </button>
          </div>
          {activeButton === "button1" && (
            <div className="flex flex-col items-center justify-center pt-[1.6rem]">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="flex items-center flex-col">
                  <Image
                    src="/image/bni.png"
                    alt=""
                    width={75}
                    height={50}
                    objectFit="contain"
                    objectPosition="top"
                    priority
                  />
                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-[#444337] text-md uppercase sm:text-lg mb-2 tracking-wider"
                  >
                    yanwar arifin
                  </motion.p>
                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[#444337] text-sm sm:text-md  tracking-wide"
                  >
                    NO.REK : 0123456789
                  </motion.p>
                </div>
                {copyText === true ? (
                  <button
                    onClick={bniClick}
                    className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#516C56] hover:bg-[#465f4b]"
                  >
                    <AiOutlineCopy size={18} />
                    <span className="text-sm tracking-wider">Salin</span>
                  </button>
                ) : (
                  <button
                    onClick={bniClick}
                    className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-4 bg-[#465f4b] "
                  >
                    <span className="text-sm tracking-wider">Disalin</span>
                  </button>
                )}
                <Link
                  href="https://dboard.webqodes.com"
                  target="_blank"
                  className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-4 bg-[#516C56] hover:bg-[#465f4b]"
                >
                  <BsWhatsapp size={18} />
                  <span className="text-sm tracking-wider">Konfirmasi</span>
                </Link>
              </div>
            </div>
          )}
          {activeButton === "button2" && (
            <div className="flex flex-col items-center pt-[1.6rem] justify-center ">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="flex items-center flex-col">
                  <Image
                    src="/image/bca.png"
                    alt=""
                    width={100}
                    height={50}
                    objectFit="contain"
                    objectPosition="top"
                    priority
                  />
                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-[#444337] text-md uppercase sm:text-lg mb-2 tracking-wider"
                  >
                    asri sulastri
                  </motion.p>
                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[#444337] text-sm sm:text-md  tracking-wide"
                  >
                    NO.REK : 012345678
                  </motion.p>
                </div>
                {copyText === true ? (
                  <button
                    onClick={bcaClick}
                    className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#516C56] hover:bg-[#465f4b]"
                  >
                    <AiOutlineCopy size={18} />
                    <span className="text-sm tracking-wider">Salin</span>
                  </button>
                ) : (
                  <button
                    onClick={bcaClick}
                    className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-4 bg-[#465f4b]"
                  >
                    <span className="text-sm tracking-wider">Disalin</span>
                  </button>
                )}
                <Link
                  href="https://dboard.webqodes.com"
                  target="_blank"
                  className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-4 bg-[#516C56] hover:bg-[#465f4b]"
                >
                  <BsWhatsapp size={18} />
                  <span className="text-sm tracking-wider">Konfirmasi</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gift;
