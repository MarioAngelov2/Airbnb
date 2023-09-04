import React, { useState } from "react";
import BookingWidget from "./BookingWidget";

function PlacePageDetails({ place }) {
    return (
        <div className="flex flex-col gap-6  md:flex-row md:gap-16 mt-8">
            <div className="w-full md:w-[55%]">
                <div className="border-t-2 mb-6" />
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p>{place.description}</p>
                <div className="mt-6">
                    <p>Check In: {place.checkIn}</p>
                    <p>Check Out: {place.checkOut}</p>
                    <p>Max Guests: {place.maxGuests}</p>
                </div>
                <div className="border-t-2 mt-6" />
                <h2 className="mt-8 text-xl font-semibold">
                    What the place offers
                </h2>
                <div className="grid grid-cols-2 mt-2 gap-1">
                    {place.perks.map((perk) => (
                        <p key={perk}>{perk}</p>
                    ))}
                </div>
                <div className="border-t-2 mt-6 mb-6" />
                <h2 className="text-xl font-semibold">Extra Info</h2>
                <p className="mt-2">{place.extraInfo}</p>
                <div className="border-t-2 mt-6 mb-6" />
            </div>
            <div className="border rounded-2xl shadow-lg shadow-gray-300 w-full md:w-[45%] md:h-[30%] px-6 mb-8">
                <BookingWidget place={place} />
            </div>
        </div>
    );
}

export default PlacePageDetails;
