import React, { useState } from "react";
import AccountNav from "../Account/AccountNav";
import UploadPhotos from "./UploadPhotos";
import Perks from "./Perks";

function AddPlaces() {
    const [title, setTitle] = useState("");
    const [address, setAddress] = useState("");
    const [uploadPhotos, setUploadPhotos] = useState([]);
    const [description, setDescription] = useState("");
    const [perks, setPerks] = useState("");
    const [extraInfo, setExtraInfo] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckout] = useState("");
    const [maxGuests, setMaxGuests] = useState("");
    const [price, setPrice] = useState("");

    const inputHeader = (text) => (
        <h2 className="text-2xl font-semibold mt-8">{text}</h2>
    );

    const inputDescription = (description) => (
        <p className="text-sm text-gray-400">{description}</p>
    );

    const preInput = (header, description) => (
        <>
            {inputHeader(header)}
            {inputDescription(description)}
        </>
    );

    const data = {
        title,
        address,
        uploadPhotos,
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests,
        price,
    };

    async function addPlace(ev) {
        ev.preventDefault();
    
        try {
            const response = await fetch('http://127.0.0.1:5001/add-place', {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...data})
            });

            return response.json();

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <AccountNav />
            <div className="max-w-global mx-auto flex flex-col items-center justify-center">
                <form action="" method="POST" className="max-w-4xl w-full">
                    {preInput(
                        "Title",
                        "Title for your place. Should be simple and short"
                    )}
                    <input
                        type="text"
                        placeholder="Title, for example: My awesome place..."
                        value={title}
                        onChange={(ev) => setTitle(ev.target.value)}
                    />
                    {preInput("Address", "Address to this place")}
                    <input
                        type="text"
                        placeholder="Add address of the place..."
                        value={address}
                        onChange={(ev) => setAddress(ev.target.value)}
                    />
                    {preInput("Upload photo by link", "Paste photo URL")}
                    <UploadPhotos
                        uploadPhotos={uploadPhotos}
                        setUploadPhotos={setUploadPhotos}
                    />
                    {preInput(
                        "Description",
                        "Add description to your place..."
                    )}
                    <textarea
                        type="text"
                        placeholder="Add description..."
                        value={description}
                        onChange={(ev) => setDescription(ev.target.value)}
                    />
                    {preInput("Perks", "Add perks that belong to your place")}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
                        <Perks perks={perks} setPerks={setPerks} />
                    </div>
                    {preInput("Extra Info", "Add extra info for your place")}
                    <textarea
                        type="text"
                        placeholder="Add extra info..."
                        value={extraInfo}
                        onChange={(ev) => setExtraInfo(ev.target.value)}
                    />
                    {preInput("Chek In & Check Out", "Add your dates here")}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="mt-2">
                            <p>Check In</p>
                            <input
                                type="text"
                                placeholder="13:00"
                                className="border"
                                value={checkIn}
                                onChange={(ev) => setCheckIn(ev.target.value)}
                            />
                        </div>
                        <div className="mt-2">
                            <p>Check Out</p>
                            <input
                                type="text"
                                placeholder="10:00"
                                className="border"
                                value={checkOut}
                                onChange={(ev) => setCheckout(ev.target.value)}
                            />
                        </div>
                        <div className="mt-2">
                            <p>Max Guests</p>
                            <input
                                type="text"
                                placeholder="5"
                                className="border"
                                value={maxGuests}
                                onChange={(ev) => setMaxGuests(ev.target.value)}
                            />
                        </div>
                        <div className="mt-2">
                            <p>Price</p>
                            <input
                                type="text"
                                placeholder="$220"
                                className="border"
                                value={price}
                                onChange={(ev) => setPrice(ev.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={addPlace} className="max-w-md primary mt-10 mb-4">
                            Add place
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPlaces;
