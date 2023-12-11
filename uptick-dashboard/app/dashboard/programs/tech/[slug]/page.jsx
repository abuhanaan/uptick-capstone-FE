'use client';

import Link from 'next/link';
import { LiaFileDownloadSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import clsx from 'clsx';
import ViewDetailsBtn from '../../../../components/view-details-btn';
import Modal from '../../../../components/modal';
import { useState, useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { fetchProgramApplicants } from 'app/utils/api';
import { useRouter } from 'next/navigation';
import { EmptySearch } from 'app/components/empty-search';

const Program = ({ params }) => {
    const applicants = [
        { id: 1, name: 'Adam', track: 'Frontend', status: 'Accepted', date: '12/12/2022' },
        { id: 2, name: 'Monsur', track: 'Backend', status: 'Rejected', date: '12/12/2022' },
        { id: 3, name: 'Precious', track: 'Mobile', status: 'Pending', date: '12/12/2022' },
        { id: 4, name: 'Maryam', track: 'Fullstack', status: 'Accepted', date: '12/12/2022' },
        { id: 5, name: 'Alice', track: 'Frontend', status: 'Accepted', date: '12/12/2022' },
        { id: 6, name: 'Martha', track: 'Backend', status: 'Rejected', date: '12/12/2022' },
        { id: 7, name: 'Ahmad', track: 'Mobile', status: 'Pending', date: '12/12/2022' },
        { id: 8, name: 'James', track: 'Fullstack', status: 'Accepted', date: '12/12/2022' },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const programTitle = decodeURIComponent(params.slug.split('-').join(' '));

    useEffect(() => {
        const fetchDataFromApi = async () => {
            const session = await getSession();

            if (session.accessToken) {
                const response = await fetchProgramApplicants(session.accessToken, programTitle);

                if (response.authError) {
                    router.replace('/');
                }

                if (response.error) {
                    setError(response.error);
                    setLoading(false)
                    return;
                }

                setData(response);
                setLoading(false);

                console.log(response)
            } else {
                router.replace('/');
            }
        };

        fetchDataFromApi();
    }, []);

    // console.log(data);

    if (loading) {
        return (
            <div className="font-semibold text-xl h-screen w-full flex justify-center mt-20">Loading...</div>
        )
    }

    if (error) {
        return (
            <div className="font-semibold text-xl h-screen w-full flex justify-center mt-20">
                <p>Something went wrong :(</p>
                <p>{error}</p>
            </div>
        )
    }

    return (
        <div className='mt-6'>
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
                                                    <ViewDetailsBtn toggleModal={setIsModalOpen} applicantId={applicant.id}>View details</ViewDetailsBtn>
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

            {/* Applicant's Details Modal */}
            <Modal isOpen={isModalOpen} toggleModal={setIsModalOpen} data={data}>
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
            </Modal>
        </div>
    )
}

export default Program;