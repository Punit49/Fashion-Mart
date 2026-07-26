import React from 'react'

const ProductGallery = ({product}) => {
  const img = product.image ? product.image : product.images[0];

  return (
    <div className="flex gap-4 w-[95%]">
      <div className="relative flex-1 border-2 border-[#e5e2e1]/20 overflow-hidden h-[700px]">
        <span className="absolute top-4 left-4 bg-[#c00100] text-white text-[10px] font-black uppercase px-3 py-1 z-10">
          Core Drop V.01
        </span>
        <span className="absolute top-4 right-4 text-[#e5e2e1] font-extrabold text-lg tracking-tight z-10">
          FashionMart
        </span>
        <img
          src={img}
          alt="Vantablack Hoodie V1"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
}

export default ProductGallery
