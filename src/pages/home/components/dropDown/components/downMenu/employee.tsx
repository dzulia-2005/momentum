import { Button } from "antd";

const Employee = () => {
  return (
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
  )
}

export default Employee;