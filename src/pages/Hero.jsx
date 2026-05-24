import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Stripes from "../components/Stripes";
import   yel from '../assets/productImages/yelback.jpg'
const Hero = () => {
  return (
    <>
      <NavBar />
      <section
        className="h-screen w-full backdrop-blur-xl flex items-center  bg-no-repeat object-center md:object-contain md:bg-top-right  bg-cover  bg-[url(assets/productImages/track.jpeg)] md:bg-[url(assets/productImages/yelback.jpg)]"
        style={{
          backgroundImage: yel
        }}
      >
        <div className="">
          <h1 className="ml-3 md:mx-auto  md:text-center font-extrabold text-[min(10vw,48px)] bg-linear-to-r from-purple-700 to-orange-500 bg-clip-text text-transparent  md:max-w-[800px] ">
            A best place to shop your fashion at comfort.
          </h1>
          <div className="flex justify-around gap-x-10 mt-10">
            <button className="hover:shadow-[0_3px_8px_rgba(255,0,255,0.2)] hover:bg-transparent hover:text-amber-300 capitalize font-bold h-12 w-25 rounded-[50px] border-b-purple-800 hover:-bg-transparent  text-white bg-amber-500">
              <Link to="/products"> shop now</Link>
            </button>
            <button className="hover:shadow-[0_2px_8px_4px_rgba(0,255,255,0.3)] h-12 w-25 border-b-2 rounded-[50px] border-purple-800 hover:bg-purple-400 hover:font-bold text-black  border font-black">
              <Link to="/cart">Cart</Link>
            </button>
          </div>
        </div>
        <div className="z-50 top- relative ">
          {" "}
          <Stripes />
        </div>
      </section>
    </>
  );
};
export default Hero;
