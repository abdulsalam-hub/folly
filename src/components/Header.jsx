import {Bell, ChevronDownIcon, Filter, Menu, Plus, Search, SettingsIcon, Sun, SunMoon,} from "lucide-react";


const Header = ({collapsed, toggle}) => {
  return (
    <>
      <div
        className="bg-white/-80  dark:bg-slate-900/50 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700 px-6 py-4
       "
        onClick={() => toggle}
      >
        <div className="flex items-center justify-between">
          {/*left section */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden md:block">
              <h1 className="text-2xl font-black text-slate-800 dark:text-white">
                DashBoard
              </h1>
              <p className="">hi, Doe here is your deal today</p>
            </div>
          </div>
          {/*center */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                name=""
                id=""
                placeholder="Search your stuff..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border
                border-slate-200 dark:border-slate-700  rounded-xl text-slate-800 dark:text-white/10 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:border-transparent transition-all"
              />
              <button>
                <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600  dark:hover:text-slate-200" />
              </button>
            </div>
          </div>
          {/*right */}
          <div className="flex items-center space-x-3">
            {/*quick actions */}
            <button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-linear-to-r from-amber-200 to-purple-400 text-white rounded-xl hover:shadow-2xl transition-all">
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium">new</span>
              {/**toogle */}
            </button>
            <button className="p-2.5 text-slate-600 dark:text-slate hover:bg-slate-800 rounded-xl transition-colors ">
              <SunMoon className="w-5 h-5" />
            </button>
            <button className="relative p-2.5 rounded-xl text-slate-400 dark:text-slate-100 hover:bg-slate-800 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 w-5 h-5 bg-amber-600 text-white text-sx rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="text-slate-800 dark:text-slate-100 font-medium rounded-xl transition-colors hover:bg-slate-500 dark:hover:bg-slate-200">
              <SettingsIcon className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-800 transition-normal">
              <img
                src="th.jpg"
                alt=""
                className="w-8 h-8 rounded-full ring-2 ring-purple-400"
              />
              <div className="hidden md:block ">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-100 ">
                  Jhon Doe
                </p>
                <p className="text-xs text-slate-800 dark:text-slate-300 font-black">
                  Admin
                </p>
              </div>
            </div>
          </div>
          <ChevronDownIcon className="text-slate-600 dark:text-slate-200 space-x-2 transition-all " />
        </div>
      </div>
    </>
  );
};
export default Header;
