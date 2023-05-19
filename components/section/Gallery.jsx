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
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center w-full py-4 leading-relaxed"
        >
          <div className="font-[Hattori] flex flex-col gap-2 bg-gradient-to-br from-amber-800 via-amber-500/70 to-amber-800 bg-clip-text text-transparent text-3xl sm:text-3xl">
            <span className="font-[parisienne] p-1 text-5xl font-semibold">
              Happiness
            </span>{" "}
            <span> Moments</span>
          </div>
        </motion.div>
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
