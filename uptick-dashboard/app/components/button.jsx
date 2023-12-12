'use client';

import { HiOutlinePlus } from "react-icons/hi";

function Button({children, submit}) {
    return (
        <button onClick={() => submit()} className="btn bg-[#477BFF] text-white">
            <HiOutlinePlus size={20} className="stroke-2" />
            {children}
        </button>
    )
}

export default Button;