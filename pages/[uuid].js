import axios from 'axios'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/legacy/image";
import { useForm } from "react-hook-form"
import { GiLoveLetter } from 'react-icons/gi'
import BackSound from '../components/Backsound';
import Container from '../components/AOS';

const GetUniqueCode = ({ guest }) => {
  const [isPlay, setIsPlay] = useState(false);

  const router = useRouter();
  const { uuid } = router.query;
  const { register, handleSubmit } = useForm();

  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmit = async ({ status }) => {

    try {
      const userId = guest?.userId;
      await axios.patch(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation/status/${uuid}?userId=${userId}`, {
        status: selectedValue,
      })
      setLoading(true);
      const timeoutId = setTimeout(() => {
        router.push(`/invitation/${uuid}?userId=${userId}`);
        setIsPlay(true);
      }, 1000);

      return () => clearTimeout(timeoutId);

    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (value) => {
    setSelectedValue(value);
  };


  return (
    <>
      <div className='hidden'>
        <BackSound setIsPlay={setIsPlay} isPlay={isPlay} />
      </div>
      <Container>
        <div
          className="overflow-hidden w-full bg-[url('/img/cover.png')] bg-cover min-h-screen z-50 fixed top-0 lg:relative flex flex-col gap-4  items-center justify-evenly pt-28 ">
          <div className="flex flex-col items-center">
          </div>
          <div className='flex items-center flex-col justify-center relative'>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="flex text-[#516C56] pb-3 mt-6 gap-2 items-center">
              <h1 className='text-lg sm:text-xl '>Yanwar</h1>
              <p className='alex text-4xl'>&</p>
              <h2 className='text-lg sm:text-xl '>Asri</h2>
            </div>
            <div className=' w-full h-full absolute -bottom-44 -left-28 -z-10'>
              <Image src="/img/bunga-2.png" alt='bunga' width={450} objectFit='contain' height={375} priority />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out"
              className='w-fit rounded-lg border px-8 py-3 sm:py-4 text-center leading-relaxed'>
              <h4 className='mb-2 text-sm sm:text-md text-zinc-700'>Kepada Yth, Bpk/Ibu/Saudara/i :</h4>
              <p className='py-2 text-lg capitalize text-[#516C56]'>{guest?.name}</p>
              <p className='text-zinc-700 text-sm sm:text-md'>Di Tempat.</p>
            </div>
            <form className='w-fit items-center justify-center flex flex-col' onSubmit={handleSubmit(formSubmit)}>
              <input
                type="text"
                onChange={() => handleClick("Opened")}
                {...register("status", { required: true })}
                checked={selectedValue === "Opened"}
                value="Opened"
                className="opacity-0 flex flex-col items-center justify-center"

              />
              {/* fixed status opened*/}
              {!guest?.status ? (
                <>
                  {loading === true ? <button
                    onClick={() => handleClick("Opened")}
                    type="submit"
                    className="py-2 text-sm  flex items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 bg-[#516C56]  hover:bg-[#49634e] "
                  >

                    sedang memuat...
                  </button> : <button
                    onClick={() => handleClick("Opened")}
                    type="submit"
                    className="py-2 text-sm  flex items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 bg-[#516C56]  hover:bg-[#49634e] "
                  >
                    <GiLoveLetter size={22} />
                    Buka Undangan
                  </button>}

                </>
              ) : (
                <>
                  {loading === true ? <button
                    onClick={() => handleClick("Opened")}
                    type="submit"
                    className="py-2 text-sm  flex items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 bg-[#516C56]  hover:bg-[#49634e] "
                  >

                    sedang memuat...
                  </button> : <button
                    className="py-2 flex text-sm items-center gap-1 cursor-pointer px-3 shadow-lg rounded shadow-black/20 text-zinc-200 hover:text-zinc-100 bg-[#516C56]  hover:bg-[#49634e] "
                    onClick={() => handleClick(guest?.status)}
                    type="submit"
                  >
                    <GiLoveLetter size={22} />
                    Buka Undangan
                  </button>}

                </>
              )}
            </form>
          </div>
        </div>
      </Container>

    </>
  )
}

export default GetUniqueCode





// export const getStaticPaths = async () => {
//   const res = await axios.get(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation`);
//   const invitationDataList = res.data || [];
//   const paths = invitationDataList.length
//     ? invitationDataList.map((guests) => {
//       return {
//         params: {
//           uuid: guests.unique_Code,
//         },
//       };
//     })
//     : [];
//   return {
//     paths,
//     fallback: true,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
//   );
//   const guest = res.data || {};
//   return {
//     props: {
//       guest,
//     },
//     revalidate: 1
//   };
// };


export const getServerSideProps = async ({ params }) => {

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
  );
  const guest = res.data || {};

  return {
    props: {
      guest,
      revalidate: 1
    },
  };
};