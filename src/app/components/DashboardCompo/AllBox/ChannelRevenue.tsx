import React from 'react'

const ChannelRevenue = () => {
  return (
    <div className='bg-white p-4 rounded-xl shadow-md mt-6 border-[1px] border-gray-200'>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-[20px] text-black font-bold">Channel Revenue</h2>
        <button className='text-[14px] font-normal px-3 py-1.5 border-[1px] rounded-[5px]  border-gray-400 hover:border-gray-800'>Monthly</button>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <h2 className="text-[30px] font-semibold text-black">3.4%</h2>
        <p className="text-[16px] font-normal text-gray-800">Growth Rate</p>
      </div>
      
      <div className="flex gap-5 items-center justify-between mt-4">
        <div className='w-full'>
          <div className='w-full h-[5px] bg-[#60A5FA] rounded-full'></div>
          <p className='text-[16px] text-gray-800'>28%</p>
        </div>
        <div className='w-full'>
          <div className='w-full h-[5px] bg-[#BBF7D0] rounded-full'></div>
          <p className='text-[16px] text-gray-800'>38%</p>
        </div>
        <div className='w-full'>
          <div className='w-full h-[5px] bg-[#FED7AA] rounded-full'></div>
          <p className='text-[16px] text-gray-800'>42%</p>
        </div>
      </div>
    </div>
  )
}

export default ChannelRevenue