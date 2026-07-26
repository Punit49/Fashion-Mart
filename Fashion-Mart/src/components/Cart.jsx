import { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { MyStore } from "../context/MainContext";
import toast, { Toaster } from 'react-hot-toast';

export default function Cart() {
  const notify = () => toast.success("Your Order is Placed Successfully 🎉");

  const { isCartOpen, setIsCartOpen, cartItems, setCartItems } = useContext(MyStore);

  const total = cartItems?.reduce((acc, cur) => acc + (Number(cur.price) * cur.quantity), 0);

  const handleCheckout = () => {
    notify();
    setIsCartOpen(false);
    setCartItems([]);
    localStorage.setItem("cartItems", JSON.stringify([]));
  }

  useEffect(() => {
    let body = document.querySelector("body");
    isCartOpen ? body.style.overflow = "hidden" : body.style.overflow = "auto";
  }, [isCartOpen]);

  return (
    
    <aside className={`flex h-screen w-[350px] flex-col bg-[#131313] font-['Anybody'] text-[#E5E2E1] fixed top-0 right-0 blur-none z-100 ${isCartOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out `}>

      <div className="flex items-center justify-between border-b border-neutral-800 p-6">
        <h2 className="text-xl font-extrabold uppercase tracking-wider">
          Your Haul
        </h2>

        <button onClick={() => setIsCartOpen(false)} className="text-xl hover:text-[#c00100]">
          ✕
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-5">
        {
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />
          })
        }
      </div>

      <div className="border-t border-neutral-800 bg-[#181818] p-6">

        <div className="mb-3 flex justify-between text-sm uppercase">
          <span className="text-neutral-400">
            Subtotal
          </span>

          <span className="font-bold text-lg text-[#c00100]">
            ${total}
          </span>
        </div>

        <button onClick={() => handleCheckout()} className="mt-5 w-full bg-[#c00100] py-4 text-sm font-bold uppercase tracking-[0.2em] transition hover:bg-red-700">
          Checkout
        
        </button>
      </div>
    </aside>
  );
}