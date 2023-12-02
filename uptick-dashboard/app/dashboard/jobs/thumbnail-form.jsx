'use client';

import { useState, useRef } from "react";
import { CloseIcon } from '../../components/Icons';
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import clsx from "clsx";

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
        <div className="py-9">
            {
                selectedThumbnail ?
                    <div className="flex items-center mx-auto w-[492px] py-7 bg-gray-50 rounded-lg relative">
                        <img src={selectedThumbnail} alt="Selected" className="mx-auto object-scale-down w-[227px] h-[227px] rounded-lg" />

                        <button onClick={handleThumbnailRemove} className='absolute right-4 top-4'>
                            <CloseIcon stroke='#FFFFFF' fill='#FF0000' />
                        </button>
                    </div>
                    :
                    <img src='/images/placeholder-img.png' alt="Image placeholder" className="mx-auto object-scale-down w-[641px] h-[227px] rounded-lg" />
            }

            <div className="pt-12 flex justify-center items-center">
                <label className="cursor-pointer bg-blue-500 text-white font-semibold py-4 text-center w-full rounded-lg mx-auto">
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
            </div>
            {/* <button className="w-full bg-[#477BFF] text-white font-semibold py-4 mt-12 rounded-lg">Save Changes</button> */}
        </div>
    )
}
