"use client";

import { FaArrowUpRightFromSquare, FaBan } from "react-icons/fa6";

import { projects } from "@/data";
import { personalprojects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Some small things I&apos;ve{" "}
        <span className="text-purple">built before,</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24   gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              if (item.link) window.open(item.link, "_blank");
            }}
            className={`sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] ${
              item.link ? "cursor-pointer" : "cursor-default"
            }`}
          >
            <PinContainer title="ZethDev">
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full black-gradient lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  {item.link ? (
                    <>
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaArrowUpRightFromSquare
                        className="ms-3"
                        color="#CBACF9"
                      />
                    </>
                  ) : (
                    <>
                      <p className="flex lg:text-xl md:text-xs text-sm text-gray-400">
                        Restricted Access
                      </p>
                      <FaBan className="ms-3" color="#A1A1AA" />{" "}
                      {/* Tailwind's gray-400 */}
                    </>
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      <div className="py-20">
        <h1 className="heading">
          and bits of <span className="text-purple">freelance/personal</span>{" "}
          projects I&apos;ve built.
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24   gap-y-8 mt-10">
          {personalprojects.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (item.link) window.open(item.link, "_blank");
              }}
              className={`sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] ${
                item.link ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <PinContainer title="ZethDev">
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full black-gradient lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    {item.link ? (
                      <>
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                          Check Live Site
                        </p>
                        <FaArrowUpRightFromSquare
                          className="ms-3"
                          color="#CBACF9"
                        />
                      </>
                    ) : (
                      <>
                        <p className="flex lg:text-xl md:text-xs text-sm text-gray-400">
                          Restricted Access
                        </p>
                        <FaBan className="ms-3" color="#A1A1AA" />{" "}
                        {/* Tailwind's gray-400 */}
                      </>
                    )}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
