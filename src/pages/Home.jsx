
import Popup from "../components/Popup";
import NavBar from "./NavBar.jsx";
import {useState,useEffect} from "react";
import {Search} from "lucide-react";
import Loading from "../components/Loading.jsx";
import {Link,useNavigate} from "react-router-dom";
const Home = () => {
 const navigate=useNavigate()
  const [searchItem, setSearchItem] = useState("");
  const [load,setLoad]=useState(true);
  
    useEffect(() => {
     const time= setTimeout(() => {
        setLoad(false);
     },2000);
      
      return () =>
      {
        clearTimeout(time)
      }
    }, [load]);
  return (
    <>
      <NavBar />
      <section className="transition-transform duration-500 w-full h-full pt-5 bg-slate-200  md:bg-linear-to-r from-amber-200 to-purple-200">
        <div className="md:px-6 px-2 mt-20">
          <div className=" text-center">
            <h1 className="px-2 md:p-5  text-[clamp(1.5rem,2vw,2rem)]  bg-linear-to-r from-purple-500 to-amber-500 bg-clip-text text-transparent ">
              Stocked Product
            </h1>
            <div className="w-full sticky top-30   items-center flex justify-center  shadow-[0_3px_2px_1px_rgba(0,0,0,0.1)] my-2 transition-opacity duration-400">
              <Link to="/searchproduct">
                <form
                  onClick={(fv) => {
                    fv.preventDefault();
                    navigate("/searchproduct");
                  }}
                  aria-disabled
                  className="flex rounded-xl px-auto border h-10 w-80  hover:translate-y-0 hover:shadow-[0_2px_3px_2px_rgba(255,0,255,0.2)] "
                >
                  <Search className="h-8 w-8 self-center mx-auto text-slate-500 hover:text-purple-400" />
                  <input
                    type="search"
                    name="product"
                    value={searchItem}
                    id=""
                    onChange={(fv) => {
                      setSearchItem(() => {
                        fv.preventDefault();
                        navigate("/searchproduct");
                      });
                    }}
                    placeholder="search product here..."
                    className=" m-0  h-full w-full hover:translate-y-0.5 border-purple-400   focus:outline-none   indent-3"
                  />
                </form>
              </Link>
            </div>
          </div>
          {load && <Loading />}
          {!load && (
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full  md:px-10 md:gap-5 gap-x-3  
          -z-80 py-10 transition-opacity duration-500 ease-in-out"
            >
              <Popup />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Home;
