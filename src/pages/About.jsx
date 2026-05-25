import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import { User2Icon, } from "lucide-react";
const About = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20 m-auto transition-all duration-500 ease-in-out">
        <h1 className=" text-center font-bold text-2xl text-transparent bg-clip-text bg-linear-to-r p-2 from-purple-400 to-amber-500 shadow-sm">
          About us
        </h1>
        <div className="capitalize px-10 text-xl font-medium  py-10 ">
          <p>
            folly we are committed to deliver quality ,affordable clothings to
            all our dearest customers . we maintain better relationship with our
            customers of large-bulk sales.
          </p>
          <p>
            at Folly we are passionate about what we do because it driven by
            innovative design, desired to help us make our impact of uniqueness
            in customer clothing.
          </p>
        </div>
      </div>
      <div className="py-10 m-2">
        <div className="text-center m-auto p-2">
          <h2 className="text-2xl font-bold font-stretch-95% ">our clients</h2>
          <span className="p-1 text-xs text-shadow-xs">What they say ?</span>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center mt-10 gap-y-2.5 ">
          <div className="w-[180px] md:h-[250px] h-180px border border-purple-400 px-2 py-3 items-center text-center">
            <button className="ring-2 ring-amber-300 p-1 rounded-full">
              <User2Icon className="h-6 w-6 text-center hover:fill-purple-300" />
            </button>
            <p className="text-justify text-sx font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
              impedit!
            </p>
            <span className="font-[cursive,consolas] text-purple-400 text-center">
              {" "}
              MISS ola
            </span>
          </div>
          <div className="w-[180px] md:h-[250px] h-180px border border-purple-400 px-2 py-3 p-2 items-center text-center">
            <button className="ring-2 ring-amber-300 p-1 rounded-full ">
              <User2Icon className="h-6 w-6 text-center hover:fill-purple-300" />
            </button>
            <p className="text-justify text-sx font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
              impedit!
            </p>
            <span className="font-[cursive,consolas] text-purple-400 text-center">
              {" "}
              MISS ola
            </span>
          </div>
          <div className="w-[180px] md:h-[250px] h-180px border px-2 py-3 border-purple-400 p-2 items-center text-center">
            <button className="ring-2 ring-amber-300 p-1 rounded-full ">
              <User2Icon className="h-6 w-6 text-center hover:fill-purple-300" />
            </button>
            <p className="text-justify text-sx font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
              impedit!
            </p>
            <span className="font-[cursive,consolas] text-purple-400 text-center">
              {" "}
              MISS ola
            </span>
          </div>
          <div className="w-[180px] md:h-[250px] h-[180px] border border-purple-400 px-2 py-3 items-center text-center">
            <button className="ring-2 ring-amber-300 p-1 rounded-full ">
              <User2Icon className="h-6 w-6 text-center hover:fill-purple-300" />
            </button>
            <p className="text-justify text-sx font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
              impedit!
            </p>
            <span className="font-[cursive,consolas] text-purple-400 text-center">
              {" "}
              MISS ola
            </span>
          </div>
        </div>
      </div>
      <div className=" w-full p-2 md:p-5 items-center text-center sticky bottom-0 right-0 text-sm bg-slate-200 border-t">
        <span className="font-semibold m-auto">
          partner with us for bulk product purchase :{" "}
          <span className="text-xm font-bold block md:inline">+234 8021289677</span>{" "}
        </span>
        <button className="md:p-3 p-2 text-center items-center border-none rounded ml-10 hover:bg-amber-600 hover:shadow-xl  bg-amber-400 text-white cursor-pointer transition-all">
          <Link
            to="/contact"
            className="hover:font-medium hover:translate-1 hover:scale-120"
          >
            get Started
          </Link>
        </button>
      </div>
    </>
  );
};
export default About;
