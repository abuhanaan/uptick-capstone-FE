'use client';

import {CloseIcon} from '../components/Icons';

export default function Modal({ children, isOpen, toggleModal }) {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-30">
            <div className="bg-white px-12 pt-8 pb-6 rounded-md relative overflow-y-auto h-[90%] w-[90%] md:w-[70%] lg:w-2/3">
                <button
                    className="absolute top-8 right-8"
                    onClick={() => toggleModal(prev => !prev)}
                >
                    <CloseIcon stroke='#4D4D4D' fill='#FFFFFF' />
                </button>

                {children}
            </div>
        </div>
    )
}
