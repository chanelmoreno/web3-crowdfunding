import React from 'react'

const About = () => {
  return (
    <div>
      <h4 className="mt-[50px]  font-epilogue font-semibold text-white uppercase text-[18px]">About Us </h4>

      <div className='w-full my-[20px] flex justify-center items-center p-4 bg-[#808080] h-[120px] rounded-[10px]' >
        <div>
          <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]'>Our Guarantee ❤️ You will receive 100% of the raised amount </h4>
        </div>
      </div>

      <div className='w-[full] my-[50px] flex  items-center p-4 h-full rounded-[10px]' >
        <div className='w-1/5'>
          <h4 className="font-epilogue mr-[20px]  font-semibold text-[18px] text-white uppercase">What we do</h4>
        </div>
        <p className="mt-[4px] font-epilogue font-normal text-[18px] text-[#808191]">
          This website is a crowdfunding project that transacts using blockchain.
          <br />
          <br />
          You can create campaigns and donate to other campaigns, all in eth
        </p>
      </div >


      <div className='w-full my-[50px] flex  items-center p-4 h-full rounded-[10px]' >
        <div className='w-1/5'>
          <h4 className="font-epilogue  mr-[20px] font-semibold text-[18px] text-white uppercase">How to Start? </h4>
        </div>
        <p className="mt-[4px] font-epilogue font-normal text-[18px] text-[#808191]">
          Love us already? That's great!
          <br />
          <br />
          To start, all you need is a metamask account with a private key and voila!
        </p>
      </div >

      <div className='justfy-content text-center text-[#808191] text-white'>-------------------------------------------------------</div>


      <div className='w-full my-[50px] flex  items-center p-4 h-full rounded-[10px]' >
        <div className='w-1/5'>
          <h4 className="font-epilogue  mr-[20px] font-semibold text-[18px] text-white uppercase">Future Iterations</h4>
        </div>
        <p className="mt-[4px] font-epilogue font-normal text-[18px] text-[#808191]">
          We love to iterate! Here are some of the items to watch out for:
          <br />
          <br />
          💡 Able to activate/deactivate campaigns <br />
          💡 Able to comment on campaigns <br />
          💡 Paginations for donators 10+ on campaigns <br />
          💡 Search Campaign functionality <br />
        </p>
      </div >


    </div >
  )
}

export default About