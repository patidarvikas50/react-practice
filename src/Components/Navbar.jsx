import React from 'react'
import Expence from './Expence'


const Navbar = () => {
  return (
    
       <div className="relative flex-col grid w-screen h-screen bg-green-300 m-auto">
      
      <div className="w-full h-[70px] bg-green-600 rounded top-0">head</div>
    
    <div className=" flex h- [calc(100vh-100px)] w-full bg-gray-400">

      <div className='h-full w- [370px] bg-orange-400'>sidebar</div>

      <div className='flex-1 p-4 overflow-auto bg-green-400 border-separate'>
      <Expence/>
      <button className='inline-block bg-black text-white rounded w-10 h-10 hover:bg-blue-500'>clk</button>

      </div>
    </div>
    </div>
  
  )
}

export default Navbar
