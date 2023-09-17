import React, { useState, useEffect } from "react";
import * as api from "../../api/requester";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const URL_TO_UPLOADS =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5001/uploads/"
        : "https://airbnb-clone-64cu.onrender.com/uploads/";

function Home() {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getPlaces() {
        try {
            const response = await api.getPlaces();
            setPlaces(response);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getPlaces();
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center mt-32">
                <ClipLoader className="mb-4" />
                <span>Loading...</span>
            </div>
        );
    }

    return (
        <div className="max-w-global h-screen mx-auto mt-14 mb-14">
            <div className="grid gap-x-5 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {places.length > 0 &&
                    places.map((place) => (
                        <Link
                            to={"/places/" + place._id}
                            key={place._id}
                            className="rounded-2xl"
                        >
                            <img
                                src={URL_TO_UPLOADS + place.photos[0]}
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
