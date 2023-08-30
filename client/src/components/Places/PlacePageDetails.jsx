import React from "react";

function PlacePageDetails({place}) {
    return (
        <div className="flex flex-col gap-6  md:flex-row md:gap-16 mt-8">
            <div className="w-full md:w-[55%]">
                <div className="border-t-2 mb-6" />
                <p>{place.description}</p>
                <div className="border-t-2 mt-6" />
                <h2 className="mt-8 text-xl font-semibold">
                    What the place offers
                </h2>
                <div className="grid grid-cols-2 mt-2 gap-1">
                    {place.perks.map((perk) => (
                        <p>{perk}</p>
                    ))}
                </div>
                <div className="border-t-2 mt-6 mb-6" />
                <h2 className="text-xl font-semibold">Extra Info</h2>
                <p className="mt-2">{place.extraInfo}</p>
                <div className="border-t-2 mt-6 mb-6" />
            </div>
            <div className="border rounded-2xl shadow-lg shadow-gray-300 w-full md:w-[45%] md:h-[30%] px-6">
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
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <p className="text-sm">Check Out</p>
                        <input
                            className="border w-full h-12 px-2 rounded-2xl"
                            type="date"
                        />
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-sm">Guests</p>
                    <input placeholder="1 Guest" type="number" />
                </div>
                <button className="primary mt-2">Reserve</button>
                <p className="text-sm text-gray-500 text-center mt-2 mb-8">
                    You won't be charget yet.
                </p>
            </div>
        </div>
    );
}

export default PlacePageDetails;
