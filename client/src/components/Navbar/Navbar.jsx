import React from "react";
import { PiPaperPlane } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";

function Navbar() {
    return (
        <div className="flex justify-between max-w-global mx-auto">
            <div className="flex items-center gap-1">
                <PiPaperPlane className="text-primary" size={30} />
                <h1 className="text-2xl font-bold text-primary">airbnb</h1>
            </div>
            {/* second section */}
            <div className="hidden md:flex items-center gap-3 border rounded-full px-6 py-1 shadow-md shadow-gray-200">
                <div>Anywhere</div>
                <div className="border-l border-gray-300">&nbsp;</div>
                <div>Any week</div>
                <div className="border-l border-gray-300">&nbsp;</div>
                <div>Add Guests</div>
                <div className="border rounded-3xl p-2 bg-primary text-white">
                    <BiSearchAlt2 size={18} />
                </div>
            </div>
            {/* third section */}
            <div className="flex gap-3 border rounded-3xl py-2 px-5 shadow-md shadow-gray-100">
                <RxHamburgerMenu size={24} />
                <FaRegUserCircle size={24} />
            </div>
        </div>
    );
}

export default Navbar;
