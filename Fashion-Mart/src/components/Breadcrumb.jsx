import { NavLink, useNavigate } from "react-router";

export default function Breadcrumb({category, title}) {
  const navigate = useNavigate();
  return (
    <div className="text-xs font-bold uppercase tracking-widest text-[#e5e2e1]/50">
      <span onClick={() => navigate(`/category/${category}`)} className="mx-2 uppercase cursor-pointer">{category ? category : "Drops"} /</span>
      <span className="text-[#e5e2e1] uppercase">{title}</span>
    </div>
  );
}