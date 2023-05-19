import React from "react";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Story 1 - 2010",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/img/gallery/gallery-1.png",
  },
  {
    id: 2,
    title: "Story 2 - 2016",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/img/gallery/gallery-2.png",
  },
  {
    id: 3,
    title: "Story 3 - 2023",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/img/gallery/gallery-3.png",
  },
];

const Story = () => {
  return (
    <>
      <div id="gallery" className="w-full  mx-auto md:px-3 px-2 py-8">
        <div className="flex items-center justify-center text-[#5e4833] ">
          <span className="p-1 text-xl ">Short</span>{" "}
          <span className="alex text-3xl"> Story</span>
        </div>
        <div className="posts pt-14 flex flex-wrap-reverse flex-col gap-10 md:gap-12">
          {data?.map((post, i) => (
            <div
              className="post flex flex-wrap-reverse flex-row gap-2 md:gap-3"
              key={i}
            >
              <div className="img">
                <Image
                  src={post?.image}
                  alt={post?.title}
                  width={1000}
                  height={1000}
                  objectFit="cover"
                  className="rounded-tr-[40%] shadow-xl  shadow-black/20 rounded-bl-[40%]"
                  priority
                />
              </div>
              <div className="content flex flex-col justify-around items-start gap-4">
                <div className="title space-y-2 leading-relaxed">
                  <h1 className="text-lg text-[#516C56] md:text-xl">
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
