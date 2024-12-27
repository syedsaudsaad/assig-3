import React from 'react'
const Header = () => {
  return (
    <header className=" bg-gray-800 text-white p-5">
    <div className=" container mx-auto flex justify-between items-center">
            <h1 className="text-3xl  font-bold">SYED SAUD SAAD</h1>
         <nav>
            <ul className="flex space-x-6">
                <li><a href="/" className="text-red-600">HOME</a></li>
                <li><a href="#about" className="text-pink-500">About</a></li>
                <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
            </ul>
         </nav>
         </div>
        </header>
  )
};

export default Header;