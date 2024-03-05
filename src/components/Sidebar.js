import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart,removeCart,itemAmount,totalPrice } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  w-full bg-white fixed top-0 h-full
      shadow-2xl md:w-[35vw] xl:w-[30vw] transition-all duration-300
      z-20 px-4 lg:px-[35px]`}
    >
      <div
        className="flex items-center justify-between
        py-6 border-b"
      >
        <div className="uppercase text-sm font-semibold"> Shopping Bag ({itemAmount})</div>
        <div onClick={handleClose} className="cursor-pointer w-8 h-8">
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[400px] overflow-y-auto overflow-x-hidden w-full">
        {cart.map(item=>{
        return (
          <CartItem item ={item} key={item.id}/>
        );
      })}</div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total</span>$ {parseFloat(totalPrice).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div onClick={removeCart} className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex items-center
          justify-center text-2xl">
            <FiTrash2 />
          </div>
        </div>
        <Link to={'/'} className="bg-[#f5e6e0] flex p-4 justify-center items-center text-black w-full
        font-semibold border-ridus rounded-lg">View Cart</Link>
        <Link to={'/'} className="bg-black/60 text-white flex p-4 justify-center items-center text-black/80 w-full
        font-medium transition-all duration-300 hover:bg-black/80 rounded-lg">Checkout</Link>
      </div>
    </div>
  );
}

export default Sidebar;
