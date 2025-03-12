import { Button } from 'antd';



const Department = () => {
  return (
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
  )
}

export default Department;