import { NavLink } from "react-router";
import { Layerup } from "../utils/Mens";
import ProductCard from "./ProductCard";
import { MyStore } from "../context/MainContext";
import { nanoid } from "nanoid";

export default function LatestDrops() {
  
    return (
      <section className="bg-[#1c1b1b] py-12 border-y-2 border-[#e5e2e1] font-['Anybody'] pb-40">
        <div className="px-4 md:px-12 mb-6 flex justify-between items-end">
          <h2 className="text-[48px] font-extrabold text-[#e5e2e1] uppercase tracking-[-0.02em]">
            LATEST <span className="text-[#c00100] italic">DROPS</span>
          </h2>
          <NavLink to={"/category/drops"} href="#" className="text-sm font-bold text-[#e5e2e1] hover:text-[#c00100] underline">
            VIEW ALL RELEASES
          </NavLink>
        </div>

        <div className="px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <ProductCard
            category={"Layerup"}
            product={Layerup[5]}
            key={nanoid()}
            badge="New Drop"
          />

          <ProductCard
            category={"Layerup"}
            product={Layerup[11]}
            key={nanoid()}
            badge="New Drop"
          />

          <ProductCard
            category={"Layerup"}
            product={Layerup[10]}
            key={nanoid()}
            badge="New Drop"
          />

          <ProductCard
            category={"Layerup"}
            product={Layerup[6]}
            key={nanoid()}
            badge="New Drop"
          />

        </div>
      </section>
    );
}