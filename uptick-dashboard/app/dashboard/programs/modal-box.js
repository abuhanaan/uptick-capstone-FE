'use client';

import { useState } from "react";

const ModalBox = () => {
    const [accepted, setAccepted] = useState(false);

    return (
        <div className="modal-box">
            <form method="dialog">
                <button className="btn btn-xs btn-circle btn-ghost absolute right-6 top-6 border-gray-700 border ">✕</button>
            </form>

            <div className="flex flex-col gap-y-3 pb-3">
                <div className="text-sm">
                    <h3 className="mb-1">First Name</h3>
                    <p className="text-[#5988FF]">Oreoluwa</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Last Name</h3>
                    <p className="text-[#5988FF]">Rasheed</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Phone Number</h3>
                    <p className="text-[#5988FF]">+234 901 777 9568</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Cite, State</h3>
                    <p className="text-[#5988FF]">Lagos, Lagos State</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">How many years of programming experience do you have?</h3>
                    <p className="text-[#5988FF]">1-2 years</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">What stack are you most proficient in or looking to land a job in this fellowship?</h3>
                    <p className="text-[#5988FF]">Frontend</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">If you are a front end engineer, what technology do you use?</h3>
                    <p className="text-[#5988FF]">ReactJS</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">If you are a back end engineer, what technology do you use?</h3>
                    <p className="text-[#5988FF]">NodeJS</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">If you are a mobile engineer, what technology do you use?</h3>
                    <p className="text-[#5988FF]">Flutter (Dart Programming)</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Other tracks? List your most proficient technologies below?</h3>
                    <p className="text-[#5988FF]">Python, Django</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">What are your career goals between the next two years?</h3>
                    <p className="text-[#5988FF]">To become a mid-level frontend developer</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Link to Github</h3>
                    <p className="text-[#5988FF]">https://github.com/OreoluwaRasheed</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Link to portfolio or one of your completed Projects</h3>
                    <p className="text-[#5988FF]">https://linktr.ee/rasheedore</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">Are you able to commit at least 40 hours per week to participate fully in the fellowship?</h3>
                    <p className="text-[#5988FF]">Yes</p>
                </div>

                <div className="text-sm">
                    <h3 className="mb-1">How did you get to know about the fellowship??</h3>
                    <p className="text-[#5988FF]">GDSC Unilag</p>
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