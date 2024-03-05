import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import {BsBag} from "react-icons/bs"
import { Link } from "react-router-dom";
import Logo from '../images/logo.svg';

function Header(){
    const [isActive,setIsActive]=useState(false);
    const {isOpen,setIsOpen} = useContext(SidebarContext);
    const {itemAmount} = useContext(CartContext);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY > 60 ? setIsActive(true):setIsActive(false);
        });
    })
    return(
        <header className={`${isActive ? 'bg-white py-4 shadow-md':'bg-none py-6'} fixed w-full z-10 duration-300 transition-all`}>
            <div className="container flex mx-auto items-center justify-between h-full">
                {/* Logo */}
                <Link to={'/'}>
                    <div>
                        <img className="w-[40px]" src={Logo} alt=""/>
                    </div>
                </Link>
                {/* Cart */}
                <div 
                className="cursor-pointer flex relative max-w-[50px]" 
                onClick={()=>{setIsOpen(!isOpen)}}>
                    <BsBag className="text-2xl" />
                    <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px]
                    h-[18px] flex justify-center items-center rounded-full text-white">
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;