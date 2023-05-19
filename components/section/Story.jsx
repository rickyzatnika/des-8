import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Awal bertemu - 2010",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/img/gallery/gallery-1.png",
  },
  {
    id: 2,
    title: "Menjalin Kasih - 2016",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/img/gallery/gallery-2.png",
  },
  {
    id: 3,
    title: "Jenjang Pernikahan - 2023",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/img/gallery/gallery-3.png",
  },
];

const Story = () => {
  return (
    <>
      <div id="gallery" className="w-full  mx-auto md:px-3 px-2 py-8">
        <div className="flex relative items-center justify-center text-[#5e4833] ">
          <div className="absolute -left-4 bg-goyang -bottom-10 ">
            <Image
              src="/img/bunga-2.png"
              alt=""
              width={145}
              height={145}
              objectFit="cover"
              className="rotate-90 "
              priority
            />
          </div>
          <motion.span
            initial={{ x: 80 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.7 }}
            className="p-1 text-3xl brush "
          >
            Short
          </motion.span>{" "}
          <motion.span
            initial={{ x: -120 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4 }}
            className="alex text-4xl"
          >
            {" "}
            Story
          </motion.span>
        </div>
        <div className="posts overflow-hidden pt-14 flex flex-wrap-reverse flex-col gap-10 md:gap-12">
          {data?.map((post, i) => (
            <div
              className="post flex flex-wrap-reverse flex-col-reverse sm:flex-row gap-3 "
              key={i}
            >
              <motion.div
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.4 }}
                className="img"
              >
                <Image
                  src={post?.image}
                  alt={post?.title}
                  width={1000}
                  height={1000}
                  objectFit="cover"
                  className="rounded-tr-[35%] rounded-bl-[35%]"
                  priority
                />
              </motion.div>
              <div className="content flex flex-col justify-around items-start gap-4">
                <div className="title space-y-2 leading-relaxed">
                  <h1 className="text-md brush text-[#a5876c] md:text-xl">
                    {post?.title}
                  </h1>
                  <div className="text-zinc-500 leading-relaxed text-sm">
                    {post?.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Story;
