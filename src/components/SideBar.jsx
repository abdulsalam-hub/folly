import {
  ArrowLeftIcon,
  ShoppingBag,
  LayoutDashboard,
  BarChart3,
  Users,
  Package,
  CreditCard,
  FileText,
  Settings,
  Calendar,
  MessageSquare,
  ChevronDown,
  ChevronDownCircle
} from "lucide-react";
import {useState} from "react";
import {Link} from "react-router-dom";

const SideBar = ({onPageChange, collapsed, currentPage}) => {
  const [open, setOpen] = useState(new Set(["analytics"]));
  const toggle = (itemid) => {
    const newOpen = new Set(open);
    if (newOpen.has(itemid)) {
      newOpen.delete(itemid);
    } else {
      newOpen.add(itemid);
    }
    setOpen(newOpen);
  };
  const sideItems = [
    {
      id: "dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      active: true,
      badge: "New"
    },
    {
      id: "analytics",
      icon: BarChart3,
      label: "Analytics",
      submenu: [
        {
          id: "overview",
          label: "Overview"
        },
        {
          id: "reports",
          label: "Reports"
        },
        {
          id: "insights",
          label: "Insights"
        }
      ]
    },
    {
      id: "User",
      icon: Users,
      label: "User",
      count: 10,
      badge: "New",
      submenu: [
        {
          id: "all-products",
          label: "All-Products"
        },
        {
          id: "role",
          label: "Type"
        }
      ]
    },
    {
      id: "e-commerce",
      icon: ShoppingBag,
      label: "E-commerce",
      submenu: [
        {
          id: "products",
          label: "Products"
        },
        {
          id: "orders",
          label: "Orders"
        },
        {
          id: "products",
          label: "Products"
        }
      ]
    },
    {
      id: "invetory",
      icon: Package,
      label: "Inventory",
      count: "3"
    },
    {
      id: "transactions",
      icon: CreditCard,
      label: "Transactions"
    },
    {
      id: "messages",
      icon: MessageSquare,
      label: "Message",

      badge: "5"
    },
    {
      id: "calendar",
      icon: Calendar,
      label: "Calendar"
    },
    {
      id: "reports",
      icon: FileText,
      label: "Reports"
    },

    {
      id: "settings",
      icon: Settings,
      label: "Settings"
    }
  ];
  return (
    <>
      <div
        className={`${
          !collapsed ? 'w-0' : "w-20"
        }  w-auto md:py-2 transition duration-75 ease-in-out bg-white/50 dark:bg-slate-400/80
   backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10
   `}
      >
        <Link
          to="/products"
          className="text-slate-400 dark:text-slate-100 font-bold py-1/2 ml-5 text-6xl"
        >
          <ArrowLeftIcon className="w-6 h-6 hover:bg-slate-600 dark:hover:bg-slate-500 rounded-xl" />
        </Link>

        {/*logo */}
        <div className="p-1 border-b  border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center px-2 space-x-6">
            <div
              className="w-10 h-10 bg-linear-to-r from-amber-600 to-purple-600 rounded-xl
             flex items-center justify-center shadow-lg"
            >
              <ShoppingBag className="w-6 h-6 text-purple-900" />
            </div>
            {/*conditional rendering */}

            {!collapsed && (
              <div className="">
                <h1 className="text-xl pr-2 font-bold text-slate-800 dark:text-white">
                  folly
                </h1>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-600">
                  main panel
                </p>
              </div>
            )}
          </div>
        </div>
        {/*Navigation bar ,wil display flex in dinamic menus*/}
        <nav className="flex-1 px-1 md:px-3 lg:py-1 md:space-y-1.5 sm:py-10 space-y-3 py-2 md:py-5 lg:overflow-y-scroll">
          {sideItems.map((item) => {
            return (
              <div key={item.id} className=" p-auto lg:my-1 md:my-5">
                <button
                  className={`w-full flex items-center justify-between py-1.5 
                     md:px-2 p-auto rounded-xl transition-all duration-200 ${
                    currentPage === item.id || item.active
                      ? "bg-linear-to-r from-purple-300 to-amber-500 text-white shadow-lg shadow-slate-400/20"
                      : "text-slate-700 ddark:text-slate-400  hover:bg-slate-400 dark:bg-slate-200"
                  }`}
                  onClick={() => {
                    if (item.submenu) {
                      toggle(item.id);
                    } else {
                      onPageChange(item.id);
                    }
                  }}
                >
                  <div className="flex items-center space-x-3 space-y-2 md:space-y-0">
                    <item.icon className="w-5 h-5" />
                    {/**condition redering */}
                    <>
                      {!collapsed && (
                        <span className="font-medium ml-2">{item.label}</span>
                      )}
                      {item.badge && (
                        <span className="px-2 py-1 md:py-1 text-xs bg-amber-400
                         text-slate-200 rounded-full">
                          {item.badge}
                        </span>
                      )}

                      {item.count && (
                        <span className="px-2 py-1 text-xs bg-purple-300 dark:bg-slate-100
                         text-slate-500 dark:text-slate-300 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </>
                  </div>
                  {!collapsed && item.submenu && (
                    <ChevronDown
                      className={`'w-4 h-4 transition-transform' `}
                    />
                  )}
                </button>
                {/*submenu content */}

                {!collapsed && item.submenu && open.has(item.id) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submenu.map((subItem) => {
                      return (
                        <button key={subItem.id}
                          className="text-left w-full py-1 md:p-2 text-slate-500
                         dark:text-slate-600 border border-l-0 border-t-0
                          border-r-0 rounded hover:bg-slate-500"
                        >
                          {subItem.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        {/*users profile */}
        {!collapsed && (
          <div className="p-1 sm:p-0 md:p-4 border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <img
                src="th.jpg"
                alt="user"
                className="w-10 h-10 rounded-full ring-2 ring-blue-500"
              />
              <div className="flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 dark:text-white truncate">
                    jhon doe
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-600 truncate ">
                    Administrator
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default SideBar;
