'use client';

import { useState } from "react";
import Link from 'next/link';

const ModalBox = () => {
    const [accepted, setAccepted] = useState(false);

    return (
        <div className="modal-box">
            <form method="dialog">
                <button className="btn btn-xs btn-circle btn-ghost absolute right-6 top-6 border-gray-700 border ">✕</button>
            </form>

            <div className="flex flex-col gap-y-3 pb-3">
                <button className="btn bg-[#999999] text-white self-start">
                    Download Resume/CV
                </button>

                <div className="text-sm">
                    <h3 className="mb-1">Full Name</h3>
                    <p className="text-[#5988FF]">Oreoluwa Christopher</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Email</h3>
                    <p className="text-[#5988FF]">oreoluwa@yahoo.com</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Phone Number</h3>
                    <p className="text-[#5988FF]">+234 901 777 9568</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Current company</h3>
                    <p className="text-[#5988FF]">CitiServe, Lagos</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">LinkedIn URL</h3>
                    <Link href='https://linkedin.com/in/oreoluwa' className="text-[#5988FF]">https://linkedin.com/in/oreoluwa</Link>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Twitter URL</h3>
                    <Link href='https://twitter.com/oreoluwa' className="text-[#5988FF]">https://twitter.com/oreoluwa</Link>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Github URL</h3>
                    <Link href='https://github.com/oreoluwa' className="text-[#5988FF]">https://github.com/oreoluwa</Link>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Portfolio URL</h3>
                    <Link href='https://portfolio.com' className="text-[#5988FF]">https://portfolio.com</Link>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Other Websites</h3>
                    <Link href='https://otherwebsites.com' className="text-[#5988FF]">https://otherwebsites.com</Link>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1 capitalize">Additional Information</h3>
                    <p className="text-[#5988FF]">Information that will make you stand out and prioritized over other applicants... Information that will make you stand out and prioritized over other applicants... Information that will make you stand out and prioritized over other applicants... Information that will make you stand out and prioritized over other applicants...</p>
                </div>

                <div className="flex items-center gap-4 text-sm mt-4">
                    <div className="flex items-center gap-x-2">
                        <input type="radio" name="radio-1" className="radio" /> Accept
                    </div>

                    <div className="flex items-center gap-x-2">
                        <input type="radio" name="radio-1" className="radio" /> Reject
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBox;