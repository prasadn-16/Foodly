import { LOGO_URL } from "../utils/constants"
import { useState, useEffect } from 'react'
const Header = () => {
  const [btnName, setBtnName] = useState("Login")
  useEffect(() => console.log("HEADER USE EFFECT CALLED"), [btnName])
  return (
    <div className="header">
      <div className="logo-container">
        <img alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
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