'use client';

import { HiOutlinePlus } from "react-icons/hi";

function AddButton({children, toggleModal}) {
    return (
        <button onClick={() => toggleModal(prev => !prev)} className="btn bg-[#477BFF] text-white">
            <HiOutlinePlus size={20} className="stroke-2" />
            {children}
        </button>
    )
}

export default AddButton;