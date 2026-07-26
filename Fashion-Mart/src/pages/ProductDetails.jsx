import { useParams } from "react-router";
import Breadcrumb from "../components/Breadcrumb";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import RelatedDrops from "../components/RelatedDrops";
import TechnicalSpecs from "../components/TechnicalSpecs";
import { useEffect, useState } from "react";
import { MyStore } from "../context/MainContext";
import axios from "axios";
import { Layerdown, Layerup } from "../utils/Mens";


export default function ProductDetails() {

  const {id, category} = useParams();
  const [ myProduct, setMyProduct ] = useState(null);

  const getItemByCategory = (up, down, id) => {
    return up.find((i) => i.id === id) || down.find((i) => i.id === id) || null;
  }

  const getMyWatch = async () => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    setMyProduct(res.data);
  }

  useEffect(() => {
    if(category !== "watches"){
      const product = getItemByCategory(Layerup, Layerdown, id);
      console.log(product);
      setMyProduct(product);
    } else {
      getMyWatch();
    }
  }, [id, category]);

  if (!myProduct) {
    return (
      <div className="bg-[#131313] min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#131313] min-h-screen flex flex-col">
      <main className="grow px-4 md:px-12 py-8">
        <Breadcrumb category={category} title={myProduct.title} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 mb-15">
          <ProductGallery product={myProduct} />
          <ProductInfo product={myProduct}  />
        </div>

        <TechnicalSpecs />
        <RelatedDrops />
      </main>
    </div>
  );
}