import React, { useState, useEffect, useRef } from "react";
import CountDown from "../countdownTimer";
import Image from "next/legacy/image";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Event = ({ guest }) => {
  const sectionRef = useRef(null);
  const [displayed, setDisplayed] = useState(false);
  // const [showQrCode, setShowQrCode] = useState(false);
  const [showAttend, setShowAttend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  const { uuid } = router.query;

  const { register, handleSubmit } = useForm();

  const attendForm = async ({ status, present }) => {
    try {
      const userId = guest.userId;
      await axios.patch(
        `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/status/${uuid}?userId=${userId}`,
        {
          present: present,
          status: selectedValue,
        }
      );
      if (!status && selectedValue === "not Going") {
        Swal.fire({
          text: "Terima Kasih Atas Perhatiannya 😊",
          showConfirmButton: true,
          showCloseButton: false,
          confirmButtonColor: "#a58b52",
          showClass: {
            popup: "animate__animated animate__zoomIn animate__delay-1s",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else {
        Swal.fire({
          text: "Terima Kasih Atas Perhatiannya 😊",
          showConfirmButton: false,
          showCloseButton: false,
          showConfirmButton: true,
          confirmButtonColor: "#a58b52",
          showClass: {
            popup: "animate__animated animate__zoomIn animate__delay-1s",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      }
      setShowAttend(false);
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
      className="w-full min-h-3xl py-24 relative"
      id="event"
    >
      <div className="absolute  w-full top-0 h-full z-30">
        <Image
          src="/image/background-profile.png"
          alt=""
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="w-full gap-8 flex flex-col items-center justify-around relative z-40">
        <h1 className="text-4xl bg-gradient-to-tr from-amber-600 via-yellow-700 to-transparent bg-clip-text text-transparent font-[parisienne] ">
          Save The Date
        </h1>
        <div className="w-full px-2">
          <CountDown />
        </div>
        <div className="flex flex-col gap-6 items-center justify-center">
          <AddToCalendarButton
            name="The Wedding Rahmadi & Dinda"
            options="'Google'"
            location="Jl. Tubagus Ismail No.90, Sekeloa, Kecamatan Coblong, Kota Bandung, Jawa Barat 40134"
            startDate="2023-6-10"
            startTime="10:15"
            endTime="14:20"
            buttonStyle="date"
            timeZone="Asia/Jakarta"
            label=" add to calendar"
            trigger="click"
          ></AddToCalendarButton>
        </div>
      </div>
      {guest && guest?.status === "Opened" ? (
        <>
          {showAttend && (
            <div className="w-full md:w-5/6 lg:w-2/6 min-h-screen bg-black/70 backdrop-blur-sm fixed z-[999999999] flex items-center justify-center px-2 top-0 right-0">
              <motion.div
                initial={{ y: -40 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="w-full h-auto px-2"
              >
                <form
                  onSubmit={handleSubmit(attendForm)}
                  className="w-full relative shadow-xl shadow-black/30 bg-white rounded z-50 h-auto  px-2 pt-10 pb-20 flex flex-col items-center justify-center gap-3"
                >
                  <div className="w-full flex items-center justify-between pb-8">
                    <h3 className="text-xl text-zinc-800">
                      Konfirmasi{" "}
                      <span className="font-[parisienne] text-3xl text-[#c79d43]">
                        Kehadiran
                      </span>
                    </h3>
                    <div className=" w-24 h-[2px] bg-[#be9d54]" />
                  </div>
                  <div className="w-full leading-relaxed mb-3">
                    <p className="mb-3 text-sm text-zinc-700 font-normal pl-1">
                      <span className="text-red-500">*</span> Pilih ya jika anda
                      akan menghadiri acara
                    </p>
                    <div className="flex flex-col flex-nowrap gap-2 pl-2">
                      <div className="flex flex-nowrap gap-1">
                        <input
                          type="radio"
                          value="going"
                          onChange={() => handleClick("going")}
                          {...register("status", { required: true })}
                          checked={selectedValue === "going"}
                        />
                        <label
                          className="text-zinc-700"
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
                          className="text-zinc-700"
                        >
                          Maaf, Saya tidak bisa hadir
                        </label>
                      </div>
                    </div>
                  </div>
                  {selectedValue === "going" && (
                    <div className="mb-3 w-full">
                      <h3 className="mb-2 text-lg text-zinc-600">
                        Berapa Orang yang Hadir :
                      </h3>
                      <select
                        className="w-full text-[#444337] py-3 px-2 border-none outline-none rounded focus:outline-[#9c8450]"
                        {...register("present", { required: true })}
                      >
                        <option value="1">1 Orang</option>
                        <option value="2">2 Orang</option>
                        <option value="3">3 Orang</option>
                      </select>
                    </div>
                  )}

                  {selectedValue && (
                    <button
                      className="py-3 rounded px-7 w-full text-white/80 bg-[#a58b52]  hover:bg-[#867041]"
                      type="submit"
                    >
                      {loading ? (
                        <>
                          <div className="flex items-center justify-center gap-2 w-full">
                            <span>Loading...</span>
                            <div className="border-2  p-2  border-zinc-300  bg-clip-border animate-spin rounded-full relative overflow-x-hidden">
                              <span className="absolute top-0 right-0 h-2 w-2  bg-green-400 rounded-full z-10"></span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <span className="text-zinc-200"> Kirim</span>
                      )}
                    </button>
                  )}
                </form>
              </motion.div>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Event;
