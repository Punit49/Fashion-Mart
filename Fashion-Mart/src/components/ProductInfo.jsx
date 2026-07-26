import { useContext } from "react";
import { MdLocalShipping, MdSecurity, MdReplay } from "react-icons/md";
import { MyStore } from "../context/MainContext";

export default function ProductInfo({ product, category }) {

  const { handleAddToCart, isInKart, setIsCartOpen } = useContext(MyStore);
  const isInCart = isInKart(product);

  return (
    <div className="font-['Anybody']">
      <p className="text-xs font-bold uppercase tracking-widest text-[#e5e2e1]/50 mb-2">
        DROPS / {category} / {product.id}
      </p>

      <h1 className="text-[36px] md:text-[44px] font-black text-[#e5e2e1] uppercase leading-none tracking-[-0.02em] mb-3">
        {product.title}
      </h1>

      <div className="flex items-center gap-2 mb-4">
        <span className="text-[#c00100] text-lg">★★★★☆</span>
        <span className="text-xs text-[#e5e2e1]/50 uppercase tracking-wide">
          {product.rating} (48 Reviews)
        </span>
      </div>

      <p className="text-[32px] font-black text-[#c00100] mb-4">${product.price}</p>

      <p className="text-sm text-[#e5e2e1]/60 leading-relaxed mb-8">
        {product.description}
      </p>

      { isInCart ? (
          <button onClick={() => setIsCartOpen(true)} className="w-full bg-[#c00100] text-[#131313] text-sm font-bold uppercase py-3 hover:bg-[#e5e2e1] hover:text-white transition-colors flex items-center justify-center gap-2  mb-5">
          Go to Cart 🛒
          </button>
      ) : (
          <button onClick={() => handleAddToCart(product)} className="w-full bg-[#e5e2e1] text-[#131313] text-sm font-bold uppercase py-3 hover:bg-[#c00100] hover:text-white transition-colors flex items-center justify-center gap-2 mb-5">
          Add To Haul 🛒
      </button>
      )}

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="border-2 border-[#e5e2e1]/20 px-3 py-4 flex flex-col items-center text-center gap-1">
          <MdLocalShipping className="text-[#c00100] text-xl mb-1" />
          <p className="text-xs font-bold uppercase text-[#e5e2e1]">Free Delivery</p>
          <p className="text-[10px] text-[#e5e2e1]/50">On orders $50+</p>
        </div>

        <div className="border-2 border-[#e5e2e1]/20 px-3 py-4 flex flex-col items-center text-center gap-1">
          <MdSecurity className="text-[#c00100] text-xl mb-1" />
          <p className="text-xs font-bold uppercase text-[#e5e2e1]">Secure Pay</p>
          <p className="text-[10px] text-[#e5e2e1]/50">256-bit SSL</p>
        </div>

        <div className="border-2 border-[#e5e2e1]/20 px-3 py-4 flex flex-col items-center text-center gap-1">
          <MdReplay className="text-[#c00100] text-xl mb-1" />
          <p className="text-xs font-bold uppercase text-[#e5e2e1]">Easy Returns</p>
          <p className="text-[10px] text-[#e5e2e1]/50">30-day policy</p>
        </div>
      </div>

      <div className="border-2 border-dashed border-[#e5e2e1]/20 p-4">
        <p className="text-xs font-black uppercase text-[#c00100] mb-1">🚚 Next Day Dispatch</p>
        <p className="text-xs text-[#e5e2e1]/60">
          Order in the next 04:22:10 for overnight delivery. Global shipping available.
        </p>
      </div>
    </div>
  );
}