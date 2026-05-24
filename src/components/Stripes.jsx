import {StarIcon} from "lucide-react";
const Stripes = () => {
  return (
    <>
      <div
        className=" bg-purple-400 w-full flex justify-around gap-12 md:gap-13 
      transition-transform rotate-360 -translate-y-2 md:translate-0 md:-rotate-8 z-2 absolute
       right-1 rounded overflow-hidden capitalize text-[10px] md:text-xl items-center"
      >
        <li className="font-bold list-none flex py-1 text-slate-300">
          <StarIcon width={20} height={30} className=" text-amber-400" />{" "}
          Hottest Fashion{" "}
        </li>
        <li className="font-bold list-none flex py-1 gap-x-1.5 text-slate-300">
          <StarIcon width={18} height={25} className=" text-amber-400" /> unique
          designs
        </li>
        <li className="font-bold list-none flex py-1 gap-x-1.5 text-slate-300">
          <StarIcon width={18} height={25} className=" text-amber-400" />
          Latest style
        </li>
        <li className="font-bold list-none  flex py-1 gap-x-1.5 text-slate-300">
          <StarIcon width={18} height={25} className=" text-amber-400" />
          best quality
        </li>
        <li className="font-bold list-none flex py-1 gap-x-1.5 text-slate-300">
          {" "}
          <StarIcon width={18} height={25} className=" text-amber-400" />
          shop it
        </li>
      </div>
      {/* bg-purple-400 w-full flex justify-around gap-3 md:gap-5 transition-transform -rotate-8 z-2 absolute right-1 rounded overflow-hidden capitalize text-[8px] md:text-xl */}
      <div className="bg-amber-400 w-full flex justify-around gap-8 md:gap-12 transition-transform rotate-360
       translate-y-12 md:translate-0 md:rotate-8 rounded shadow-2xl absolute -left-1.5
        overflow-hidden capitalize text-[10px] md:text-xl items-center">
        <li className="font-bold list-none flex py-1 gap-x-1.5 text-slate-200">
          <StarIcon width={18} height={25} className=" text-purple-400" />{" "}
          Hottest Fashion{" "}
        </li>
        <li className="font-bold list-none flex py-1 gap-x-1.5 text-slate-200">
          <StarIcon width={18} height={25} className=" text-purple-400" /> unique
          designs
        </li>
        <li className="font-bold list-none  flex py-1 gap-x-1.5 text-slate-200">
          <StarIcon width={18} height={25} className=" text-purple-400" />{" "}
          Latest style
        </li>
        <li className="font-bold list-none  flex py-1 gap-x-1.5 text-slate-200">
          <StarIcon width={18} height={25} className=" text-purple-400" /> best
          quality
        </li>
        <li className="font-bold list-none flex py-1 gap-x-1.5 text-slate-200">
          {" "}
          <StarIcon className="w-5 h-5 text-purple-400" /> shop it
        </li>
      </div>
    </>
  );
};
export default Stripes;
