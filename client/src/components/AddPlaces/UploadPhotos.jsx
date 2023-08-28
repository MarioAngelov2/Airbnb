import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

function UploadPhotos() {
    return (
        <>
            <div className="flex gap-4">
                <input type="text" placeholder="Paste URL here..." />
                <button className="border rounded-2xl px-4 grow">
                    Add&nbsp;photo
                </button>
            </div>
            <label className="flex h-32 mt-2 max-w-xs items-center justify-center cursor-pointer gap-1 border bg-transparent rounded-2xl text-gray-500">
                <AiOutlineCloudUpload size={38} />
                Upload from device
                <input type="file" multiple hidden />
            </label>
        </>
    );
}

export default UploadPhotos;
