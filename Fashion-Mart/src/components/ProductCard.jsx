import React, { useContext } from 'react'
import { MdInsertChart } from 'react-icons/md';
import { MyStore } from '../context/MainContext';
import { useNavigate } from 'react-router';

    const ProductCard = ({
        badge,
        outOfStock = false,
        product,
        category
    }) => {
        
    const navigate = useNavigate();    
    const img = product.image ? product.image : product.images[0];
    const {setIsCartOpen, isInKart, handleAddToCart} = useContext(MyStore)
    const isInCart = isInKart(product);

    return (
        <div className="border-2 border-[#e5e2e1]/20 bg-[#131313] font-['Anybody'] hover:border-red-900 cursor-pointer flex flex-col justify-between">
            <div onClick={() => navigate(`/${category}/${product.id}`)} className="aspect-4/5 relative overflow-hidden bg-black">
                <img src={img} alt={product.title} className={`w-full h-full object-cover ${outOfStock ? "grayscale opacity-50" : ""}`} />

                {badge && (
                <span className="absolute top-3 left-3 bg-[#c00100] text-[#131313] text-[10px] font-black uppercase px-3 py-1">
                    {badge}
                </span>
                )}

                {outOfStock && (
                <span className="absolute bottom-3 right-3 bg-[#c00100] text-white text-[10px] font-black uppercase px-3 py-1">
                    Out Of Stock
                </span>
                )}
            </div>

            <div className="p-4 flex flex-col justify-between">
                    <div onClick={() => navigate(`/${category}/${product.id}`)} className="flex justify-between items-start mb-2">
                        <h3 className={`text-lg font-black uppercase leading-tight ${outOfStock ? "text-[#e5e2e1]/40" : "text-[#e5e2e1]"} font-semibold`}>
                            {product.title}
                        </h3>
                        <span className="text-[#c00100] text-lg font-black whitespace-nowrap ml-2">${product.price}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[#c00100] text-lg">★★★★☆</span>
                        <span className="text-xs text-[#e5e2e1]/50 uppercase tracking-wide">
                        {product.rating} (48 Reviews)
                        </span>
                    </div>

                    <p className="text-xs text-[#e5e2e1]/50 leading-relaxed mb-4">
                        {/* {product.description} */}
                    </p>

                    { isInCart ? (
                        <button onClick={() => setIsCartOpen(true)} className="w-full bg-[#c00100] text-[#131313] text-sm font-bold uppercase py-3 hover:bg-[#e5e2e1] hover:text-white transition-colors flex items-center justify-center gap-2">
                        Go to Cart 🛒
                        </button>
                    ): (
                        <button onClick={() => handleAddToCart(product)} className="w-full bg-[#e5e2e1] text-[#131313] text-sm font-bold uppercase py-3 hover:bg-[#c00100] hover:text-white transition-colors flex items-center justify-center gap-2">
                        Add To Haul 🛒
                    </button>
                    )}
            </div>
        </div>
    );
}

export default ProductCard
