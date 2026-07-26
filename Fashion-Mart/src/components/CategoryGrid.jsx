import streetVideo from "../assets/streetVid2.mp4";
import streetPoster from "../assets/streetPoster.png";

import accVideo from "../assets/accVid.mp4";
import accPoster from "../assets/watch.jpg";

import outerVideo from "../assets/outerVideo.mp4";
import outerPoster from "../assets/outerPoster.png";
import { NavLink } from "react-router";

export default function CategoryGrid() {
  return (
    <section className="bg-[#131313] p-4 font-['Anybody'] md:p-12">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#c00100]">
          — Shop By Category
        </p>

        <h2 className="text-[22px] font-extrabold uppercase leading-none tracking-[-0.02em] text-[#e5e2e1] sm:text-[36px] md:text-[48px]">
          FIND YOUR <span className="italic text-[#c00100]">FIT</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <NavLink to={"/category/Layerup"} className="group relative h-[300px] overflow-hidden border-2 border-[#c00100] sm:h-[380px] lg:h-[600px] md:col-span-6">
          <video
            src={streetVideo}
            poster={streetPoster}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/45"></div>

          <div className="absolute bottom-4 left-4 z-10 md:bottom-6 md:left-6">
            <h3 className="text-[22px] font-extrabold uppercase leading-none text-[#e5e2e1] sm:text-[34px] lg:text-[48px]">
              Layerup
            </h3>

            <span
              href="#"
              className="mt-2 inline-block text-xs font-bold uppercase tracking-wide text-[#e5e2e1] underline transition hover:text-[#c00100] sm:text-sm"
            >
              Explore Collection
            </span>
          </div>
        </NavLink>

        <NavLink to={"/category/watches"} className="group relative h-[300px] overflow-hidden border-2 border-[#e5e2e1] sm:h-[380px] lg:h-[600px] md:col-span-6">
          <video
            src={accVideo}
            poster={accPoster}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-4 left-4 z-10 md:bottom-6 md:left-6">
            <h3 className="text-[22px] font-extrabold uppercase leading-none text-[#e5e2e1] sm:text-[34px] lg:text-[48px]">
              Watches
            </h3>

            <span
              href="#"
              className="mt-2 inline-block text-xs font-bold uppercase tracking-wide text-[#e5e2e1] underline transition hover:text-[#c00100] sm:text-sm"
            >
              Shop Watches
            </span>
          </div>
        </NavLink>

        <NavLink to={"/category/Layerdown"} className="group relative h-[300px] overflow-hidden border-2 border-[#e5e2e1] sm:h-[420px] lg:h-[520px] md:col-span-12">
          <video
            src={outerVideo}
            poster={outerPoster}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            <h3 className="text-[30px] font-black uppercase leading-none tracking-[-0.02em] text-[#e5e2e1] sm:text-[56px] lg:text-[80px]">
              Layerdown
            </h3>

            <button className="cursor-pointer mt-6 bg-[#e5e2e1] px-8 py-3 text-sm font-bold uppercase text-[#131313] transition-all duration-300 hover:bg-[#c00100] hover:text-white">
              View All
            </button>
          </div>
        </NavLink>
      </div>
    </section>
  );
}