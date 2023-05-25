import axios from "axios";
import { useForm } from "react-hook-form";
import moment from "moment";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import Container from "../AOS";

const CommentForm = ({ guest }) => {

  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { uuid } = router.query;

  const formSubmit = async ({ comments }) => {
    await axios
      .patch(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation/comment/${uuid}`, {
        comments: comments,
        date: moment().format("DD MMMM YYYY, h:mm a"),
      })
      .then(() => {
        setLoading(true);
        setTimeout(() => {
          Swal.fire({
            title: "Terkirim",
            icon: "success",
            text: "Terima Kasih atas Partisipasinya",
            showConfirmButton: false,
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut",
            },
          }),
            reset();
          setLoading(false);
          location.reload(
            router.push(`/invitation/${guest.unique_Code}/#wish`)
          );
        }, 3000);
        return () => clearTimeout();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: "Error",
        });
        reset();
        console.log(error)
      });
  };


  return (
    <>
      <Container>
        <div
          id="wish"
          className=" shadow-xl overflow-hidden pb-10  shadow-black/10 px-1 lg:px-3 relative bg-[#181818]"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            className="absolute top-8  -right-12">
            <Image src="/img/bunga-2.png" alt="" width={200} height={175} objectFit="cover" />
          </div>
          <div className="pt-9 text-left">
            <h3 data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out" className="text-xl text-zinc-300 ">
              Pesan{" "}
              <span className="font-[parisienne] text-4xl text-zinc-300/80">
                &
              </span>{" "}
              Harapan
            </h3>
            {/* <p className="text-zinc-400/80 text-sm">
            Berikan do`a dan ucapan terbaik untuk kami
          </p> */}
          </div>
          <form
            onSubmit={handleSubmit(formSubmit)}
            className="max-w-3xl mx-auto relative px-2 py-9 flex flex-col "
          >
            <div
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out" className="pt-3 antialiased">
              <textarea
                name=""
                cols="30"
                rows="10"
                className="w-full p-4 focus:outline-amber-800 focus:border-none placeholder:italic rounded text-zinc-700 border-none  "
                placeholder="Tulis Pesan ..."
                {...register("comments", {
                  required: true,
                })}
              ></textarea>
            </div>

            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              type="submit"
              className="rounded w-full lg:w-fit mx-auto py-2 px-8 mt-3 bg-gradient-to-tr from-zinc-900/80 via-zinc-700/60 to-zinc-900/80 hover:from-zinc-800/90 hover:to-zinc-800/90 transition-all duration-300 ease-linear hover:text-zinc-300 text-[#a8a8a8]"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <p>loading...</p>
                  <div className="animate-spin  border-b-white/20 w-3 h-3 rounded-full"></div>
                </div>
              ) : (
                <p className="text-sm sm:text-md">Kirim</p>
              )}
            </button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default CommentForm;
