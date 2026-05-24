import SideBar from "../components/SideBar";
import Header from "../components/Header";
import {useState} from "react";
const DashBoard = () => {
  const [sideCollapsed, setSideCollapsed] = useState(false);
  const [currentPage, setcurrentPage] = useState("dashboard");
  return (
    <>
      <div
        className="min-h-screen  bd-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark-:via-slate-900 dark:to-slate-900 
      transition-all duration-500"
      >
        <div className="flex h-screen overflow-hidden">
          <SideBar
            collapsed={sideCollapsed}
            ontoggle={() => setSideCollapsed(!sideCollapsed)}
            currentPage={currentPage}
            onPageChange={setcurrentPage}
          />
          <div className="flex-1 flex-col overflow-hidden">
            <Header
              sideCollapsed={sideCollapsed}
              toggle={() => setSideCollapsed(!sideCollapsed)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
