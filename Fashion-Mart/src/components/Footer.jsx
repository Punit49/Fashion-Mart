import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#0b0b0b] py-20">
      <div className="w-full px-6 py-10 lg:px-[70px]">

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black uppercase text-white sm:text-4xl lg:text-5xl">
              FASHIONMART
            </h2>

            <p className="mt-3 text-xs uppercase tracking-wide text-zinc-500">
              ©2026 FashionMart. Unapologetic Style. No Refunds.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <a href="#" className="hover:text-red-500 transition">
              Terms
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Contact
            </a>
            <a href="#" className="hover:text-red-500 transition">
              Shipping
            </a>
          </div>

          {/* Right */}
          <div className="flex justify-center gap-4 lg:justify-end">
            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center border border-red-600 text-white transition hover:bg-red-600"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="#"
              className="flex h-12 w-12 items-center justify-center border border-red-600 text-white transition hover:bg-red-600"
            >
              <FaInstagram size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;