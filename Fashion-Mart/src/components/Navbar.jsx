import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { MyStore } from "../context/MainContext";
import { getGreetings } from "../utils/greetings";
import { NavLink, useNavigate } from "react-router";
import NavLinks from "./NavLinks";
import toast from "react-hot-toast";

export default function Navbar() {
  const { logUser, setIsCartOpen, cartItems, setLogUser } = useContext(MyStore);
  const greetings = getGreetings();
  const navigate = useNavigate();
  const {menuOpen, setMenuOpen} = useContext(MyStore);

  const handleLogout = () => {
    setLogUser(null);
    localStorage.setItem("logUser", null);
    // navigate("/login");
    toast.success("Logged Out Successfully!", {
      position: "top-right"
    })
  }

  return (
    <header className="sticky top-0 z-50 bg-[#131313] border-b-4 border-[#c00100] font-['Anybody']">
      <nav className="flex justify-between items-center w-full px-2 md:px-6 lg:px-10 py-4 flex-wrap gap-1">
        <NavLink to={"/home"} className="text-[24px] md:text-[36px] font-extrabold text-[#c00100] tracking-tighter pe-5">
          FashionMart
        </NavLink>

        <div className="hidden lg:flex">
            <NavLinks />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden lg:block text-right leading-tight">
            <p className="text-white font-bold text-xs md:text-sm">{greetings}</p>
            <p className="text-sm md:text-md font-black uppercase text-[#c00100] tracking-wide truncate max-w-[120px] md:max-w-none">
              {logUser.fullname}
            </p>
          </div>

          <div className="hidden sm:block h-8 w-[2px] bg-[#e5e2e1]/20"></div>

          <button className="border relative border-[#c00100] p-2 text-[#e5e2e1] hover:bg-[#c00100] hover:text-[#131313] transition-colors" onClick={() => setIsCartOpen(true)}>
            <FaShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-[#c00100] text-white text-[11px] font-black w-5 h-5 flex items-center justify-center border-2 border-[#131313]">
              {cartItems.length}
            </span>
          </button>

          <button onClick={() => handleLogout()} className="border border-[#c00100] p-2 text-[#e5e2e1] hover:bg-[#c00100] hover:text-[#131313] transition-colors">
            <MdLogout size={20} />
          </button>

          <button
            className="lg:hidden border border-[#c00100] p-2 text-[#e5e2e1] hover:bg-[#c00100] hover:text-[#131313] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden text-white flex flex-col gap-4 px-4 pb-6 border-t-2 border-[#e5e2e1]/10 pt-4">
          <div className="lg:hidden mb-2">
            <p className="text-white font-bold text-xs">{greetings}</p>
            <p className="text-sm font-black uppercase text-[#c00100] tracking-wide">
              {logUser.fullname}
            </p>
          </div>

          <NavLinks />
        </div>
      )}
    </header>
  );
}