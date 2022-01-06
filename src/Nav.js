import React from "react";
import { Link, NavLink } from "react-router-dom";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home";
function Nav() {

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div class="md:flex-[0.5] flex-initial justify-center items-center">


                <div class="md:flex-[0.5] flex-initial justify-center items-center" id="navbarNav">
                    <ul class="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                        <li class="nav-item bg-[#ffffff] py-3 px-8 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                            {/* <a class="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a> */}
                            <NavLink class="nav-link active" aria-current="page" end  to={'/Home'}>Home</NavLink>
                            {/* <Link to={'/'}>Home</Link> */}
                           
                        </li>
                        <li class="nav-item bg-[#ffffff] py-3 px-8 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                            {/* <a class="nav-link" href="http://localhost:3000/sendtrans">SEND..ETHER</a> */}
                            <NavLink  class="nav-link active" aria-current="page" end  to={"/sendtrans"}>Features</NavLink>
                            {/* <Link to={'/'}>Home</Link> */}
                        </li>
                        <li class="nav-item bg-[#ffffff] py-3 px-8 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                            {/* <a class="nav-link" href="http://localhost:3000/walletcardether">WALLET..CONNECT</a> */}
                            <NavLink  class="nav-link active" aria-current="page" end to={"/walletcardether"}>Pricing</NavLink>
                            {/* <Link to={'/'}>Home</Link> */}
                        </li>
                        <li class="nav-item bg-[#ffffff] py-3 px-8 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] ">
                            {/* <a class="nav-link" href="http://localhost:3000/voting" tabindex="-1" aria-disabled="true">VOTING</a> */}
                            <NavLink class="nav-link active" aria-current="page" end  to={"/voting"} >Voting</NavLink>
                            {/* <Link to={'/'}>Home</Link> */}
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default Nav;