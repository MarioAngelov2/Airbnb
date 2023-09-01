import React, { useState, useEffect } from "react";
import * as api from "../../api/requester";
import { Link } from "react-router-dom";

function Home() {
    const [places, setPlaces] = useState([]);

    async function getPlaces() {
        const response = await api.getPlaces();
        setPlaces(response);
    }

    useEffect(() => {
        getPlaces();
    }, []);

    return (
        <div className="max-w-global mx-auto mt-14">
            <div className="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {places.length > 0 &&
                    places.map((place) => (
                        <Link
                            to={"/places/" + place._id}
                            key={place._id}
                            className="rounded-2xl"
                        >
                            <img
                                src={
                                    "http://localhost:5001/uploads/" +
                                    place.photos[0]
                                }
                                className="rounded-2xl object-cover aspect-square"
                                alt=""
                            />
                            <h2 className="text-lg font-semibold mt-2 truncate">
                                {place.title}
                            </h2>
                            <p className="text-sm text-gray-400 truncate">
                                {place.address}
                            </p>
                            <div className="flex items-baseline gap-1">
                                <p className="font-semibold">${place.price}</p>
                                <p className="text-sm">night</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}

export default Home;
