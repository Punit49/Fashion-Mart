// SearchBar.jsx
import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MyStore } from "../context/MainContext";
import { useParams } from "react-router";

export default function SearchBar() {
    const { currentProducts, setCurrentProducts, allProducts, setAllProducts} = useContext(MyStore);
    const [search, setSearch] = useState("");
    const { category } = useParams();

    const handleSearch = (val) => {
        setSearch(val);
        setCurrentProducts(
          allProducts.filter((p) => {
            console.log(p.title);
            return p.title.toLowerCase().includes(val.toLowerCase())
          }))
    }

    useEffect(() => {
        setSearch("");
        setCurrentProducts(allProducts);
    }, [ category ])

  return (
    <div className="flex items-center border-2 border-[#e5e2e1]/20 focus-within:border-[#c00100] transition-colors px-3 py-2 w-[90%] sm:w-[80%]">
      <input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        placeholder="SEARCH_DATABASE"
        className="bg-transparent text-xs font-bold uppercase tracking-widest text-[#e5e2e1] placeholder:text-[#e5e2e1]/40 focus:outline-none w-full"
      />
      <FaSearch size={14} className="text-[#e5e2e1]/50" />
    </div>
  );
}