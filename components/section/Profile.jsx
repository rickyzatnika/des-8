import React from "react";
import Image from "next/legacy/image";

import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";

import "animate.css";

const Profile = () => {
  return (
    <div
      className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-10 lg:justify-between relative "
      id="profile"
    >
      {/* {showQrCode && <GetQrCode setShowQrCode={setShowQrCode} />} */}

      <div className="w-full relative  flex flex-col items-center justify-center  h-full  z-30">
        <div className="flex shadow-md  overflow-hidden w-fit bg-zinc-100/60 p-6 sm:p-8 px-10 sm:px-14 shadow-black/20 flex-col justify-center gap-5 items-center relative mx-auto">
          <div className="absolute -bottom-8 -left-8 w-full">
            <Image
              src="/img/bunga.png"
              width={150}
              height={150}
              priority
              alt=""
            />
          </div>
          <Image
            src="/img/man.png"
            alt=""
            width={160}
            height={200}
            objectFit="cover"
            className="rounded-tr-[40%] rounded-bl-[40%]"
            priority
          />

          <div className="flex flex-col gap-2 items-center justify-center px-4">
            <h2 className="font-[Hattori] text-xl sm:text-2xl text-[#503e2d]  ">
              Yanwar Arifin
            </h2>
            <Link
              href="https://instagram.com/rahmadi.irawansyah"
              target="_blank"
              passHref
              prefetch={false}
            >
              <SlSocialInstagram
                size={22}
                className="text-zinc-700  animate-spin hover:animate-none"
              />
            </Link>
            <div className="text-center text-[#755a40]  ">
              <p className=" text-sm">Putra dari :</p>
              <p>Bpk. Irawan Yusmiatna </p>
              <p>&</p>
              <p>Ibu Rosmini</p>
            </div>
          </div>
        </div>
        <div className="font-[parisienne] text-6xl my-3 text-[#516C56] ">&</div>
        <div className="relative overflow-hidden shadow-md bg-zinc-100/60 p-6 sm:p-8 px-10 sm:px-14 w-fit shadow-black/20  flex flex-col items-center justify-center gap-5">
          <div className="absolute -bottom-8 -right-8 rotate-180">
            <Image
              src="/img/bunga.png"
              width={150}
              height={150}
              priority
              alt=""
            />
          </div>
          <Image
            src="/img/girl.png"
            alt=""
            width={160}
            height={200}
            objectFit="cover"
            className="rounded-tl-[40%] rounded-br-[40%]"
            priority
          />

          <div className="flex flex-col gap-2 items-center justify-center px-4">
            <h2 className="font-[Hattori] text-xl sm:text-2xl text-[#503e2d] ">
              Asri Sulastri
            </h2>
            <Link
              href="https://instagram.com/dindanovitas"
              target="_blank"
              passHref
              prefetch={false}
            >
              <SlSocialInstagram
                className="text-zinc-700 dark:text-zinc-400 animate-spin hover:animate-none"
                size={22}
              />
            </Link>
            <div className="text-center text-[#755a40]">
              <p className=" text-sm">Putra dari :</p>
              <p>Bpk. Irawan Yusmiatna </p>
              <p>&</p>
              <p>Ibu Rosmini</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
