import { LOGO_URL } from "../Utils/constants";
import { useEffect, useState } from "react";
function Header() {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  
  return (
    <div className="flex justify-between items-center border border-black shadow-xl">
      <div className="logo_container  ">
        <img className="logo w-24" src={LOGO_URL} alt="logo"></img>
      </div>
      <div className="pr-3.5 flex">
        <ul className="flex gap-10 m-5 text-lg ">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button
          className="m-3 p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
          onClick={() => {
            btnNameReact === "Login"
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
          }}
        >
          {btnNameReact}
        </button>
      </div>
    </div>
  );
}
export default Header;
