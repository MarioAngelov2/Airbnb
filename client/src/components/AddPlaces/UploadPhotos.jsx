import axios from "axios";
import React, { useState } from "react";
import {
    AiOutlineCloudUpload,
    AiOutlineStar,
    AiFillStar,
} from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import * as api from "../../api/requester";

const URL_TO_UPLOADS2 =
    process.env.NODE_ENV === "development"
        ? "http://localhost:5001/uploads/"
        : "https://airbnb-clone-64cu.onrender.com/uploads/";

function UploadPhotos({ uploadPhotos, setUploadPhotos }) {
    const [uploadPhotoByLink, setUploadPhotoByLink] = useState("");

    async function uploadFromLink(ev) {
        ev.preventDefault();

        const response = await api.uploadPhotoFromLink(uploadPhotoByLink);
        setUploadPhotos((prev) => [...prev, response]);
        setUploadPhotoByLink("");
    }

    async function uploadFromDevice(ev) {
        const files = ev.target.files;
        const data = new FormData();

        for (let i = 0; i < files.length; i++) {
            data.append("photos", files[i]);
        }
        try {
            const response = await api.uploadPhotoFromDevice(data);

            setUploadPhotos((prev) => {
                return [...prev, ...response];
            });
        } catch (error) {
            console.log(error);
        }
    }

    const deletePhoto = (ev, photo) => {
        ev.preventDefault();
        setUploadPhotos([
            ...uploadPhotos.filter((currentPhoto) => currentPhoto !== photo),
        ]);
    };

    const coverPhoto = (ev, photo) => {
        ev.preventDefault();
        setUploadPhotos([
            photo,
            ...uploadPhotos.filter((currentPhoto) => currentPhoto !== photo),
        ]);
    };

    return (
        <>
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Paste URL here..."
                    value={uploadPhotoByLink}
                    onChange={(ev) => setUploadPhotoByLink(ev.target.value)}
                />
                <button
                    onClick={uploadFromLink}
                    className="border rounded-2xl px-4 grow"
                >
                    Add&nbsp;photo
                </button>
            </div>
            <div className="grid gap-2 mt-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {uploadPhotos.length > 0 &&
                    uploadPhotos.map((photo) => (
                        <div className="flex relative" key={photo}>
                            <img
                                className="rounded-2xl aspect-square object-cover"
                                src={URL_TO_UPLOADS2 + photo}
                                alt=""
                            />
                            <button
                                onClick={(ev) => coverPhoto(ev, photo)}
                                className="bg-neutral-900 bg-opacity-60 px-2 py-1 rounded-full text-white absolute top-3 left-3"
                            >
                                {photo === uploadPhotos[0] && (
                                    <AiFillStar size={26} />
                                )}
                                {photo !== uploadPhotos[0] && (
                                    <AiOutlineStar size={26} />
                                )}
                            </button>
                            <button
                                onClick={(ev) => deletePhoto(ev, photo)}
                                className="bg-neutral-900 bg-opacity-60 px-2 py-1 rounded-full text-white absolute bottom-3 right-3"
                            >
                                <RiDeleteBin7Line size={26} />
                            </button>
                        </div>
                    ))}
            </div>
            <label className="flex h-32 mt-2 max-w-lg md:max-w-xs items-center justify-center cursor-pointer gap-1 border bg-transparent rounded-2xl text-gray-500">
                <AiOutlineCloudUpload size={38} />
                Upload from device
                <input
                    onChange={uploadFromDevice}
                    type="file"
                    multiple
                    hidden
                />
            </label>
        </>
    );
}

export default UploadPhotos;
