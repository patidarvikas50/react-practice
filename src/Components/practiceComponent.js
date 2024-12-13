import React from 'react'

const PracticeComponent = () => {
  return (
   
        <div className= "grid flex justify-center p-4  mt-5 h-full">
      <h1 className="text-center text-2xl font-bold text-white hover:text-blue-400">Hello, Tailwind CSS!</h1>
      <button className= "bg-blue-500 hover:bg-blue-800 hover:text-black text-white font-bold py-2 px-12 rounded mt-8 inline-block">Button</button>
      <button className= "bg-orange-500 hover:bg-white -800 hover:text-black text-white font-bold py-2 px-12 rounded mt-8 inline-block ">Button</button>
      <button className= "bg-red-500  text-white font-bold py-2 px-12 rounded mt-8 inline-block hover:bg-cyan-800">Button</button>
    </div>
    
  )
}

export default PracticeComponent
