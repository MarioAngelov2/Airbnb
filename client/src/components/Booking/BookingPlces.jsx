import React, { useEffect, useState } from "react";
import AccountNav from "../Account/AccountNav";
import * as api from "../../api/requester";
import { format, differenceInCalendarDays } from "date-fns";
import { BsMoon, BsCalendarDate } from "react-icons/bs";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const URL_TO_UPLOADS =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5001/uploads/"
        : "https://airbnb-clone-64cu.onrender.com/uploads/";

function BookingPlces() {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getBookings() {
        try {
            const response = await api.getBookings();
            setBookings(response);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getBookings();
    }, []);

    async function removeBooking(id) {
        try {
            await api.deleteBooking(id);
        } catch (error) {
            console.log(error);
        }
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center mt-32">
                <ClipLoader className="mb-4" />
                <span>Loading...</span>
            </div>
        );
    }

    if (bookings.length <= 0) {
        return (
            <div>
                <AccountNav />
                <div className="flex justify-center">
                    <h1 className="text-2xl font-semibold mt-12">
                        There is no bookings yet.
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-global mx-auto">
            <AccountNav />
            <div className="mt-12 mb-12 relative">
                {bookings.length > 0 &&
                    bookings.map((place) => (
                        <Link
                            to={
                                place.place === null
                                    ? "/account/bookings"
                                    : `/account/bookings/` + place._id
                            }
                            key={place?.name}
                            className="flex flex-col items-center md:flex-row gap-4 mt-4 bg-gray-100 rounded-2xl hover:shadow-md shadow-black transition duration-300 ease-in-out"
                        >
                            {place.place ? (
                                <>
                                    <div className="flex max-w-full h-46 md:max-w-[320px] md:h-44 bg-gray-300 shrink-0 rounded-tr-2xl rounded-tl-2xl md:rounded-tr-2xl md:rounded-tl-2xl md:rounded-2xl">
                                        <img
                                            className="rounded-tl-2xl md:aspect-square md:w-[240px] lg:w-[280px] rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl md:rounded-tl-2xl"
                                            src={
                                                URL_TO_UPLOADS +
                                                place.place?.photos?.[0]
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 px-4 pb-6 mt-3 text-sm md:text-base ">
                                        <h1 className="text-xl font-semibold">
                                            {place.place?.title}
                                        </h1>
                                        <div className="flex flex-row items-center text-gray-500">
                                            <BsMoon
                                                className="mr-1"
                                                size={20}
                                            />
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
                                </>
                            ) : (
                                <div className="flex flex-col items-center mx-auto py-8 px-4">
                                    <button
                                        onClick={() => removeBooking(place._id)}
                                    >
                                        <RiDeleteBin7Line
                                            className="absolute top-4 right-5"
                                            size={24}
                                        />
                                    </button>
                                    <h2 className="items-center text-xl font-semibold mb-1">
                                        Something went wrong.
                                    </h2>
                                    <p className="items-center text-center text-gray-500">
                                        The owner might have deleted this place.
                                        Try again later or contact us.
                                    </p>
                                </div>
                            )}
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default BookingPlces;
