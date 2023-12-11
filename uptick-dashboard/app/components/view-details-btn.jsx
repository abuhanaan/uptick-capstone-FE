'use client';

const ViewDetailsBtn = ({ children, toggleModal, applicant, setSelectedApplicant }) => {
    function handleClick() {
        setSelectedApplicant(applicant);
        toggleModal(prev => !prev);
    }

    return (
        <button className="bg-[#B5CAFF] px-2 py-3 font-normal" onClick={handleClick}>{children}</button>
    )
}

export default ViewDetailsBtn;