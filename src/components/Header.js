import { LOGO_URL } from "../utils/constants"
import { useState } from 'react'
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  return (
    <div className=" flex justify-between shadow-lg bg-[#A34343] px-3 text-white font-sans text-xl py-4">
      <div className="logo-container ml-4 hover:animate-pulse">

        <img className="" alt="logo" src={LOGO_URL} />
        <span class="mt-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span class="relative text-white">Prasad's</span>
        </span>
      </div>
      <div className="mr-5 flex items-center">
        <ul className="flex items-center gap-5">
          <li className="opacity-30 hover:opacity-100 cursor-pointer ">Online Status : {useOnlineStatus() ? "✅" : "❌"}</li>
          <li className="opacity-40 hover:opacity-100 hover:underline underline-offset-8 transition duration-700 hover:ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="opacity-50 hover:opacity-100 hover:underline underline-offset-8 transition duration-700 ease-in-out">
            <Link to="/about">About us</Link>
          </li>
          <li className="opacity-60 hover:opacity-100 hover:underline underline-offset-8 transition duration-700 ease-in-out">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="opacity-70 hover:opacity-100 hover:underline underline-offset-8 transition duration-700 ease-in-out">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="opacity-80 hover:opacity-100 cursor-pointer hover:underline underline-offset-8 transition duration-700 ease-in-out">Cart</li>
          <li className="opacity-90 hover:opacity-100 hover:underline underline-offset-8 transition duration-700 ease-in-out">
            <button onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }} className='login-btn'>
              {btnName}
            </button></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;