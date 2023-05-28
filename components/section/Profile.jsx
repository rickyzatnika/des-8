import React from "react";
import Image from "next/legacy/image";
import Container from "../AOS";
import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";

const Profile = () => {
  return (
    <Container>
      <div
        className="w-full min-h-screen overflow-hidden bg-white flex flex-col items-center justify-center py-10 lg:justify-between relative "
        id="profile"
      >
        {/* {showQrCode && <GetQrCode setShowQrCode={setShowQrCode} />} */}

        <div className="w-full relative  flex flex-col items-center justify-center  h-full  z-30">
          <div className="flex shadow-md   w-fit bg-[#f5f5dcda] p-6 sm:p-8 px-10 sm:px-14 shadow-black/20 flex-col justify-center gap-5 items-center relative mx-auto">
            <div className="absolute -bottom-8 -left-4 w-full">
              <Image
                src="/img/bunga.png"
                width={150}
                height={150}
                priority
                alt=""
                className="bg-goyang"
              />
            </div>
            <div>
              <Image
                data-aos="fade-right"
                data-aos-duration="1000"
                src="/img/man.png"
                alt=""
                width={160}
                height={200}
                objectFit="cover"
                className="rounded-tr-[40%] rounded-bl-[40%]"
                priority
              />
            </div>

            <div className="flex flex-col gap-2 items-center justify-center px-4">
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                className="title text-xl sm:text-2xl text-[#503e2d]  "
              >
                Yanwar Arifin
              </h2>
              <Link
                data-aos="fade-up"
                data-aos-duration="1300"
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
              <div className="text-center mont text-zinc-600/80  ">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  className=" text-sm my-1"
                >
                  Putra dari :
                </p>
                <p data-aos="fade-up" data-aos-duration="1500">
                  Bpk. Irawan Yusmiatna{" "}
                </p>
                <p data-aos="fade-up" data-aos-duration="1600">
                  &
                </p>
                <p data-aos="fade-up" data-aos-duration="1700">
                  Ibu Rosmini
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="great text-6xl my-8 text-zinc-600 "
          >
            &
          </div>
          <div className="relative  overflow-hidden shadow-md bg-[#f5f5dcda] p-6 sm:p-8 px-10 sm:px-14 w-fit shadow-black/20  flex flex-col items-center justify-center gap-5">
            <div className="absolute -bottom-8 -right-8 rotate-180">
              <Image
                src="/img/bunga.png"
                width={150}
                height={150}
                priority
                alt=""
                className="bg-goyang"
              />
            </div>
            <div>
              <Image
                data-aos="fade-left"
                data-aos-duration="1000"
                src="/img/girl.png"
                alt=""
                width={160}
                height={200}
                objectFit="cover"
                className="rounded-tl-[40%] rounded-br-[40%]"
                priority
              />
            </div>

            <div className="flex flex-col gap-2 items-center justify-center px-4">
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                className="title text-xl sm:text-2xl text-[#503e2d] "
              >
                Asri Sulastri
              </h2>
              <Link
                data-aos="fade-up"
                data-aos-duration="1300"
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
              <div className="text-center text-zinc-600/80 mont">
                <p
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  className=" text-sm my-1 "
                >
                  Putra dari :
                </p>
                <p data-aos="fade-up" data-aos-duration="1500">
                  Bpk. Irawan Yusmiatna{" "}
                </p>
                <p data-aos="fade-up" data-aos-duration="1600">
                  &
                </p>
                <p data-aos="fade-up" data-aos-duration="1700">
                  Ibu Rosmini
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
