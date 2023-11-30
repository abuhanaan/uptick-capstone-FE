'use client';

export default function Modal({ children, isOpen, toggleModal }) {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-black p-4 rounded-md relative w-[80%]">
                <button
                    className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-full"
                    onClick={() => toggleModal(prev => !prev)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {children}
            </div>
        </div>
    )
}
