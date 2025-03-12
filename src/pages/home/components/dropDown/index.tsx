import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from 'antd';



export default function FilterButtons() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  

  return (
    <div className="w-[688px] pt-[40px]">

      <div className="flex border border-gray-300 rounded-md text-purple-600 divide-x">
        <button 
            className={`flex-1 flex items-center justify-between px-4 border-gray-300 border-r-0 ${
                openMenu === "department" ? "text-purple-600" : "text-black"
            }`} 
            onClick={() => toggleMenu("department")}
            >
            დეპარტამენტი <ChevronDown size={16} />
        </button>

        <button 
            className={`flex-1 flex items-center justify-between px-4 border-gray-300 border-r-0 ${
                openMenu === "priority" ? "text-purple-600" : "text-black"
            }`} 
            onClick={() => toggleMenu("priority")}
            >
            პრიორიტეტი <ChevronDown size={16} />
        </button>

        <button 
            className={`flex-1 flex items-center justify-between px-4 py-2 ${
                openMenu === "employee" ? "text-purple-600" : "text-black"
            }`} 
            onClick={() => toggleMenu("employee")}
            >
            თანამშრომელი <ChevronDown size={16} />
        </button>
        
      </div>

      {openMenu === "department" && (
        <div className="border border-gray-300 rounded-md mt-1 px-5 pt-3 ">

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="w-[17px] h-[17px] border-[1px] border-[#8338EC] rounded-sm cursor-pointer appearance-none relative 
            before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center 
            before:text-transparent checked:before:text-[#8338EC] bg-white checked:bg-white"
          />
          <p className="text-[16px] font-normal rounded-md">მარკეტინგის დეპარტამენტი</p>
        </div>
          

         
           <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-[17px] h-[17px] border-[1px] border-[#8338EC] rounded-sm cursor-pointer appearance-none relative 
              before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center 
              before:text-transparent checked:before:text-[#8338EC] bg-white checked:bg-white"
            />
              <p className="text-[16px] font-normal rounded-sm"> დიზაინის დეპარტამენტი</p>
           </div>
         

         
           <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-[17px] h-[17px] border-[1px] border-[#8338EC] rounded-sm cursor-pointer appearance-none relative 
                before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center 
                before:text-transparent checked:before:text-[#8338EC] bg-white checked:bg-white"
              />
              <p className="text-[16px] font-normal rounded-sm"> ლოჯისტიკის დეპარტამენტი</p>
           </div>
        
          
           <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-[17px] h-[17px] border-[1px] border-[#8338EC] rounded-sm cursor-pointer appearance-none relative 
                before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center 
                before:text-transparent checked:before:text-[#8338EC] bg-white checked:bg-white"
              />
              <p className="text-[16px] font-normal rounded-sm"> IT დეპარტამენტი</p>
           </div>
           <div className=" flex justify-end py-5 px-5">
              <Button color="purple" variant="solid">
                    არჩევა
              </Button>
          </div>

        </div>
      )}

      

      {openMenu === "priority" && (
        <div className="border border-gray-300 rounded-md mt-1 px-5 pt-3">

          <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-[17px] h-[17px] border-[1px] border-[#8338EC] rounded-sm cursor-pointer appearance-none relative 
                before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center 
                before:text-transparent checked:before:text-[#8338EC] bg-white checked:bg-white"
              />
              <p className="py-1 cursor-pointer hover:bg-gray-100">დაბალი</p>
          </div>

          <div className="flex items-center gap-3">
              <input
                  type="checkbox"
                  className="w-[17px] h-[17px] border-[1px] border-[#8338EC] rounded-sm cursor-pointer appearance-none relative 
                  before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center 
                  before:text-transparent checked:before:text-[#8338EC] bg-white checked:bg-white"
                />
              <p className="py-1 cursor-pointer hover:bg-gray-100">საშუალო</p>
          </div>
         
         <div className="flex items-center gap-3">
            <input
                    type="checkbox"
                    className="w-[17px] h-[17px] border-[1px] border-[#8338EC] rounded-sm cursor-pointer appearance-none relative 
                    before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center 
                    before:text-transparent checked:before:text-[#8338EC] bg-white checked:bg-white"
                  />
              <p className="py-1 cursor-pointer hover:bg-gray-100">მაღალი</p>
         </div>

         <div className=" flex justify-end py-5 px-5">
              <Button color="purple" variant="solid">
                    არჩევა
              </Button>
          </div>

        </div>
      )}

      {openMenu === "employee" && (
        <div className="border border-gray-300 rounded-md mt-1 px-5 pt-3">

          <div className="flex items-center gap-3">
             <input
                type="checkbox"
                className="w-[17px] h-[17px] border-[1px] border-[#8338EC] rounded-sm cursor-pointer appearance-none relative 
                before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center 
                before:text-transparent checked:before:text-[#8338EC] bg-white checked:bg-white"
              />
            <p className="py-1 cursor-pointer hover:bg-gray-100">გიორგი</p>
          </div>

          <div className="flex items-center gap-3">
            <input
                  type="checkbox"
                  className="w-[17px] h-[17px] border-[1px] border-[#8338EC] rounded-sm cursor-pointer appearance-none relative 
                  before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center 
                  before:text-transparent checked:before:text-[#8338EC] bg-white checked:bg-white"
              />
             <p className="py-1 cursor-pointer hover:bg-gray-100">ნინო</p>
          </div>
          
         
          <div className="flex items-center gap-3">
            <input
                    type="checkbox"
                    className="w-[17px] h-[17px] border-[1px] border-[#8338EC] rounded-sm cursor-pointer appearance-none relative 
                    before:content-['✓'] before:absolute before:inset-0 before:flex before:items-center before:justify-center 
                    before:text-transparent checked:before:text-[#8338EC] bg-white checked:bg-white"
                />
             <p className="py-1 cursor-pointer hover:bg-gray-100">დათო</p>
          </div>

          <div className=" flex justify-end py-5 px-5">
              <Button color="purple" variant="solid">
                    არჩევა
              </Button>
          </div>
        </div>

      )}
    </div>
  );
}
