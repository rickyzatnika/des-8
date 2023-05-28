import Container from "../AOS";
import Link from "next/link";

const Invitation = () => {
  return (
    <Container>
      <div
        id="event"
        className="w-full flex items-center flex-col py-8 justify-evenly min-h-screen bg-[url('/img/bg.jpg')] bg-cover bg-right relative"
      >
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-white via-transparent to-white" />

        <div className="text-center relative z-20">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className=" text-[#516C56] mb-2 text-lg md:text-xl px-2 title"
          >
            Assalamu`alaikum Warahmatullahi Wabarakatuh
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className="text-zinc-500/90 mont text-sm leading-relaxed px-1"
          >
            Dengan menyebut nama Allah SWT yang Maha Pengasih dan Maha
            Penyayang, kami dengan senang hati ingin mengundang
            Bapak/Ibu/Saudara/i dan berbagi kegembiraan pada pernikahan kami
            yang Insya Allah akan dilaksanakan,
          </p>
        </div>
        <div className="flex flex-col relative z-50 leading-relaxed justify-center text-center gap-2 items-center">
          <span
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className="text-zinc-600 title pt-3"
          >
            Pada Tanggal :
          </span>
          <span
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className="text-3xl py-2 text-[#503e2d] font-[parisienne]"
          >
            10 Juni 2023
          </span>
        </div>
        <div className="w-full flex relative z-50 flex-nowrap items-center justify-around">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className="w-fit text-center flex flex-col items-center gap-2  py-2 leading-relaxed"
          >
            <h3 className="text-zinc-600 title text-md sm:text-lg ">
              Akad Nikah
            </h3>

            <p className="text-zinc-500 mont text-sm leading-loose">
              {" "}
              Pukul 08.00 WIB <br /> s/d <br /> Selesai
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className="w-fit text-center flex flex-col items-center gap-2 py-2 leading-relaxed"
          >
            <h3 className="text-zinc-600 title text-md sm:text-lg ">Resepsi</h3>

            <p className="text-zinc-500 mont text-sm leading-loose">
              Pukul 10.00 WIB <br /> s/d <br /> Pukul 14.20 WIB
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
          className="py-4 leading-relaxed text-center relative z-40"
        >
          <p className="text-zinc-800/80  title">Lokasi :</p>
          <p className="text-zinc-800 mont flex text-xl flex-col tracking-wide items-center gap-3 ">
            AL-HAROMAIN <br />
          </p>
          <span className="px-2 mont text-zinc-700/80 leading-relaxed text-sm tracking-normal">
            Jl. Tubagus Ismail No.90, Sekeloa, Kecamatan Coblong, Kota Bandung,
            Jawa Barat 40134
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-easing="ease-in-out"
          className="w-full px-2 lg:px-8 flex flex-col items-center gap-5 py-3 relative z-40"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.03662091098!2d107.6207860151833!3d-6.886217069298227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7000af6876b%3A0xfb6d1a3f65c98e39!2sJl.%20Tubagus%20Ismail%20No.90%2C%20Sekeloa%2C%20Kecamatan%20Coblong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040134!5e0!3m2!1sid!2sid!4v1676520917371!5m2!1sid!2sid"
            width="100%"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Link
            href="https://goo.gl/maps/fyuaxtiA82g5wXnN9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-2 text-sm px-5 bg-[#516C56]  hover:bg-[#49634e] shadow text-zinc-200 rounded">
              {" "}
              Open Maps
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Invitation;
