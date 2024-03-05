import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
function ProductDetails(){
    const {id} = useParams();
    const {products} = useContext(ProductContext)
    const {addToCart} = useContext(CartContext)

    //get single product based on id
    const product = products.find(item =>{
        return( item.id === parseInt(id))
    })

    //if product is not found
    if(!product){
        return <section className="h-screen flex justify-center items-center text-3xl font-semibold">
            Loading...
        </section>
    }

    const { title, price, description, image } = product;

    return(
        <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
            <div className="container mx-auto">
                {/* image & text wrapper */}
                <div className="flex flex-col gap-x-4 lg:flex-row items-center">
                    {/* image */}
                    <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
                        <img src={image} alt="" className="shadow-md shadow-[#f5e6e0] max-w-[200px] lg:max-w-xs"/>
                    </div>
                    {/* text */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-[26px] font-semibold mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
                        <div className="text-xl text-red-500 font-medium mb-6">$ {price}</div>
                        <p className="text-gray-400 mb-6">{description}</p>
                        <button className="bg-[#f5e6e0]/80 transition-all duration-300 hover:bg-[#f5e6e0] p-4 text-black w-48
                        font-semibold border-ridus rounded-lg sm:mx-auto"
                        onClick={()=>{addToCart(product,product.id)}}>
                            Add to cart
                        </button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default ProductDetails;