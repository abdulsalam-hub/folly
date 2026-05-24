import {CircleIcon} from "lucide-react";
import int from "../assets/in.png";
import face from "../assets/face.png";
import code3 from "../assets/code3.jpeg";
const Footer = () => {
  return (
    <>
      <div className="bg-blend-darken fixed bottom-0 right-0 bg-[rgba(0,0,0,0.7)] w-full items-center">
        <div className="text-justify flex justify-between text-neutral-200 border-b p-1 md:p-2">
          <h1 className="text-xl md:text-2xl items-center font-mono font-bold ,-auto">
            FOLLY VENTURES
          </h1>
          <div className="flex gap-x-5 md:gap-x-10 text-white items-center">
            <img
              src={face}
              alt="facebook"
              className="ring-2 md:ring-3 ring-amber-300 h-6 md:h-6 w-6 md:w-6  rounded-full p-1 hover:scale-110 bg-black"
            />
            <img
              src={int}
              alt="linkkedin"
              className="ring-3 ring-amber-300 h-6 md:h-6 w-6 md:w-6 rounded-full p-1 hover:scale-110 bg-black"
            />
            <img
              src={code3}
              alt="instagram"
              className="ring-3 ring-amber-300 h-6 md:h-6 w-6 md:w-6 rounded-full p-1 hover:scale-110 bg-black"
            />
          </div>
        </div>
        <p className="text-center capitalize md:text-sm text-sx p-1/2">
          {" "}
          copyright 2026 FOLLY All right reserved .
        </p>
      </div>
    </>
  );
};
export default Footer;
