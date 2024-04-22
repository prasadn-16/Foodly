import { LOGO_URL } from "../utils/constants"
import { useState } from 'react'
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">

        <img alt="logo" src={LOGO_URL} />
        <p className="logo-text">Prasad's</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {useOnlineStatus() ? "✅" : "❌"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
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