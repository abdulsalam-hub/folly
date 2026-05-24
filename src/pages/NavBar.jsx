import MoblileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import { useState } from "react";
function NavBar()
{
    const [openMenu,setOpenMenu]=useState(false)
    return (
      <>
        <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <MoblileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </>
    );
}
export default NavBar