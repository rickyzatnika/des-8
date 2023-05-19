/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import ShowProtocol from "../ShowProkes";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

const Gallery = () => {
  return (
    <>
      <div
        id="gallery"
        className="w-full bg-white min-h-3xl pt-6 pb-8 relative"
      >
        <div className="text-center w-full py-4 leading-relaxed">
          <div className="flex items-center justify-center text-[#5e4833] text-xl sm:text-2xl">
            <motion.span
              initial={{ x: 80 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.7 }}
              className="brush p-1 text-3xl "
            >
              Happiness
            </motion.span>{" "}
            <motion.span
              initial={{ x: -120 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.4 }}
              className="alex text-4xl"
            >
              {" "}
              Moments
            </motion.span>
          </div>
        </div>
        <LightGallery
          mode="lg-fade"
          speed={300}
          addClass={true}
          closeOnTap={true}
          isMobile
          elementClassNames="w-full  mx-auto columns-3 gap-0 px-1 py-4 group "
        >
          <Link href="/img/gallery/gallery-1.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                className="rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-1.png"
                alt=""
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-2.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-2.png"
                alt=""
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-3.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                className="img-responsive hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-3.png"
                alt=""
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-4.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-4.png"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-5.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-5.png"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-6.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-6.png"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-7.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-7.png"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-8.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-8.png"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-9.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-9.png"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-10.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-10.png"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-11.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-11.png"
                alt=""
                priority
              />
            </div>
          </Link>
          <Link href="/img/gallery/gallery-12.png">
            <div className="overflow-hidden group border-amber-900/70 p-1 border rounded-md">
              <Image
                width={100}
                height={75}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                className="img-responsive rounded hover:scale-110 transition-all duration-300 ease-linear"
                src="/img/gallery/gallery-12.png"
                alt=""
                priority
              />
            </div>
          </Link>
        </LightGallery>
      </div>
      <ShowProtocol />
    </>
  );
};

export default Gallery;
