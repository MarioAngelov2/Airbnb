import React, { useState, useEffect } from "react";
import * as api from "../../api/requester";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { CiLocationOn } from "react-icons/ci";
import { PiDotsNine } from "react-icons/pi";
import { IoChevronBackOutline } from "react-icons/io5";
import PlacePageDetails from "./PlacePageDetails";

const URL_TO_UPLOADS =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5001/uploads/"
        : "https://airbnb-clone-64cu.onrender.com/uploads/";

function PlacePage() {
    const [place, setPlace] = useState([]);
    const [ready, setReady] = useState(false);
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const { id } = useParams();

    async function getPlace() {
        const response = await api.getPlace(id);
        const result = await response.json();
        setPlace(result);
        setReady(true);
    }

    useEffect(() => {
        getPlace();
    }, [id]);

    if (!ready) {
        return (
            <div className="flex flex-col items-center justify-center mt-32">
                <ClipLoader className="mb-4" />
                <span>Loading...</span>
            </div>
        );
    }

    if (showAllPhotos) {
        return (
            <div className="max-w-global mx-auto">
                <div className="absolute inset-0 bg-white min-h-screen flex flex-col gap-4">
                    <div className="bg-white fixed w-full h-14">
                        <button onClick={() => setShowAllPhotos(false)} className="bg-white absolute top-3 left-14 hover:bg-gray-100 rounded-full transition ease-in-out duration-200 py-1 px-2">
                            <IoChevronBackOutline size={30} />
                        </button>
                        <h1 className="absolute right-10 top-3 text-xl">{place.title}</h1>
                    </div>
                    <div className="mt-16 mb-12">
                        {place.photos.map((photo) => (
                            <div key={photo} className="flex justify-center px-4 md:px-16">
                                <img
                                    className="mb-8"
                                    key={photo}
                                    src={
                                        URL_TO_UPLOADS + photo
                                    }
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-global mx-auto">
            <div className="mt-12">
                <h2 className="text-2xl font-semibold">{place.title}</h2>
                <div className="flex items-center gap-1">
                    <CiLocationOn size={24} />
                    <a
                        className="my-2 font-semibold underline block"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={
                            "https://maps.google.com/?q=" +
                            encodeURIComponent(place.address)
                        }
                    >
                        {place.address}
                    </a>
                </div>
            </div>
            <div className="relative">
                <div className="grid gap-2 md:grid-cols-[2fr_1fr] mt-4">
                    <div>
                        {place.photos?.[0] && (
                            <div>
                                <img
                                    className="aspect-square object-cover rounded-2xl"
                                    src={
                                        URL_TO_UPLOADS +
                                        place.photos[0]
                                    }
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                    <div className="hidden md:grid gap-2">
                        <div>
                            {place.photos?.[1] && (
                                <div>
                                    <img
                                        className="aspect-square object-cover rounded-2xl"
                                        src={
                                            URL_TO_UPLOADS +
                                            place.photos[1]
                                        }
                                    />
                                </div>
                            )}
                        </div>
                        <div>
                            {place.photos?.[2] && (
                                <div className="overflow-hidden">
                                    <img
                                        className="aspect-square object-cover relative bottom-2 rounded-2xl"
                                        src={
                                            URL_TO_UPLOADS +
                                            place.photos[2]
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => setShowAllPhotos(true)}
                    className="bg-white border px-4 py-2 rounded-2xl flex gap-2 absolute bottom-8 right-6 grow-0 shadow-md shadow-gray-700"
                >
                    <PiDotsNine size={24} />
                    Show all photos
                </button>
            </div>
            {/* booking section */}
            <PlacePageDetails place={place} />
        </div>
    );
}

export default PlacePage;
