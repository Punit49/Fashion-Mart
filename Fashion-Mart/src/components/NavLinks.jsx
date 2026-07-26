import { nanoid } from 'nanoid';
import React, { useContext, useEffect } from 'react'
import { NavLink, useParams } from 'react-router';
import { MyStore } from '../context/MainContext';

const NavLinks = () => {

    const links = [
        { name: "Home", path: "/home" },
        { name: "Drops", path: "category/drops" },
        { name: "Layer up", path: "category/Layerup" },
        { name: "Layer down", path: "category/Layerdown" },
        { name: "Watches", path: "category/watches" },
        { name: "About", path: "about" },
    ];

    return (
        <div className="flex gap-6">
        {
            links.map((link) => {
            return (
                <NavLink key={nanoid()} to={link.path} className={({isActive}) => 
                    `text-sm font-bold uppercase hover:text-[#c00100] transition-colors ${
                        isActive ? "text-[#c00100] border-b-2 border-[#c00100]" : "text-[#e5e2e1] border-0"
                    }`
                    } >
                    {link.name}
                    </NavLink>
                )
            })
        }
        </div>
    )
}

export default NavLinks
