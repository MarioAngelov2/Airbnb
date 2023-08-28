import React from "react";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { PiPawPrintLight } from "react-icons/pi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { IoSnowOutline } from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";

function Perks() {
    const checkboxStyle =
        "flex items-center justify-center border rounded-2xl gap-2 py-3 cursor-pointer";

    const spanStyle = "text-sm";

    return (
        <>
            <label className={checkboxStyle}>
                <AiOutlineWifi size={24} />
                <span className={spanStyle}>WiFi</span>
                <input type="checkbox" />
            </label>
            <label className={checkboxStyle}>
                <PiPawPrintLight size={24} />
                <span className={spanStyle}>Pets Allowed</span>
                <input type="checkbox" />
            </label>
            <label className={checkboxStyle}>
                <AiOutlineCar size={24} />
                <span className={spanStyle}>Free Parking</span>
                <input type="checkbox" />
            </label>
            <label className={checkboxStyle}>
                <TbToolsKitchen2 size={24} />
                <span className={spanStyle}>Kitchen</span>
                <input type="checkbox" />
            </label>
            <label className={checkboxStyle}>
                <BsPersonWorkspace size={24} />
                <span className={spanStyle}>Work Space</span>
                <input type="checkbox" />
            </label>
            <label className={checkboxStyle}>
                <PiTelevisionSimpleLight size={24} />
                <span className={spanStyle}>TV</span>
                <input type="checkbox" />
            </label>
            <label className={checkboxStyle}>
                <IoSnowOutline size={24} />
                <span className={spanStyle}>Aircondition</span>
                <input type="checkbox" />
            </label>
            <label className={checkboxStyle}>
                <FaMountainSun size={24} />
                <span className={spanStyle}>Mountain View</span>
                <input type="checkbox" />
            </label>
        </>
    );
}

export default Perks;
