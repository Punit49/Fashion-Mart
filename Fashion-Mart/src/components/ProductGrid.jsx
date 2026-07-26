import { useContext } from "react";
import ProductCard from "./ProductCard";
import { MyStore } from "../context/MainContext";
import toast from "react-hot-toast";
import { useParams } from "react-router";

export default function ProductGrid() {

    const { currentProducts } = useContext(MyStore);
    const { category } = useParams();

    return (
        <div className="px-4 md:px-12 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                currentProducts.map((product) => {
                    return <ProductCard
                        category={category}
                        product={product}
                        key={product.id}
                        badge="New Drop"
                    />
                })
            }
        </div>
    );
}