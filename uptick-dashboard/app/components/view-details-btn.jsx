'use client';

const ViewDetailsBtn = ({ children, toggleModal, applicantId }) => {
    return (
        <button className="bg-[#B5CAFF] px-2 py-3 font-normal" onClick={() => toggleModal(prev => !prev)}>{children}</button>
    )
}

export default ViewDetailsBtn;