import React from "react";
import AccountNav from "../Account/AccountNav";
import UploadPhotos from "./UploadPhotos";
import Perks from "./Perks";

function AddPlaces() {
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
                    />
                    {preInput("Address", "Address to this place")}
                    <input
                        type="text"
                        placeholder="Add address of the place..."
                    />
                    {preInput("Upload photo by link", "Paste photo URL")}
                    <UploadPhotos />
                    {preInput(
                        "Description",
                        "Add description to your place..."
                    )}
                    <textarea type="text" placeholder="Add description..." />
                    {preInput("Perks", "Add perks that belong to your place")}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
                        <Perks />
                    </div>
                    {preInput("Extra Info", "Add extra info for your place")}
                    <textarea type="text" placeholder="Add extra info..." />
                    {preInput("Chek In & Check Out", "Add your dates here")}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="mt-2">
                            <p>Check In</p>
                            <input
                                type="text"
                                placeholder="13:00"
                                className="border"
                            />
                        </div>
                        <div className="mt-2">
                            <p>Check Out</p>
                            <input
                                type="text"
                                placeholder="10:00"
                                className="border"
                            />
                        </div>
                        <div className="mt-2">
                            <p>Max Guests</p>
                            <input
                                type="text"
                                placeholder="5"
                                className="border"
                            />
                        </div>
                        <div className="mt-2">
                            <p>Price</p>
                            <input
                                type="text"
                                placeholder="$220"
                                className="border"
                            />
                        </div>

                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPlaces;
