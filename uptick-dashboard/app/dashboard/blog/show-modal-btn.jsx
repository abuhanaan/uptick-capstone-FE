'use client';

const ShowModalBtn = () => {
  return (
    <button className="bg-[#B5CAFF] px-2 py-3 font-normal" onClick={() => document.getElementById('applicant-details-modal').showModal()}>View Details</button>
  )
}

export default ShowModalBtn;