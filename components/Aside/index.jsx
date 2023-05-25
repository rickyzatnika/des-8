import React, { useState } from "react";
import Image from "next/legacy/image";
import { images } from "../MyImage";
import Navbar from "../Navbar";
import Container from "../AOS";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Canvas from "../canvas/Canvas";

const Aside = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2500,
    fade: true,
    className: "w-full h-full ",

    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <>
      <Canvas />
      <Container>
        <div className="w-full relative min-h-screen hidden lg:flex flex-col items-center justify-center">
          <div className="fixed z-5 top-0 left-0 bg-gradient-to-l from-black via-transparent to-black w-full h-full"></div>
          <div className="fixed z-5 top-0 right-96 bg-gradient-to-l from-black via-transparent to-black w-full h-full"></div>
          {/* <Canvas /> */}
          <div
            data-aos="fade-down"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className="fixed z-30 top-14 text-zinc-300 text-lg "
          >
            Wedding Invitation
          </div>
          <div className="w-full min-h-screen fixed top-0 left-0  z-20 bg-gradient-to-t from-[#000000] via-transparent to-[#000000] " />
          <Navbar />
          <div className="w-full h-full fixed top-0 bg-[url('/img/gallery-3.png')] bg-cover bg-no-repeat -z-10">
            <Slick {...settings}>
              {images.map((img) => (
                <Image
                  key={img.id}
                  src={`${img.src}`}
                  alt=""
                  width={75}
                  height={50}
                  layout="responsive"
                  objectFit="contain"
                  objectPosition="top-center"
                  placeholder="blur"
                  blurDataURL={img.src}
                  priority
                />
              ))}
            </Slick>
          </div>

          <div className="flex flex-col gap-9 items-center justify-center fixed bottom-16 z-20">
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className="text-center capitalize"
            >
              <h1 className="text-3xl text-zinc-200 font-[parisienne] tracking-widest">
                yanwar
              </h1>
              <span className="text-5xl font-[parisienne] text-[#516C56]">
                &
              </span>
              <h1 className="text-3xl text-zinc-200 font-[parisienne] tracking-widest">
                Asri
              </h1>
            </div>
            <p className=" text-zinc-200/80 ">10 Juni 2023</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Aside;
