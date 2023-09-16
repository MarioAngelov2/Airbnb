import React, { useEffect, useState, useContext } from "react";
import { differenceInCalendarDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import * as api from "../../api/requester";
import { UserContext } from "../../context/userContext";

function BookingWidget({ place }) {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [guests, setGuests] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [allInputsEmpty, setAllInputsEmpty] = useState(true);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    let numberOfNights = 0;

    if (checkIn && checkOut) {
        numberOfNights = differenceInCalendarDays(
            new Date(checkOut),
            new Date(checkIn)
        );
    }

    let totalSum = numberOfNights * place.price;
    const displaySum = numberOfNights > 0 && `$${totalSum}`;

    const data = {
        checkIn,
        checkOut,
        guests,
        name,
        phone,
        price: numberOfNights * place.price,
    };

    async function bookingPlace() {
        await api.bookPlace(place._id, data);
        navigate("/account/bookings");
    }

    useEffect(() => {
        const areInputsEmpty =
            !checkIn && !checkOut && !guests && !name && !phone;

        setAllInputsEmpty(areInputsEmpty);
    }, [checkIn, checkOut, guests, name, phone]);

    return (
        <>
            <div className="flex items-center mt-8 gap-1">
                <h2 className="text-lg font-semibold">${place.price}</h2>
                <p>per night</p>
            </div>
            <div className="flex flex-col lg:flex-row mt-4">
                <div className="flex flex-col w-full gap-1">
                    <p className="text-sm">Check In</p>
                    <input
                        className="border w-full h-12 px-2 rounded-2xl"
                        type="date"
                        value={checkIn}
                        onChange={(ev) => setCheckIn(ev.target.value)}
                    />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <p className="text-sm">Check Out</p>
                    <input
                        className="border w-full h-12 px-2 rounded-2xl"
                        type="date"
                        value={checkOut}
                        onChange={(ev) => setCheckOut(ev.target.value)}
                    />
                </div>
            </div>
            <div className="mt-2">
                <p className="text-sm">Guests</p>
                <input
                    placeholder="1 Guest"
                    type="number"
                    value={guests}
                    onChange={(ev) => setGuests(ev.target.value)}
                />
            </div>
            {numberOfNights > 0 && (
                <div className="mb-8">
                    <p className="text-sm">Your name</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(ev) => setName(ev.target.value)}
                    />
                    <p className="text-sm">Your phone number</p>
                    <input
                        type="number"
                        value={phone}
                        onChange={(ev) => setPhone(ev.target.value)}
                    />
                </div>
            )}
            {user ? (
                <>
                    <button
                        disabled={allInputsEmpty}
                        onClick={bookingPlace}
                        className="primary mt-2"
                    >
                        Reserve {displaySum}
                    </button>
                    <p className="text-sm text-gray-500 text-center mt-2 mb-8">
                        You won't be charget yet.
                    </p>
                </>
            ) : (
                <div className="flex justify-center p-6">
                    <h1 className="text-center text-lg font-semibold">
                        You must be logged in to book this place.
                    </h1>
                </div>
            )}
        </>
    );
}

export default BookingWidget;
