import React, { useState, useEffect, useRef } from "react";
import CountDown from "../countdownTimer";
import Image from "next/legacy/image";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { useRouter } from "next/router";
import Container from "../AOS";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Event = ({ guest }) => {
  const sectionRef = useRef(null);
  const [displayed, setDisplayed] = useState(false);
  // const [showQrCode, setShowQrCode] = useState(false);
  const [showAttend, setShowAttend] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  const { uuid } = router.query;
  const { register, handleSubmit } = useForm();

  const attendForm = async ({ status, present }) => {
    try {
      setLoading(true);
      const userId = guest.userId;
      await axios.patch(
        `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/status/${uuid}?userId=${userId}`,
        {
          present: present,
          status: selectedValue,
        }
      );
      if (!status && selectedValue === "not Going") {
        const timeoutId = setTimeout(() => {
          Swal.fire({
            text: "Terimakasih Atas Perhatiannya 😊",
            showConfirmButton: true,
            confirmButtonColor: "#516C56",
          });
          setLoading(false);
          setShowAttend(false);
        }, 2000);
        return () => setTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          Swal.fire({
            text: "Terima Kasih Atas Perhatiannya 😊",
            showConfirmButton: true,
            confirmButtonColor: "#516C56",
          });
          setLoading(false);
          setShowAttend(false);
        }, 2000);
        return () => clearTimeout(timeoutId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !displayed) {
          setShowAttend(true);
          setDisplayed(true);
        }
      });
    });
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [displayed, guest.status]);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-3xl py-16 bg-white relative px-2 "
      id="event"
    >
      <div className="w-full gap-8 pb-12 shadow-lg flex flex-col items-center justify-around relative z-40">
        <Container>
          <AddToCalendarButton
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            name="The Wedding Rahmadi & Dinda"
            options={["Google"]}
            location="Jl. Tubagus Ismail No.90, Sekeloa, Kecamatan Coblong, Kota Bandung, Jawa Barat 40134"
            startDate="2023-6-10"
            startTime="10:15"
            endTime="14:20"
            timeZone="Asia/Jakarta"
            buttonStyle="neumorphism"
            lightMode="bodyScheme"
            size="3"
          ></AddToCalendarButton>
        </Container>
        <div className="w-full px-2">
          <CountDown />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center"></div>
      </div>

      {guest && guest?.status === "Opened" ? (
        <>
          {showAttend && (
            <Container>
              <div className="w-full md:w-5/6 lg:w-2/6 min-h-screen bg-black/70  fixed z-[999999999] flex items-center justify-center top-0 right-0">
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  className="w-full h-auto px-2 "
                >
                  <form
                    onSubmit={handleSubmit(attendForm)}
                    className="w-full relative  shadow-xl overflow-hidden shadow-black/30 bg-white rounded z-50 h-auto  px-3 pt-10 pb-10 flex flex-col items-center justify-center gap-3"
                  >
                    <div className="absolute z-40 -top-2 -right-2 opacity-80 bg-goyang">
                      <Image
                        src="/img/bunga-hijau.png"
                        alt=""
                        width={100}
                        height={100}
                        priority
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full flex items-center justify-between pb-8">
                      <div className="flex flex-col">
                        <h3 className="text-xl text-zinc-800">Konfirmasi</h3>
                        <span className="alex text-3xl relative left-10 text-[#516C56]">
                          Kehadiran
                        </span>
                      </div>
                      <div className=" w-0 h-[2px] bg-[#516C56]" />
                    </div>
                    <div className="w-full leading-relaxed mb-3">
                      <p className="mb-4 text-sm text-zinc-500  pl-1">
                        <span className="text-red-500">*</span> Pilih ya jika
                        anda akan menghadiri acara
                      </p>
                      <div className="flex flex-col flex-nowrap gap-2 px-4 pt-1">
                        <div className="flex flex-nowrap gap-1">
                          <input
                            type="radio"
                            value="going"
                            onChange={() => handleClick("going")}
                            {...register("status", { required: true })}
                            checked={selectedValue === "going"}
                          />
                          <label
                            className="text-zinc-700 text-sm sm:text-md"
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick("going");
                            }}
                          >
                            Ya, Saya akan hadir
                          </label>
                        </div>
                        <div className="flex flex-nowrap gap-1">
                          <input
                            type="radio"
                            {...register("status", { required: true })}
                            value="not Going"
                            checked={selectedValue === "not Going"}
                            onChange={() => handleClick("not Going")}
                          />
                          <label
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick("not Going");
                            }}
                            className="text-zinc-700 text-sm sm:text-md"
                          >
                            Maaf, Saya tidak bisa hadir
                          </label>
                        </div>
                      </div>
                    </div>
                    {selectedValue === "going" && (
                      <div className="mb-3 w-full">
                        <h3 className="mb-2 text-md tracking-wider text-center text-zinc-800">
                          RSVP
                        </h3>
                        <select
                          className="w-full text-sm text-[#444337] py-3 px-2 border-none outline-none rounded focus:outline-[#516C56]"
                          {...register("present", { required: true })}
                        >
                          <option value="" style={{ display: "none" }}>
                            pilih
                          </option>
                          <option value="1">1 Orang</option>
                          <option value="2">2 Orang</option>
                          <option value="3">3 Orang</option>
                        </select>
                      </div>
                    )}

                    {selectedValue && (
                      <button
                        className="py-3 rounded px-7 w-full text-white/80 bg-[#516C56]  hover:bg-[#4b644f]"
                        type="submit"
                      >
                        {loading ? <span>Loading...</span> : <span>Kirim</span>}
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </Container>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Event;
