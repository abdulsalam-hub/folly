

import Footer from "../components/Footer.jsx";
import NavBar from "./NavBar.jsx";

const Contact=() =>
{
  const notify=Notification.requestPermission().then((permission) =>
  {
    if (permission === "granted") {
      return new Notification("Folly ventures", {
        body: "your request is been submitted.",
        icon: "public/th.jpg"
      });
    } else {
      return;
    }
  }
  
  ).finally(() =>
  {
window.onclick(()=>window.location.pathname='/src/pages/Contact.jsx')
  })
  const handleCare=() =>
  {
    alert(`your request is been set successfully ! ,
    will  give feedback soon.`);
  notify()
  }
  return (
    <>
      <NavBar />
      <div className="py-20 px-2 text-center items-center flex flex-col justify-center ">
        <h1 className=" text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-purple-500 leading-normal ">
          contact us
        </h1>
        <p className="text-sm font-light font-mono">
          want to partner with us more !, notify us .feel free to tell us
          improve we hear you .{" "}
        </p>
        <fieldset className=" m-auto md:px-20 rounded-xl border border-amber-300">
          {" "}
          <legend className="text-purple-300 font-semibold">request</legend>
          <form action="" onSubmit={handleCare} className="m-auto px-3">
            <p className="text-2xl text-center text-amber-500  font-light m-auto md:font-bold md:underline-none">
              customer care
            </p>
            <label
              htmlFor="client-name"
              className="block capitalize font-medium font-mono"
            >
              client Name:
            </label>
            <input
              id="client-nam"
              type="text"
              placeholder="your name"
              required
              className="outline-none border rounded  indent-3 w-full h-10 focus:shadow-xl transition-all duration-500 ease-in-out"
            />
            <label
              htmlFor="number"
              className="block capitalize font-medium font-mono"
            >
              client No:
            </label>
            <input
              type="tel"
              placeholder="your Number"
              required
              className="outline-none border rounded  indent-3 w-full h-10 focus:shadow-xl transition-all duration-500 ease-in-out"
            />
            <label
              htmlFor="email"
              className="block capitalize font-medium font-mono"
            >
              client e-mail:
            </label>
            <input
              type="email"
              placeholder="your enail"
              required
              className="outline-none border rounded  indent-3 w-full h-10 focus:shadow-xl transition-all duration-500 ease-in-out"
            />
            <textarea
              name=""
              id=""
              cols={2}
              placeholder="tell your message..."
              required
              className="outline-none border mt-4 rounded  indent-5 p-3 w-full  focus:shadow-xl transition-all duration-500 ease-in-out"
            ></textarea>
            <button
              onClick={handleCare}
              type="submit"
              className="w-full my-2 md:py-3 md:text-2xl bg-purple-400 rounded-xl items-center py-1 shadow-xl transition-all duration-500 ease-in-out font-semibold text-xl"
            >
              send
            </button>
          </form>
        </fieldset>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
