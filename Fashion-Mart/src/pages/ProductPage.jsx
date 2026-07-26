import ProductPageHeader from "../components/ProductPageHeader";
import FilterBar from "../components/FilterBar";
import ProductGrid from "../components/ProductGrid";
import { useParams } from "react-router";
import categories from "../utils/category";
import { useContext, useEffect } from "react";
import axios from "axios";
import { cloths } from "../utils/Mens";
import { MyStore } from "../context/MainContext";
import { ClockFading } from "lucide-react";

export default function ProductPage() {
    const { category } = useParams();
    const currentCategory = categories[category];
    const { setCurrentProducts, setFilter, setAllProducts } = useContext(MyStore);
    
    const getWatchesData = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products/category/mens-watches");
            console.log(res.data)
            setCurrentProducts(res.data.products);
            setAllProducts(res.data.products);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if(category === "drops"){
            setCurrentProducts([...cloths.Layerup, ...cloths.Layerdown]);
            setAllProducts([...cloths.Layerup, ...cloths.Layerdown]);
        } else if (category === "watches"){
            getWatchesData();
        } else{
            setCurrentProducts(cloths[category]);
            setAllProducts(cloths[category]);
        }
    }, [category, setCurrentProducts, setAllProducts]);
        
    return (
        <div className="bg-[#131313] min-h-screen flex flex-col">
        <main className="grow">
            <ProductPageHeader category={currentCategory} />
            <FilterBar />
            <ProductGrid />
        </main>
        </div>
    );
}
