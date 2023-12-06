'use client';

import { useState, useRef } from "react";
import { CloseIcon } from '../../components/Icons';

export default function ThumbnailForm() {
    const [selectedThumbnail, setSelectedThumbnail] = useState(null);
    const thumbnailInputRef = useRef(null);

    function handleThumbnailSelect(e) {
        const thumbnail = e.target.files[0];

        if (thumbnail) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedThumbnail(reader.result);
            }
            reader.readAsDataURL(thumbnail);
        }
    }

    function handleThumbnailRemove() {
        setSelectedThumbnail(null);
    }

    return (
        <div className="pt-12">
            <div className="py-6 rounded-md flex flex-col border-dashed border border-gray-800 justify-center items-center w-[592px] min-h-[279px] mx-auto">
                {
                    selectedThumbnail ?
                        <div className="flex items-center mx-auto w-[492px] py-7 bg-gray-50 rounded-lg relative">
                            <img src={selectedThumbnail} alt="Selected" className="mx-auto object-scale-down w-[227px] h-[227px] rounded-lg" />

                            <button onClick={handleThumbnailRemove} className='absolute right-4 top-4'>
                                <CloseIcon stroke='#FFFFFF' fill='#FF0000' />
                            </button>
                        </div>
                        :
                        <img src='/images/placeholder-img.png' alt="Image placeholder" className="mx-auto object-scale-down w-[150px] rounded-lg" />
                }

                <form className="pt-6 flex justify-center items-center bg-red w-full">
                    <label className="cursor-pointer bg-blue-500 text-white font-semibold py-4 px-6 text-center  rounded-lg mx-auto">
                        {selectedThumbnail ? 'Change Image' : 'Browse image'}
                        <input
                            ref={thumbnailInputRef}
                            id="fileUpload"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleThumbnailSelect}
                        />
                    </label>
                </form>
            </div>

            <button
                className="bg-blue-500 text-white font-medium w-full px-4 py-3 rounded-md mt-10 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
                Save Changes
            </button>
        </div>
    )
}
