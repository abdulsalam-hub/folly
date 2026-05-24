const Register = () => {
  return (
    <>
      <div className="w-full flex relative place-items-center bg-[rgba(234,193,237,0.77)] items-center justify-center ">
        <div className=" absolute top-20 rounded-sm">
          <h1 className="text-3xl font-extrabold font-serif ustify-center text-center">
            Welcome to folly shop
          </h1>
          <p className="font-thin text-sm ustify-center text-center">
            please sign up to proceed...
          </p>
          <form
            action=""
            method="post"
            className="flex flex-col justify-around gap-x-10  translate-y-5 m-40"
            autoComplete="on"
            autoCapitalize="on"
            autoCorrect="on"
          >
            <label
              htmlFor="name"
              className="text-left  space-x-1.5 font-bold font-arial"
            >
              {" "}
              Name :
            </label>
            <input
              type="text"
              placeholder="enter your name "
              required
              className="border w-70 h-10 focus:shadow-[2px_1px_2px_2px_rgba(255,0,255,0.3)] hover:bg-transparent outline-none block translate-y-2.5 rounded indent-1  border-purple-400 placeholder:transition-colors"
            />
            <label
              htmlFor="Email"
              className="text-left  translate-y-2.5 space-x-1.5 font-bold font-arial"
            >
              {" "}
              E-mail:
            </label>
            <input
              type="email"
              placeholder="enter your mail"
              required
              className="border block   w-70 h-10 focus:shadow-[2px_1px_2px_2px_rgba(255,0,255,0.3)] hover:bg-transparent outline-none translate-y-2.5 rounded indent-1 border-purple-400 placeholder:transition-colors"
            />
            <label
              htmlFor="password"
              className="text-left translate-y-2.5 space-x-1.5 font-bold font-arial"
            >
              {" "}
              Password :
            </label>
            <input
              type="password"
              placeholder="enter your name "
              required
              maxLength={6}
              className="border  w-70 h-10 focus:shadow-[2px_1px_2px_2px_rgba(255,0,255,0.3)] hover:bg-transparent outline-none block translate-y-2.5 rounded indent-1 border-purple-400 placeholder:transition-colors"
            />
            <div className="translate-y-3.5 translate-x-4.5 flex">
              <input
                type="checkbox"
                name=""
                id=""
                required
                className="border-purple-600  border-2 items-center text-center gap-10 fill-purple-500 p-2 text-2xl"
              />
              <span className="items-center translate-x-3.5 text-center ">
                remind me
              </span>
            </div>
            <label
              htmlFor="number"
              className="text-left translate-y-2.5 space-x-1.5 font-bold font-arial"
            >
              {" "}
              phone no. :
            </label>
            <input
              type="number"
              placeholder="enter your number "
              required
              maxLength={13}
              className="border  w-70 h-10 focus:shadow-[2px_1px_2px_2px_rgba(255,0,255,0.3)] hover:bg-transparent outline-none block translate-y-3.5 rounded indent-1 border-purple-400 placeholder:transition-colors"
            />
            <label
              htmlFor="address"
              className="text-left translate-y-3.5 space-x-1.5 font-bold font-arial"
            >
              {" "}
              Address :
            </label>
            <input
              autoComplete="on"
              type="text"
              placeholder="your location"
              className="border block  w-70 h-10 focus:shadow-[2px_1px_2px_2px_rgba(255,0,255,0.3)] hover:bg-transparent outline-none translate-y-3.5 rounded indent-1 border-purple-400 placeholder:transition-colors"
            />
            <button className=" w-70 h-10 hover:shadow-[1px_1px_2px_2px_rgba(255,0,255,0.3)] hover:bg-transparent outline-none translate-y-2.5  text-white bg-linear-30 from-purple-500 to-amber-500 rounded-sm ">
              sign up
            </button>
            <p className="text-justify translate-y-2 translate-x-5.5 ">
              already sign up login here{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Register;
