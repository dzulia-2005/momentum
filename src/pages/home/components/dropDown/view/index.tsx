import { useState } from "react";
import HeaderDropdownMenu from "../components/header/header";
import Department from "../components/downMenu/department";
import Priority from "../components/downMenu/priority";
import Employee from "../components/downMenu/employee";



export default function FilterButtons() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);


  return (
    <div className="w-[688px] pt-[40px]">

      <HeaderDropdownMenu openMenu={openMenu} setOpenMenu={setOpenMenu}/>  

      {openMenu === "department" && (
        <Department/>
      )}

      {openMenu === "priority" && (
         <Priority/>
      )}

      {openMenu === "employee" && (
       <Employee/>
      )}
    </div>
  );
}
