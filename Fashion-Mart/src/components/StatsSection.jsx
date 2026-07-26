export default function StatsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 bg-[#131313] border-b-2 border-[#e5e2e1] font-['Anybody']">
      
      <div className="p-12 border-b-2 md:border-b-0 md:border-r-2 border-[#e5e2e1] flex flex-col items-center justify-center text-center bg-[#131313]">
        <span className="text-[80px] font-black leading-none block text-[#e5e2e1]">100K+</span>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c00100]">COMMUNITY</span>
      </div>

      <div className="p-12 border-b-2 md:border-b-0 md:border-r-2 border-[#e5e2e1] flex flex-col items-center justify-center text-center bg-[#c00100]">
        <span className="text-[80px] font-black leading-none block text-[#131313]">500+</span>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#131313]">EXCLUSIVE DROPS</span>
      </div>

      <div className="p-12 flex flex-col items-center justify-center text-center bg-[#131313]">
        <span className="text-[80px] font-black leading-none block text-[#e5e2e1]">24/7</span>
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#c00100]">STYLE SUPPORT</span>
      </div>

    </section>
  );
}