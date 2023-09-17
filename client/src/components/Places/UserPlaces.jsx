import React, { useEffect, useState } from "react";
import AccountNav from "../Account/AccountNav";
import { Link } from "react-router-dom";
import * as api from "../../api/requester";

const URL_TO_UPLOADS =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5001/uploads/"
        : "https://airbnb-clone-64cu.onrender.com/uploads/";

function Places() {
    const [places, setPlaces] = useState([]);

    async function getUserPlaces() {
        try {
            const response = await api.getUserPlaces();
            setPlaces(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserPlaces();
    }, []);

    return (
        <div className="max-w-global mx-auto">
            <AccountNav />
            <div className="flex items-center justify-center mt-12">
                <Link
                    to={"/account/places/new"}
                    className="bg-primary text-white rounded-full py-3 px-5"
                >
                    Add new place
                </Link>
            </div>
            <div className="mt-12 mb-12">
                {places.length > 0 &&
                    places.map((place) => (
                        <Link
                            to={`/account/places/${place._id}`}
                            key={place._id}
                            className="flex flex-col md:flex-row gap-4 mt-4 bg-gray-100 hover:shadow-md shadow-black transition duration-300 ease-in-out rounded-2xl p-4"
                        >
                            <div className="flex max-w-full h-46 md:max-w-[320px] md:h-44 bg-gray-300 shrink-0">
                                <img
                                    className="object-fill aspect-auto max-h-[320px] md:aspect-square md:w-64"
                                    src={
                                        URL_TO_UPLOADS +
                                        place.photos[0]
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col gap-3 grow-0 shrink max-h-44 overflow-hidden">
                                <h2 className="font-semibold text-lg">
                                    {place.title}
                                </h2>
                                <p className="text-sm">{place.description}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default Places;
