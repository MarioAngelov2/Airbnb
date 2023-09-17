import React, { useState, useEffect } from "react";
import * as api from "../../api/requester";
import { useParams, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { CiLocationOn } from "react-icons/ci";
import { format, differenceInCalendarDays } from "date-fns";
import { BsMoon, BsCalendarDate } from "react-icons/bs";

const URL_TO_UPLOADS =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5001/uploads/"
        : "https://airbnb-clone-64cu.onrender.com/uploads/";

function BookedPlace() {
    const [bookedPlace, setBookedPlace] = useState([]);
    const [ready, setReady] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    async function getPlace() {
        try {
            const response = await api.getBookedPlace(id);
            setBookedPlace(response);
            setReady(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPlace();
    }, []);

    async function removeBooking(id) {
        try {
            await api.deleteBooking(id);
            navigate("/account/bookings");
        } catch (error) {
            console.log(error);
        }
    }

    if (!ready) {
        return (
            <div className="flex flex-col items-center justify-center mt-32">
                <ClipLoader className="mb-4" />
                <span>Loading...</span>
            </div>
        );
    }

    return (
        <div className="max-w-global mx-auto">
            <div className="mt-12">
                <h1 className="text-2xl font-semibold">
                    {bookedPlace.place.title}
                </h1>
                <div className="flex items-center gap-1">
                    <CiLocationOn size={24} />
                    <a
                        className="my-2 font-semibold underline block"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={
                            "https://maps.google.com/?q=" +
                            encodeURIComponent(bookedPlace.place.address)
                        }
                    >
                        {bookedPlace.place.address}
                    </a>
                </div>
                <div className="bg-gray-100 rounded-xl text-sm md:text-base px-2 md:px-6 py-4 mt-2">
                    <h3 className="font-semibold text-lg mb-2">
                        Your booking information:
                    </h3>
                    <div className="flex flex-row items-center text-gray-500">
                        <BsMoon className="mr-1" size={20} />
                        <p className="mr-3">
                            {differenceInCalendarDays(
                                new Date(bookedPlace.checkOut),
                                new Date(bookedPlace.checkIn)
                            )}{" "}
                            nights:
                        </p>
                        <BsCalendarDate className="mr-1" />
                        <p className="mr-2">
                            {format(
                                new Date(bookedPlace.checkIn),
                                "MMM-dd-yyyy"
                            )}
                        </p>
                        to
                        <BsCalendarDate className="ml-2 mr-1" />
                        <p>
                            {format(
                                new Date(bookedPlace.checkOut),
                                "MMM-dd-yyyy"
                            )}
                        </p>
                    </div>
                    <div className="mt-4">
                        <h6 className="text-base font-semibold">Booked by:</h6>
                        <p className="text-gray-500 text-base">
                            {bookedPlace.name}
                        </p>
                    </div>
                    <div className="mt-4">
                        <h6 className="text-base font-semibold">
                            Total price:
                        </h6>
                        <p className="text-2xl font-bold">
                            ${bookedPlace.price}
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid gap-2 md:grid-cols-[2fr_1fr] mt-4">
                <div>
                    {bookedPlace.place.photos?.[0] && (
                        <div>
                            <img
                                className="aspect-square object-cover rounded-2xl"
                                src={
                                    URL_TO_UPLOADS +
                                    bookedPlace.place.photos?.[0]
                                }
                                alt=""
                            />
                        </div>
                    )}
                </div>
                <div className="hidden md:grid gap-2">
                    <div>
                        {bookedPlace.place.photos?.[1] && (
                            <div>
                                <img
                                    className="aspect-square object-cover rounded-2xl"
                                    src={
                                        URL_TO_UPLOADS +
                                        bookedPlace.place.photos?.[1]
                                    }
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        {bookedPlace.place.photos?.[2] && (
                            <div className="overflow-hidden">
                                <img
                                    className="aspect-square object-cover rounded-2xl relative bottom-2 "
                                    src={
                                        URL_TO_UPLOADS +
                                        bookedPlace.place.photos?.[2]
                                    }
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="border-t-2 mt-6" />
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => removeBooking(bookedPlace._id)}
                    className="primary max-w-[200px] md:max-w-md mb-4"
                >
                    Delete booking
                </button>
            </div>
        </div>
    );
}

export default BookedPlace;
