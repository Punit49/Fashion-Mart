import React from 'react'

const ProductPageHeader = ({ category }) => {
  return (
    <div className="px-4 md:px-12 pt-10 pb-6 font-['Anybody']">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
        <div>
          <h1 className="text-[40px] md:text-[64px] font-black uppercase leading-none tracking-[-0.02em]">
            <span className="text-[#e5e2e1]">{category.tagline.split(" ")[0]}</span>
            <span className="text-[#c00100]">{category.tagline.split(" ")[1]}</span>
          </h1>
          <p className="text-sm text-[#e5e2e1]/60 max-w-xl mt-3">
            {category.description}
          </p>
        </div>

        <p className="text-xs font-bold uppercase tracking-widest text-[#e5e2e1]/30">
          FashionMart <span className="mx-2">——</span>
          <span className="text-[#c00100]">Sale is Live!</span>
        </p>
      </div>
    </div>
  );
}

export default ProductPageHeader;
