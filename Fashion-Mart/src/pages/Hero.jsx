import { NavLink } from "react-router";
import heroModel from "../assets/heroModel.png";

export default function Hero() {
  return (
    <section className="relative min-h-[1021px] flex flex-col justify-end p-4 md:p-12 overflow-hidden border-b-2 border-[#e5e2e1] font-['Anybody']">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center grayscale contrast-125"
          style={{
            backgroundImage:
              `url(${heroModel})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-5xl mb-15">
        <h1 className="text-[60px] md:text-[80px] font-black text-[#e5e2e1] leading-none tracking-[-0.04em] mb-2 uppercase italic">
          THE NEW <span className="text-[#c00100] block not-italic">STANDARD</span> OF STREET
        </h1>
        <p className="text-lg text-[#e5e2e1]/80 max-w-xl mb-10 uppercase tracking-widest">
          Premium streetwear crafted with oversized silhouettes, timeless design, and uncompromising quality.
        </p>
        <NavLink to={"/category/drops"} className="bg-[#c00100] text-[#e5e2e1] text-xl font-bold px-12 py-5 uppercase hover:bg-[#e5e2e1] hover:text-[#131313] transition-all">
          SHOP NOW
        </NavLink>
      </div>
    </section>
  );
}