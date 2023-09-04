import React from "react";
import { AiOutlineWifi, AiOutlineCar } from "react-icons/ai";
import { PiPawPrintLight } from "react-icons/pi";
import { TbToolsKitchen2 } from "react-icons/tb";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { IoSnowOutline } from "react-icons/io5";
import { FaMountainSun } from "react-icons/fa6";

function Perks({ perks, setPerks }) {
    const checkboxStyle = 
        "flex items-center justify-center border rounded-2xl gap-2 py-3 cursor-pointer";

    const spanStyle = "text-sm";

    const handleClick = (ev) => {
        const {checked, name} = ev.target
        
        if (checked) {
            setPerks([...perks, name])
        } else {
            setPerks([...perks.filter((selectedName) => selectedName !== name)])
        }
    }

    return (
        <>
            <label className={checkboxStyle}>
                <AiOutlineWifi size={24} />
                <span className={spanStyle}>WiFi</span>
                <input
                    type="checkbox"
                    name="WiFi"
                    checked={perks.includes("WiFi")}
                    onChange={handleClick}
                />
            </label>
            <label className={checkboxStyle}>
                <PiPawPrintLight size={24} />
                <span className={spanStyle}>Pets Allowed</span>
                <input
                    type="checkbox"
                    name="Pets"
                    checked={perks.includes("Pets")}
                    onChange={handleClick}
                />
            </label>
            <label className={checkboxStyle}>
                <AiOutlineCar size={24} />
                <span className={spanStyle}>Free Parking</span>
                <input
                    type="checkbox"
                    name="Parking"
                    checked={perks.includes("Parking")}
                    onChange={handleClick}
                />
            </label>
            <label className={checkboxStyle}>
                <TbToolsKitchen2 size={24} />
                <span className={spanStyle}>Kitchen</span>
                <input
                    type="checkbox"
                    name="Kitchen"
                    checked={perks.includes("Kitchen")}
                    onChange={handleClick}
                />
            </label>
            <label className={checkboxStyle}>
                <BsPersonWorkspace size={24} />
                <span className={spanStyle}>Work Space</span>
                <input
                    type="checkbox"
                    name="Work Space"
                    checked={perks.includes("Work Space")}
                    onChange={handleClick}
                />
            </label>
            <label className={checkboxStyle}>
                <PiTelevisionSimpleLight size={24} />
                <span className={spanStyle}>TV</span>
                <input
                    type="checkbox"
                    name="TV"
                    checked={perks.includes("TV")}
                    onChange={handleClick}
                />
            </label>
            <label className={checkboxStyle}>
                <IoSnowOutline size={24} />
                <span className={spanStyle}>Aircondition</span>
                <input
                    type="checkbox"
                    name="Aircondition"
                    checked={perks.includes("Aircondition")}
                    onChange={handleClick}
                />
            </label>
            <label className={checkboxStyle}>
                <FaMountainSun size={24} />
                <span className={spanStyle}>Mountain View</span>
                <input
                    type="checkbox"
                    name="Mountain View"
                    checked={perks.includes("Mountain View")}
                    onChange={handleClick}
                />
            </label>
        </>
    );
}

export default Perks;
