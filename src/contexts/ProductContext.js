import { createContext,useState,useEffect } from "react";

export const ProductContext = createContext();
const ProductProvider = ({children})=>{
    const [products,setProducts]=useState([]);
    useEffect(() => {
        const fetchProducts = () => {
            fetch("https://fakestoreapi.com/products")
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(error => console.error('Error fetching products:', error));
        };
    
        fetchProducts();
    }, []);
    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;