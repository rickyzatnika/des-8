import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";

const Gift = () => {
  const [copyText, setCopyText] = useState(true);

  const bcaClick = () => {
    setCopyText(false);

    setTimeout(() => {
      setCopyText(true);
    }, 2000);
    navigator.clipboard.writeText("0795597066");
    return () => clearTimeout();
  };
  return (
    <>
      <div className="w-full min-h-3xl py-14 flex items-center bg-white ">
        <div className=" w-[96%] mx-auto py-8 rounded-[50px] h-full lg:w-5/6 px-4 lg:px-12 shadow-xl bg-zinc-100 shadow-[#9c8450]/40 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-3 items-center justify-center">
            <motion.h3
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl text-[#444337] "
            >
              Share{" "}
              <span className="font-[parisienne] text-5xl text-[#bfa95b]">
                Love
              </span>
            </motion.h3>
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
          <div className="flex flex-col items-center justify-center gap-1 pt-10">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <Image
                src="/image/bni.png"
                alt=""
                width={100}
                height={75}
                style={{ width: "auto", height: "auto" }}
                objectFit="contain"
                objectPosition="top"
                priority
              />
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-[#444337] text-md  tracking-wider"
              >
                BANK BNI
              </motion.p>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[#444337] text-sm sm:text-md uppercase text-lg my-2 tracking-wider"
              >
                Dinda Novita Sary
              </motion.p>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[#444337] text-sm sm:text-md  tracking-wide"
              >
                NO.REK : 0795597066
              </motion.p>
              {copyText === true ? (
                <button
                  onClick={bcaClick}
                  className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#bfa95b]"
                >
                  <AiOutlineCopy size={18} />
                  <span className="text-sm tracking-wider">Salin</span>
                </button>
              ) : (
                <button
                  onClick={bcaClick}
                  className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#bfa95b]"
                >
                  <span className="text-sm tracking-wider">Disalin</span>
                </button>
              )}
              <Link
                href="https://wasap.at/4qGwhd"
                target="_blank"
                className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#bfa95b]"
              >
                <BsWhatsapp size={18} />
                <span className="text-sm tracking-wider">Konfirmasi</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gift;
