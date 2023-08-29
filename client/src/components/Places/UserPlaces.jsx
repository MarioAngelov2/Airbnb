import React, { useEffect, useState } from "react";
import AccountNav from "../Account/AccountNav";
import { Link } from "react-router-dom";
import * as api from "../../api/requester";

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
            <div className="mt-12">
                {places.length > 0 &&
                    places.map((place) => (
                        <Link
                            to={`/account/places/${place._id}`}
                            key={place}
                            className="flex gap-4 bg-gray-100 rounded-2xl p-4"
                        >
                            <div className="flex w-42 h-44 bg-gray-300 shrink-0">
                                <img
                                    className="object-cover"
                                    src={
                                        "http://localhost:5001/uploads/" +
                                        place.photos[0]
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-col gap-3 grow-0 shrink max-h-44 overflow-hidden">
                              <h2 className="font-semibold text-lg">{place.title}</h2>
                              <p className="text-sm">{place.description}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default Places;
