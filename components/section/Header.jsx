import Image from "next/legacy/image";
import Container from "../AOS";
const Header = () => {
  return (
    <>
      <Container>
        <div
          id="header"
          className="w-full min-h-screen flex flex-col relative items-center justify-center"
        >
          <div className="w-full min-h-screen absolute top-0  ">
            <Image
              src="/img/gallery-12.png"
              alt=""
              width={350}
              height={800}
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
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-zinc-300/80  text-md sm:text-xl"
            >
              The Wedding Of
            </h1>
            <div className="text-center leading-relaxed py-4">
              <h3
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                className="text-4xl sm:text-5xl  px-2 font-extrabold bg-gradient-to-t from-[#516C56] via-emerald-500 font-[parisienne] to-emerald-900 bg-clip-text text-transparent py-2 "
              >
                Yanwar
              </h3>
              <span
                data-aos="fade-out"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="font-[parisienne] text-3xl text-zinc-200"
              >
                &
              </span>
              <h4
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                className="text-4xl sm:text-5xl  px-2 font-extrabold bg-gradient-to-b from-[#516C56] via-emerald-500 font-[parisienne] to-emerald-900  bg-clip-text text-transparent py-2"
              >
                Asri
              </h4>
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="flex flex-col relative z-50 items-center gap-1 justify-center"
            >
              <div className="mouse"></div>
              <small className="text-zinc-300/80">scroll down</small>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
