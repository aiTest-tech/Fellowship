import React from "react";
import { lazy } from "react";
const Navbar = lazy(() => import("../components/shared/Navbar/Navbar"));
const Footer = lazy(() => import("../components/shared/Footer/Footer"));


interface ComponentProps {
    children: React.ReactNode
}



const NavFooterLayout: React.FC<ComponentProps> = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="min-h-[74vh] bg-white">
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default NavFooterLayout;