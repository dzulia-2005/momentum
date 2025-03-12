




const CardHeader = () => {

  return (
    <div className="flex items-center justify-between">

        <div className='flex items-center justify-center text-[#ffff] text-[20px] bg-[#F7BC30] w-[381px] h-[54px] rounded-xl'>
            დასაწყები
        </div>

        <div className='flex items-center justify-center text-[#ffff] text-[20px] bg-[#FB5607] w-[381px] h-[54px] rounded-xl'>
            პროგრესში
        </div>

        <div className='flex items-center justify-center text-[#ffff] text-[20px] bg-[#FF006E] w-[381px] h-[54px] rounded-xl'>
            მზად ტესტირებისთვის
        </div>

        <div className='flex items-center justify-center text-[#ffff] text-[20px] bg-[#3A86FF] w-[381px] h-[54px] rounded-xl'>
             დასრულებული
        </div>

    </div>
  )
}

export default CardHeader