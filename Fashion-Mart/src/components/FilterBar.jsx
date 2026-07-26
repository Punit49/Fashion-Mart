import React, { useContext } from 'react'
import SearchBar from "../components/SearchBar";
import { MyStore } from '../context/MainContext';
import { RxCross2 } from "react-icons/rx";
import toast from 'react-hot-toast';

const FilterBar = () => {

    const {filter, setFilter, currentProducts, setCurrentProducts, allProducts} = useContext(MyStore);

    const handleFilter = (val) => {
        if(val === "All Styles"){
            toast.success(`Filter Removed`);
            setCurrentProducts(allProducts);
            return setFilter(null);
        }

        const sortedProducts = [...currentProducts].sort((a, b) => {
            switch (val) { // 
                case "Price: Low-High":
                    return parseFloat(a.price) - parseFloat(b.price);
                case "Price: High-Low":
                    return parseFloat(b.price) - parseFloat(a.price);
                case "Top Rated":
                    return b.rating - a.rating;
                case "Lowest rated":
                    return a.rating - b.rating;
                default: 0;
            }
        });

        setCurrentProducts(sortedProducts);
        toast.success(`Filter Applied - ${val}`);
        setFilter(val);
    }

    return (
        <div className="px-4 md:px-12 py-6 border-y-2 border-[#e5e2e1]/10 flex   justify-between  w-full font-['Anybody']">

            <div className='w-full flex flex-col items-start gap-5'>
                <SearchBar />

                {filter && (
                    <div className={`filter group flex items-center gap-2 bg-[#1a1a1a] border-2 border-[#c00100]/40 hover:border-[#c00100] text-[#e5e2e1] uppercase text-xs font-bold tracking-wide px-3 py-2 rounded-full transition-colors  ${filter ? "flex" : 'hidden'}`}>
                        <span>{filter}</span>
                        <button
                        onClick={() => setFilter(null)}
                        className="flex items-center justify-center w-4 h-4 rounded-full bg-[#e5e2e1]/10 group-hover:bg-[#c00100] text-[#e5e2e1] group-hover:text-white transition-colors"
                        >
                        <RxCross2 className="text-[10px]" />
                        </button>
                    </div>
                )}
            </div>

            <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#e5e2e1]/50 mb-2">
                Price Range
                </p>
                <select value={filter} onChange={(e) => handleFilter(e.target.value)} className="bg-[#131313] border-2 border-[#e5e2e1]/20 text-[#e5e2e1] text-xs font-bold uppercase px-4 py-2">
                    <option selected value="All Styles" >All Styles</option>
                    <option value="Price: Low-High" >Price: Low-High</option>
                    <option value="Price: High-Low" >Price: High-Low</option>
                    <option value="Top Rated" >Top Rated</option>
                    <option value="Lowest rated" >Lowest rated</option>
                </select>
            </div>
        </div>
    );
}

export default FilterBar
