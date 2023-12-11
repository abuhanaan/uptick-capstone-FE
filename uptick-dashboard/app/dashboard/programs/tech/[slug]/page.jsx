'use client';

import Link from 'next/link';
import { LiaFileDownloadSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import clsx from 'clsx';
import ViewDetailsBtn from 'app/components/view-details-btn';
import Modal from 'app/components/modal';
import ConfirmModal from 'app/components/confirm-modal';
import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { fetchProgramApplicants } from 'app/utils/api';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { EmptySearch } from 'app/components/empty-search';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Program = ({ params }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('pending');
    const router = useRouter();
    // const reloader = useRouter();
    const baseUrl = process.env.BASE_URL;

    const programTitle = decodeURIComponent(params.slug.split('-').join(' '));

    useEffect(() => {
        setSelectedStatus(selectedApplicant?.status);
    }, [selectedApplicant]);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            const session = await getSession();

            if (session.accessToken) {
                const response = await fetchProgramApplicants(session.accessToken, programTitle);

                if (response.authError) {
                    return router.replace('/');
                }

                if (response.error) {
                    setError(response.error);
                    setLoading(false)
                }

                setData(response);
                setLoading(false);
            } else {
                return router.replace('/');
            }
        };

        fetchDataFromApi();
    }, []);

    function confirmUpdateStatus() {
        setSelectedApplicant(prev => ({
            ...prev,
            status: selectedStatus
        }));
        setIsConfirmOpen(false);

        // toast.success(`Applicant ${selectedStatus} successfully`, {
        //     position: toast.POSITION.TOP_CENTER,
        //     autoClose: 2000,
        // });

        updateApplicantStatus();
    }

    function handleRadioChange(e) {
        const selected = e.target.value;
        setSelectedStatus(selected);
        setIsConfirmOpen(true);
    }

    function updateApplicantStatus() {
        const applicantId = selectedApplicant.id;
        const updateRemoteStatus = async () => {
            const session = await getSession();
            console.log(selectedStatus);
            const response = await fetch(`https://uptick-teama-capstone.onrender.com/applications/${applicantId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.accessToken}`
                },
                body: JSON.stringify({status: selectedStatus}),
            });

            if (response.ok) {
                toast.success(`Applicant ${selectedStatus} successfully`, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });

                setTimeout(() => {
                    window.location.reload();
                }, 3000)

            } else {
                toast.error(`Error updating applicant status`, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                });
            }

            // console.log(response);
        }

        updateRemoteStatus();
    }

    if (loading) {
        return (
            <div className="font-semibold text-xl h-screen w-full flex justify-center mt-20">Loading...</div>
        )
    }

    if (error) {
        return (
            <div className="font-semibold text-xl h-screen w-full mx-auto mt-20">
                <p>Something went wrong :(</p>
                <p>{error}</p>
            </div>
        )
    }

    return (
        <div className='mt-6'>
            <ToastContainer />
            <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:justify-between lg:items-center lg:mb-6">
                <div className="text-2xl breadcrumbs font-bold">
                    <ul>
                        <li className='text-[#C8D7FF]'><Link href='/dashboard/programs/tech'>Talent Tech</Link></li>
                        <li><Link href={`/dashboard/programs/tech/${params.slug}`} className='capitalize'>{programTitle === 'Ai & Data' ? 'AI & Data' : programTitle}</Link></li>
                    </ul>
                </div>

                <Link href='#' className="btn bg-[#C8D7FF] text-[#15254C] self-end lg:self-auto">
                    Download as CSV
                    <LiaFileDownloadSolid size={24} />
                </Link>
            </div>

            <div>
                {
                    data?.length === 0 ?
                        <EmptySearch headers={['Name', 'Track', 'Status', 'Date']} /> :
                        <div className="overflow-x-auto overflow-y-hidden flex flex-col">
                            <table className="table table-fixed border-separate border-spacing-y-4">
                                <thead>
                                    <tr>
                                        <th className="text-lg font-semibold text-black">Name</th>
                                        <th className="text-lg font-semibold text-black">Track</th>
                                        <th className="text-lg font-semibold text-black">Status</th>
                                        <th className="text-lg font-semibold text-black">Date</th>
                                        <th className=""></th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {
                                        data?.map(applicant => (
                                            <tr key={applicant.id} className="bg-white">
                                                <td className="">{applicant.firstname} {applicant.lastName}</td>
                                                <td className="">{applicant.track}</td>
                                                <td className="">
                                                    <span className={clsx('rounded-full px-2 py-1 inline-block w-20 text-center capitalize',
                                                        {
                                                            'bg-[#BBF5E7]': applicant.status === 'accepted',
                                                            'bg-[#FF3434] text-[#F9FAFB]': applicant.status === 'rejected',
                                                            'bg-[#E6E6E6]': applicant.status === 'pending'
                                                        }
                                                    )}>
                                                        {applicant.status}
                                                    </span>
                                                </td>
                                                <td className="">
                                                    {
                                                        new Date(applicant.applicationDate).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: 'numeric'
                                                        })
                                                    }
                                                </td>
                                                <th className="text-end">
                                                    <ViewDetailsBtn toggleModal={setIsModalOpen} applicant={applicant} setSelectedApplicant={setSelectedApplicant}>View details</ViewDetailsBtn>
                                                </th>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            {
                                data.length > 10 &&
                                <div className="flex items-stretch text-gray-400 self-end">
                                    <button className="px-2"><MdOutlineKeyboardArrowLeft /></button>
                                    <button className="bg-[#477BFF] text-white rounded  hover:bg-blue-500 hover:text-white px-2">1</button>
                                    <button className="px-2 hover:bg-blue-500 hover:text-white rounded">2</button>
                                    <button className="px-2  hover:bg-blue-500 hover:text-white">...</button>
                                    <button className="px-2  hover:bg-blue-500 hover:text-white">10</button>
                                    <button className="px-2 text-blue-500"><MdOutlineKeyboardArrowRight /></button>
                                </div>
                            }
                        </div>
                }
            </div>

            {/* Confirmation Modal */}
            <ConfirmModal isOpen={isConfirmOpen} toggleModal={setIsConfirmOpen}>
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 className="text-lg font-semibold leading-6 text-gray-900" id="modal-title">Update selection status</h3>
                                <div className="mt-2">
                                    <p className="text-base text-gray-600">Proceed to update applicant's selection status</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" onClick={confirmUpdateStatus} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Update</button>
                        <button type="button" onClick={() => setIsConfirmOpen(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                    </div>
                </div>
            </ConfirmModal>

            {/* Applicant's Details Modal */}
            <Modal isOpen={isModalOpen} toggleModal={setIsModalOpen}>
                <div className="flex flex-col gap-y-3 pb-3">
                    <Link href={selectedApplicant?.resume} target='_blank' className="btn bg-[#999999] text-white self-start">
                        Download Resume/CV
                    </Link>

                    <div className="text-sm">
                        <h3 className="mb-1">Full Name</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.firstname} {selectedApplicant?.lastName}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Email</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.email}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Phone Number</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.phone}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Residential Address</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.address}, {selectedApplicant?.city}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Application Date</h3>
                        <p className="text-[#5988FF]">
                            {
                                new Date(selectedApplicant?.applicationDate).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                })
                            }
                        </p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Availability</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.availability}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Career Goal</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.careerGoals}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">GitHub Link</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.githubLink}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Portfolio Link / Link to Previous Project</h3>
                        <Link href={selectedApplicant?.portfolioLink} className="text-[#5988FF]">{selectedApplicant?.portfolioLink}</Link>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Program Category</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.programCategory}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Program Type</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.programType}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Status</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.status}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Track</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.track}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Type</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.type}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Years of Experience</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.yearsOfExp}</p>
                    </div>

                    <div className="text-sm">
                        <h3 className="mb-1">Fellowship Info</h3>
                        <p className="text-[#5988FF]">{selectedApplicant?.fellowshipInfo}</p>
                    </div>

                    <div className="flex items-center gap-4 text-sm mt-4">
                        <div className="flex items-center gap-x-2">
                            <input type="radio" name="status" className="radio" value={'accepted'} checked={selectedStatus === 'accepted'} onChange={handleRadioChange} /> Accept
                        </div>

                        <div className="flex items-center gap-x-2">
                            <input type="radio" name="status" className="radio" value={'pending'} checked={selectedStatus === 'pending'} onChange={handleRadioChange} /> Pending
                        </div>

                        <div className="flex items-center gap-x-2">
                            <input type="radio" name="status" className="radio" value={'rejected'} checked={selectedStatus === 'rejected'} onChange={handleRadioChange} /> Reject
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Program;