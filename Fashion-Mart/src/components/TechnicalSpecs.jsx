export default function TechnicalSpecs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t-2 border-[#e5e2e1]/10 font-['Anybody']">

      <h2 className="text-[32px] md:text-[40px] font-black text-[#e5e2e1] uppercase leading-tight">
        TECHNICAL <br /> SPECS
      </h2>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-[#c00100] mb-3">
          The Construction
        </p>
        <p className="text-sm text-[#e5e2e1]/70 leading-relaxed mb-8">
          Engineered for the Digital Underground. The Vantablack Hoodie V1 is crafted from a 500GSM
          Heavyweight French Terry, providing a structural rigidity that maintains its silhouette
          regardless of movement. Pre-shrunk and reactive-dyed for a depth of black that absorbs light.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border-2 border-[#e5e2e1]/10 p-4">
            <p className="text-xs font-black uppercase text-[#e5e2e1] mb-2">Fit Profile</p>
            <p className="text-xs text-[#e5e2e1]/60 leading-relaxed">
              - Oversized Box Cut <br />
              - Dropped Shoulders <br />
              - Cropped Waistband <br />
              - Stacked Sleeves
            </p>
          </div>

          <div className="border-2 border-[#e5e2e1]/10 p-4">
            <p className="text-xs font-black uppercase text-[#e5e2e1] mb-2">Fabrication</p>
            <p className="text-xs text-[#e5e2e1]/60 leading-relaxed">
              - 100% Organic Cotton <br />
              - Double-Stitched Seams <br />
              - Hidden Kangaroo Pocket <br />
              - No Drawstrings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}