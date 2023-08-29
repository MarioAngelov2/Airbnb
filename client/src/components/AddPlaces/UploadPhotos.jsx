import axios from "axios";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import * as api from "../../api/requester";

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
        console.log(ev.target.files);

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
                        <img
                            key={photo}
                            className="rounded-2xl aspect-square object-cover"
                            src={"http://localhost:5001/uploads/" + photo}
                            alt=""
                        />
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
