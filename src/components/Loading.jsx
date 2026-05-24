//import {useEffect, useState} from "react";
import "../index.css";
const Loading=() =>
{


    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 place-items-center w-full h-screen items-center mx-auto py-10">
          <div className="self-center mt-10 shimmer">
            <div className="h-[50%] w-full bg-gray-300 rounded -z-50"></div>
            <div className="h-3 w-full bg-gray-300 rounded-xl my-3.5"></div>

            <div className="h-3 w-full bg-gray-300 rounded-xl my-3.5"></div>
            <div className="h-3 w-full bg-gray-300 rounded-xl my-3.5"></div>
            <div className="h-7 w-30 bg-[#b9b9b9]rounded mx-auto self-center"></div>
          </div>
          <div className="self-center mt-5 shimmer">
            <div className="h-[50%] w-full bg-gray-300 rounded"></div>
            <div className="h-3 w-full bg-gray-300 rounded-xl my-3.5"></div>

            <div className="h-3 w-full bg-gray-300 rounded-xl my-3.5"></div>
            <div className="h-3 w-full bg-gray-300 rounded-xl my-3.5"></div>
            <div className="h-7 w-30 bg-[#b9b9b9] rounded mx-auto self-center"></div>
          </div>
          <div className="self-center mt-5 shimmer">
            <div className="h-[50%] w-full bg-gray-300  rounded"></div>
            <div className="h-3 w-full bg-gray-300 rounded-xl my-3.5"></div>

            <div className="h-3 w-full bg-gray-300 rounded-xl my-3.5"></div>
            <div className="h-3 w-full bg-gray-300 rounded-xl my-3.5"></div>
            <div className="h-7 w-30 bg-[#b9b9b9] rounded mx-auto self-center"></div>
          </div>
        </div>
      </>
    );
};
export default Loading