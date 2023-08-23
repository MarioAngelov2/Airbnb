import React from "react";
import {useLocation} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa";
import { PiBuildings } from "react-icons/pi";

function AccountNav() {
    const location = useLocation();

    console.log(location)

    return (
        <div className="flex justify-center max-w-global mx-auto my-16 mb-8 gap-5">
            <div className="flex items-center gap-1 cursor-pointer">
                <CgProfile size={20} />
                My profile
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
                <FaRegBookmark size={20} />
                My bookings
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
                <PiBuildings size={20} />
                My accoommodations
            </div>
        </div>
    );
}

export default AccountNav;
