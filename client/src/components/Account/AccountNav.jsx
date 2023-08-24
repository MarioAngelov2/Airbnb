import React from "react";
import { useLocation, Link, NavLink, useParams } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa";
import { PiBuildings } from "react-icons/pi";

function AccountNav() {
    const { pathname } = useLocation();
    console.log(useLocation())
    let subpage = pathname.split('/')?.[2]
    
    if (subpage === 'undefined') {
        subpage = 'profile'
    }

    console.log(subpage)

    function linkClasses(type = null) {
        let classes = "flex items-center gap-1"
        if (type === subpage) {
            classes += " bg-primary text-white rounded-full"
        }

        return classes
    }
  
    return (
        <div className="flex justify-center max-w-global mx-auto my-16 mb-8 gap-5">
            <NavLink
                className={linkClasses('profile')}
                to={"/account"}
            >
                <CgProfile size={20} />
                My profile
            </NavLink>
            <NavLink
                className={linkClasses('bookings')}
                to={"/account/bookings"}
            >
                <FaRegBookmark size={20} />
                My bookings
            </NavLink>
            <NavLink
                className={linkClasses('places')}
                to={"/account/places"}
            >
                <PiBuildings size={20} />
                My accoommodations
            </NavLink>
        </div>
    );
}

export default AccountNav;
