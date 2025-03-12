/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChevronDown } from "lucide-react";


const HeaderDropdownMenu = (
    {openMenu,setOpenMenu}
    :{ openMenu:null|string;setOpenMenu:any }
) => {
    const toggleMenu = (menu: string) => {
        setOpenMenu(openMenu === menu ? null : menu);
      };
  return (
    <div className="flex border border-gray-300 rounded-md text-purple-600 divide-x">
        <button 
            className={`flex-1 flex items-center gap-3 px-4 border-gray-300 border-r-0 ${
                openMenu === "department" ? "text-purple-600" : "text-black"
            }`} 
            onClick={() => toggleMenu("department")}
            >
            დეპარტამენტი <ChevronDown size={16} />
        </button>

        <button 
            className={`flex-1 flex items-center gap-3 px-4 border-gray-300 border-r-0 ${
                openMenu === "priority" ? "text-purple-600" : "text-black"
            }`} 
            onClick={() => toggleMenu("priority")}
            >
            პრიორიტეტი <ChevronDown size={16} />
        </button>

        <button 
            className={`flex-1 flex items-center gap-3 px-4 py-2 ${
                openMenu === "employee" ? "text-purple-600" : "text-black"
            }`} 
            onClick={() => toggleMenu("employee")}
            >
            თანამშრომელი <ChevronDown size={16} />
        </button>
        
      </div>
  )
}

export default HeaderDropdownMenu