import React, { useEffect, useState } from "react";
import AccountNav from "../Account/AccountNav";
import * as api from "../../api/requester";
import { format, differenceInCalendarDays } from "date-fns";
import { BsMoon, BsCalendarDate } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";

function BookingPlces() {
    const [bookings, setBookings] = useState([]);

    async function getBookings() {
        const response = await api.getBookings();
        setBookings(response);
    }

    useEffect(() => {
        getBookings();
    }, []);

    return (
        <div className="max-w-global mx-auto">
            <AccountNav />
            <div className="mt-12 mb-12">
                {bookings.length > 0 &&
                    bookings.map((place) => (
                        <div
                            key={place.name}
                            className="flex flex-col md:flex-row gap-4 mt-4 bg-gray-100 rounded-2xl"
                        >
                            <div className="flex max-w-full h-46 md:max-w-[320px] md:h-44 bg-gray-300 shrink-0 rounded-tr-2xl rounded-tl-2xl md:rounded-tr-2xl md:rounded-tl-2xl md:rounded-2xl">
                                <img
                                    className="rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-tl-2xl"
                                    src={
                                        "http://localhost:5001/uploads/" +
                                        place.place.photos?.[0]
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col gap-4 px-4 pb-6 mt-3 text-sm md:text-base ">
                                <h1 className="text-xl font-semibold">
                                    {place.place.title}
                                </h1>
                                <div className="flex flex-row items-center text-gray-500">
                                    <BsMoon className="mr-1" size={20} />
                                    <p className="mr-3">
                                        {differenceInCalendarDays(
                                            new Date(place.checkOut),
                                            new Date(place.checkIn)
                                        )}{" "}
                                        nights:
                                    </p>
                                    <BsCalendarDate className="mr-1" />
                                    <p className="mr-2">
                                        {format(
                                            new Date(place.checkIn),
                                            "MMM-dd-yyyy"
                                        )}
                                    </p>
                                    to
                                    <BsCalendarDate className="ml-2 mr-1" />
                                    <p>
                                        {format(
                                            new Date(place.checkOut),
                                            "MMM-dd-yyyy"
                                        )}
                                    </p>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <AiOutlineCreditCard size={26} />
                                    <p className="font-semibold text-lg">
                                        Total price: ${place.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default BookingPlces;
