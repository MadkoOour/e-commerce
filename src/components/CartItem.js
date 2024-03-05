import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartItem({ item }) {
    // Destructure item
    const { id, image, title, price,amount } = item;
    const{removeFromCart , increaseAmount , decreaseAmount} = useContext(CartContext);
    return (
        <div className="flex gap-x-4 py-2 px-2 lg:px-6 border-b border-gray-200
        w-full text-gray-500">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* image */}
                <Link to={`/product/${id}`}>
                    <img className="max-w-[80px]" src={image} alt="" />
                </Link>
                <div className="w-full flex flex-col">
                    {/* title & remove icon */}
                    <div className="flex justify-between gap-x-4 mb-2">
                        {/* title */}
                        <Link
                            to={`/product/${id}`}
                            className="text-sm text-gray-500 uppercase font-medium flex
                                    max-w-[240px] hover:underline"
                        >
                            {title}
                        </Link>
                        {/* remove icon */}
                        <div onClick={()=>{removeFromCart(id)}} className="text-xl cursor-pointer">
                            <IoMdClose className="text-gray-500 transition-all transform duration-300 
                            hover:text-red-500 hover:rotate-180" />
                        </div>
                    </div>
                    <div className="flex gap-x-2 h-[36px] items-center 
                    text-sm ">
                        {/* qty */}
                        <div className="flex flex-1 max-w-[100px] items-center h-full
                        border font-medium">
                            {/* minus icon */}
                            <div onClick={()=>{decreaseAmount(id)}} className="flex-1 flex justify-center 
                            items-center cursor-pointer h-full">
                                <IoMdRemove />
                            </div>
                            {/* amount */}
                            <div className="h-full flex justify-center items-center px-2">
                                {amount}
                            </div>
                            {/* plus icon */}
                            <div  onClick={()=>increaseAmount(id)} className="flex-1 flex justify-center 
                            items-center cursor-pointer h-full">
                                <IoMdAdd />
                            </div>
                        </div>
                        {/* item price */}
                        <div className="flex-1 flex items-center justify-around ">
                            $ {price}
                        </div>
                        {/* final price */}
                        <div className="flex-1 flex justify-end text-black/80 font-semibold">
                            {`$ ${parseFloat(item.price * amount).toFixed(2)}`}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
