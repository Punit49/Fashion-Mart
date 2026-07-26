import { useContext } from "react";
import {
  MdInventory2,
  MdTrendingUp,
  MdStar,
  MdLocalOffer,
} from "react-icons/md";
import { MyStore } from "../context/MainContext";

export default function Stats() {
  const { cartItems } = useContext(MyStore);
  const total = cartItems?.reduce(
    (acc, cur) => acc + Number(cur.price) * cur.quantity,
    0,
  );

  const stats = [
    {
      icon: MdInventory2,
      value: cartItems.length,
      label: "Cart Items",
      sub: "In your bag",
    },
    {
      icon: MdTrendingUp,
      value: `$${total}`,
      label: "Cart Value",
      sub: "Ready to checkout",
    },
    {
      icon: MdStar,
      value: "25+",
      label: "Top Products",
      sub: "Highly rated",
    },
    {
      icon: MdLocalOffer,
      value: "3",
      label: "Categories",
      sub: "To explore",
    },
  ];

  return (
    <div className="bg-[#131313] grid p-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-['Anybody'] border-b-2 border-white">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="border-2 border-[#e5e2e1]/20 hover:border-[#c00100] transition-colors bg-[#131313] p-5 flex items-center gap-4"
          >
            <div className="w-11 h-11 shrink-0 flex items-center justify-center border-2 border-[#c00100]/40 bg-[#c00100]/10">
              <Icon className="text-[#c00100] text-xl" />
            </div>

            <div>
              <p className="text-2xl font-black text-[#e5e2e1] leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-bold uppercase text-[#e5e2e1]/70 tracking-wide leading-tight">
                {stat.label}
              </p>
              <p className="text-[10px] text-[#e5e2e1]/40 uppercase tracking-wide">
                {stat.sub}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
