import CommentForm from "../commentForm";
import { FaUserCircle } from "react-icons/fa";
import Container from "../AOS";
const Wish = ({ guest, posts }) => {
  return (
    <>
      <div className="w-full min-h-screen" id="wish">
        <CommentForm guest={guest} />
        <Container>
          <div className="w-full pt-10 pb-14 relative overflow-y-scroll h-[95%] bg-[#191919] pl-3 lg:px-10 ">
            <h2 className="text-zinc-100">
              {posts?.length + 1} <span className="italic">Post Comment</span>
            </h2>
            <ol className=" border-[#6e664b] p-8   ">
              <li className="w-full border-b pb-4 border-zinc-700">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  className="absolute w-3 h-3 left-3 lg:left-8 "
                >
                  <FaUserCircle className="text-[#97864f]" size={24} />
                </div>
                <span
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-out"
                  className="mb-1 text-sm lg:text-md font-normal leading-none text-zinc-300"
                >
                  WebQodes Digital Invitation
                </span>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1300"
                  data-aos-easing="ease-in-out"
                  className="mb-2 p-2 text-sm leading-relaxed lg:text-md font-thin text-zinc-300 "
                >
                  Happy wedding Yanwar & Asri, semoga menjadi keluarga yang
                  Sakinah, Mawadah & Warohmah.. Amiin ..
                </p>
                <small
                  data-aos="fade-up"
                  data-aos-duration="1400"
                  data-aos-easing="ease-in-out"
                  className="text-zinc-500 p-2 "
                >
                  10 Juni 2023, 9:14 pm
                </small>
              </li>
            </ol>

            {posts?.map((post, i) => (
              <ol key={i} className="border-[#6e664b] p-8  ">
                <li className="w-full border-b pb-4 border-zinc-700">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="absolute w-3 h-3 left-3 lg:left-8 "
                  >
                    <FaUserCircle className="text-[#97864f]" size={24} />
                  </div>
                  <span
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="mb-1 capitalize text-sm lg:text-md font-sans  text-zinc-300 "
                  >
                    {post?.name}
                  </span>

                  <p
                    data-aos="fade-up"
                    data-aos-duration="1300"
                    data-aos-easing="ease-in-out"
                    className="mb-4 p-2 text-sm leading-relaxed lg:text-md  text-zinc-300 "
                  >
                    {post?.comments}
                  </p>

                  <small
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="text-zinc-500 p-2"
                  >
                    {post?.date}
                  </small>
                </li>

                {!post?.reply ? (
                  <span className="text-sm italic text-zinc-500">
                    Belum ada balasan ...
                  </span>
                ) : (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="bg-black/20 w-full h-auto py-10 pt-4 px-4 relative"
                  >
                    <h1 className="mb-2  text-sm text-zinc-400">
                      Balasan dari Rahmadi & Dinda
                    </h1>
                    <div className="relative ">
                      <p className="text-zinc-500 text-sm">{post?.reply}</p>
                    </div>
                  </div>
                )}
              </ol>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Wish;
