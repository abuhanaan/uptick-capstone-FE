'use client';

const ViewDetailsBtn = ({ toggleModal }) => {
    return (
        <button className="bg-[#B5CAFF] px-2 py-3 font-normal" onClick={() => toggleModal(prev => !prev)}>View Details</button>
    )
}

export default ViewDetailsBtn;