import { useContext } from "react";
import { MyStore } from "../context/MainContext";

export default function CartItem({item}) {

  const { incraseQuantity, decraseQuantity, removeCartItem } = useContext(MyStore);
  const img = item.image ? item.image : item.images[0];

  return (
    <div className="group flex gap-4 rounded-md border border-neutral-800 bg-[#181818] p-3 transition-all duration-300 hover:border-[#c00100]">
      <img
        src={img}
        alt="Cart Item"
        className="h-28 w-20 rounded object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col">
        <h3 className="text-sm font-bold uppercase text-[#E5E2E1]">
          {item.title}
        </h3>

        <p className="mt-1 text-sm font-semibold text-[#c00100]">
          ${item.price}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex overflow-hidden rounded border border-neutral-700">
            <button onClick={() => decraseQuantity(item.id)} className="px-3 py-1 transition hover:bg-[#c00100]">
              −
            </button>

            <span className="border-x border-neutral-700 px-4 py-1">
              {item.quantity}
            </span>

            <button onClick={() => incraseQuantity(item.id)} className="px-3 py-1 transition hover:bg-[#c00100]">
              +
            </button>
          </div>

          <button onClick={() => removeCartItem(item.id)} className="text-xs uppercase text-neutral-400 transition hover:text-[#c00100]">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}