import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const MyStore = createContext();

export const ContextProvider = ({children}) => {

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
    const [logUser, setLogUser] = useState(JSON.parse(localStorage.getItem("logUser")) || null);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [filter, setFilter] = useState();
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
    const [ allProducts, setAllProducts] = useState(currentProducts);

    function incraseQuantity(id){
        const updatedArray = cartItems.map((i) => {
            return i.id === id ? {...i, quantity: i.quantity + 1 } : i;
        })
        setCartItems(updatedArray);
        localStorage.setItem("cartItems", JSON.stringify(updatedArray));
    }
    
    function decraseQuantity(id){
        const updatedArray = cartItems.reduce((acc, item) => {
            if(item.id === id){
                if(item.quantity > 1){
                    acc.push({...item, quantity: item.quantity - 1});
                }
            } else {
                acc.push(item);
            }
            return acc;
        }, []);
        setCartItems(updatedArray);
        localStorage.setItem("cartItems", JSON.stringify(updatedArray));
        if(!updatedArray.length){
            setIsCartOpen(false);
        }
    }

    const handleAddToCart = (product) => {
        toast.success("Style Added to Cart", {
            position: "top-left"
        });
        const newItems = [...cartItems, {...product, quantity: 1}]
        setCartItems(newItems);
        localStorage.setItem("cartItems", JSON.stringify(newItems));
        setIsCartOpen(true);
    }

    function isInKart(product){
        return cartItems.find((i) => i.id === product.id);
    }

    const removeCartItem = (id) => {
        let arr = cartItems.filter((i) => i.id !== id)
        setCartItems(arr);
        localStorage.setItem("cartItems", JSON.stringify(arr));
    }
    
    return (
        <MyStore.Provider value={{users,  logUser, setUsers, setLogUser, isCartOpen, setIsCartOpen, menuOpen, setMenuOpen, setCurrentProducts, currentProducts, cartItems, setCartItems, incraseQuantity, decraseQuantity, handleAddToCart, isInKart, removeCartItem, filter,  setFilter, allProducts, setAllProducts }}>
            {children}
        </MyStore.Provider>
    )
} 

