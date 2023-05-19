import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CountDownTimer({ ...props }) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const intervalRef = useRef();

  useEffect(() => {
    const startTimer = () => {
      const countdownDate = new Date("June 10 2023 00:00:00").getTime();
      intervalRef.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          clearInterval(intervalRef.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
    };

    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div className="w-full flex flex-col item-center justify-center gap-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center rounded-tl-[30%] rounded-br-[40%] flex flex-col pb-3 justify-center items-center shadow-xl mx-auto  bg-gradient-to-br w-32 sm:w-36  h-32 sm:h-36 from-emerald-800/10 via-zinc-50 to-emerald-900/10 overflow-hidden  clip"
        >
          {/* Timer Days */}
          <div className=" text-3xl sm:text-4xl m-auto  flex items-center justify-center">
            <span className="bg-gradient-to-b from-[#516C56] via-[#a2c7a9] to-[#516C56] bg-clip-text text-transparent">
              {timerDays}
            </span>
          </div>
          <small className="w-full  text-center text-[#516C56]/80 aboreto text-lg">
            Hari
          </small>
        </motion.div>
        <div className="w-full px-1 gap-2 flex items-center justify-center h-full">


          {/* Timer Hours */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center rounded-tl-[30%] rounded-br-[40%] flex flex-col pb-2 shadow-xl  bg-gradient-to-br w-24 sm:w-28  h-24 sm:h-28 from-emerald-800/10 via-zinc-50 to-emerald-900/10 overflow-hidden  clip"
          >
            <div className=" text-2xl sm:text-3xl m-auto  flex items-center justify-center">
              <span className="bg-gradient-to-b from-[#516C56] via-[#a2c7a9] to-[#516C56] bg-clip-text text-transparent">
                {timerHours}
              </span>
            </div>
            <small className="w-full  text-center text-[#516C56]/80  text-sm ">
              Jam
            </small>
          </motion.div>
          {/* Timer Minutes */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-center rounded-tl-[30%] rounded-br-[40%] flex flex-col pb-2 shadow-xl  bg-gradient-to-br w-24 sm:w-28  h-24 sm:h-28 from-emerald-800/10 via-zinc-50 to-emerald-900/10 overflow-hidden  clip"
          >
            <div className=" text-2xl sm:text-3xl m-auto  flex items-center justify-center">
              <span className="bg-gradient-to-b from-[#516C56] via-[#a2c7a9] to-[#516C56] bg-clip-text text-transparent">
                {timerMinutes}
              </span>
            </div>
            <small className="w-full  text-center text-[#516C56]/80  text-sm ">
              Menit
            </small>
          </motion.div>
          {/* Timer Second */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center rounded-tl-[30%] rounded-br-[40%] flex flex-col pb-2 shadow-xl  bg-gradient-to-br w-24 sm:w-28  h-24 sm:h-28  from-emerald-800/10 via-zinc-50 to-emerald-900/10 overflow-hidden  clip"
          >
            <div className=" text-2xl sm:text-3xl m-auto  flex items-center justify-center">
              <span className="bg-gradient-to-b from-[#516C56] via-[#a2c7a9] to-[#516C56] bg-clip-text text-transparent">
                {timerSeconds}
              </span>
            </div>
            <small className="w-full  text-center text-[#516C56]/80 first-letter text-sm ">
              Detik
            </small>
          </motion.div>
        </div>
      </div>
    </>
  );
}
