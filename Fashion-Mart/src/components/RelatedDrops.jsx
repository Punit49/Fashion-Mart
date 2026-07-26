import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { cloths, Layerdown, Layerup } from "../utils/Mens";
import ProductCard from "./ProductCard";

export default function RelatedDrops() {

  const {category} = useParams();
  const [ myProducts, setMyProducts ] = useState(null);

  const getRandomItems = (source, count = 4) => {
    const shuffled = [...source].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    const getMyWatchs = async () => {
      const res = await axios.get("https://dummyjson.com/products/category/mens-watches?limit=4");
      console.log("res", res);
      setMyProducts(res.data.products);
    }

    if(category !== "watches"){
      let myCategory = category;
      if(category === "drops"){
        myCategory = "Layerup"
      }
      const products = getRandomItems(cloths[myCategory]);
      setMyProducts(products);
    } else {
      getMyWatchs();
    }
  }, [category]);

  if(!myProducts){
    return <h1 className="text-2xl font-bold text-white">
      Loading...
    </h1>
  }

  return (
    <div className="py-16 border-t-2 border-[#e5e2e1]/10 font-['Anybody']">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-[32px] md:text-[40px] font-black text-[#e5e2e1] uppercase">
          RELATED DROPS
        </h2>
        <NavLink to={`/category/${category}`} className="text-xs font-bold uppercase underline text-[#e5e2e1] hover:text-[#c00100]">
          View All
        </NavLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        { 
          myProducts.map((p) => {
            return <ProductCard 
                    category={category}
                    product={p}
                    key={p.id}
                    badge="New Drop"
                    />
          })
        }
        
      </div>
    </div>
  );
}