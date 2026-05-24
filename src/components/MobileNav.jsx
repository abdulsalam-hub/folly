import {Link} from "react-router-dom";
const MoblileNav = ({openMenu, setOpenMenu}) => {
  return (
    <>
      <div
        className={`z-50  transition-all duration-300 ease-in-out p-3
          ${
            openMenu
              ? "h-full pointer-events-auto transition-all ease-in-out"
              : "h-0 hidden pointer-events-none transition-all linear ease-in-out"
          } `}
      >
        <div className="h-full fixed top-16.5  left-0 bg-slate-300 w-44 transition-transform duration-500 ease-in-out z-50 border border-amber-100 rounded-tr-xl">
          <div
            onClick={() => {
              setOpenMenu(false);
            }}
            className="font-mono text-3xl z-20 absolute right-3 text-black focus:outline-none cursor-pointer hover:bg-slate-300 hover:h-5 hover:w-5 hover:rounded-[50%] hover:p-2"
          >
            &times;
          </div>
          <nav className="flex flex-col relative top-7 justify-evenly font-[tahoma,cursive] gap-y-2.5 text-justify">
            <Link
              onClick={() => {
                setOpenMenu(!true);
              }}
              className={`text-[30px] hover:rounded-xl px-2  hover:bg-slate-300 rounded-xl text-slate-700 my-0.5 transition-colors duration-300 hover:text-puple-600
            ${
              openMenu
                ? "block translate-x-0.5 transition-opacity"
                : "hidden translate-x-0"
            }
            `}
              to="/"
            >
              Home
            </Link>
            <Link
              to="/products"
              onClick={() => {
                setOpenMenu(!true);
              }}
              className={`text-[30px] hover:rounded-xl px-2  hover:bg-slate-300 text-slate-700 my-0.5 transition-transform duration-300 hover:text-puple-600
            ${
              openMenu
                ? "block translate-x-0.5 transition-transform"
                : "hidden translate-x-0"
            }
            `}
            >
              Products
            </Link>
            <Link
              to="/about"
              onClick={() => {
                setOpenMenu(!true);
              }}
              className={`text-[30px] hover:rounded-xl px-2   hover:bg-slate-300 text-slate-700 my-0.5 transition-transform duration-300 hover:text-puple-600
            ${
              openMenu
                ? "opacity-100 translate-x-0.5 transition-transform"
                : " opacity-0 hidden translate-x-0"
            }
            `}
            >
              About
            </Link>
      
            <Link
              to="/contact"
              onClick={() => {
                setOpenMenu(!true);
              }}
              className={`text-[30px] hover:rounded-xl px-2  hover:w-full hover:bg-slate-300 text-slate-700 my-0.5 transition-transform duration-300 hover:text-puple-600
            ${
              openMenu
                ? "block translate-x-1 transition-transform"
                : "hidden translate-x-0 transition-all "
            }
            `}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
export default MoblileNav;
