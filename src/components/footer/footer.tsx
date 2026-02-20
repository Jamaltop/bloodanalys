import React from 'react'

const Footer = () => {
  return (
    <footer className={`w-full bg-black mt-10`}>
      <div className={`container py-6 flex gap-4 flex-col items-center justify-center`}>
        <p className={`text-[#4f4f4f] font-extrabold whitespace-nowrap text-[14px]`}>© 2026 Blood Analyzer. All rights reserved.</p>
       <div className={`flex items-center justify-between`}>
         <p className={`text-white font-extrabold whitespace-nowrap text-[13px] ml-4`}>Designed by Derek Miller</p>
         <p className={`text-white font-extrabold whitespace-nowrap text-[13px] ml-4`}>Developed by Camal Aliyev</p>
       </div>
      </div>
    </footer>
    
  )
}

export default Footer