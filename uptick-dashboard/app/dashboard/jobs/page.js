'use client';

import Link from 'next/link';
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { EmptySearch } from '../../components/empty-search';
import { PreviewIcon } from '../../components/Icons';
import clsx from 'clsx';
import AddButton from '../../components/add-button';
import Modal from '../../components/modal';
import Tabs from '../../components/tabs';
import ThumbnailForm from './thumbnail-form';
import { useState } from 'react';

const Jobs = () => {
    const recentJobs = [
        { id: 1, company: 'Kuda', role: 'UI/UX Designer', totalApplicants: 25, deadline: '25 Dec. 2023' },
        { id: 2, company: 'Spark', role: 'Software Engineer', totalApplicants: 38, deadline: '01 Dec. 2023' },
        { id: 3, company: 'Google', role: 'Data Analyst', totalApplicants: 15, deadline: '31 Jan. 2024' },
    ];

    const tabs = [
        { id: 'tab1', label: 'Add Thumbnail', content: <ThumbnailForm /> },
        { id: 'tab2', label: 'Job Details', content: <p>This is the content of Tab 2.</p> },
        { id: 'tab3', label: <span className='flex items-center gap-2'>Preview <PreviewIcon /></span>, content: <p>This is the content of Tab 3.</p> }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="mt-6 h-screen w-full">
            <div className="flex justify-between items-center mb-6 w-full">
                <h1 className="text-[#15254C] text-2xl font-bold">Jobs</h1>

                <AddButton toggleModal={setIsModalOpen}>Add New</AddButton>

                <Modal isOpen={isModalOpen} toggleModal={setIsModalOpen}>
                    <h2 className='text-2xl font-medium mb-8'>Edit</h2>
                    <Tabs tabs={tabs} />
                </Modal>

            </div>

            <div className="h-full">
                {
                    recentJobs.length === 0 ?
                        <EmptySearch headers={['Company', 'Role', 'No. of applicants', 'Deadline']} />
                        :
                        <div className="overflow-x-auto overflow-y-hidden h-full">
                            <table className="table table-sm border-separate border-spacing-y-6">
                                <thead>
                                    <tr>
                                        <th className="text-lg font-semibold text-black py-1">Company</th>
                                        <th className="text-lg font-semibold text-black py-1">Role</th>
                                        <th className="text-lg font-semibold text-black py-1">No. of applicants</th>
                                        <th className="text-lg font-semibold text-black py-1">Deadline</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {
                                        recentJobs.map((job, index) => (

                                            <tr key={index} className="bg-white">
                                                <td className="w-2/6">
                                                    <Link href={`/dashboard/jobs/${job.id}`}>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-6 h-6">
                                                                    <img src="/images/job-logo.png" alt="Kuda logo" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{job.company}</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td className="">
                                                    {job.role}
                                                </td>
                                                <td className="">{job.totalApplicants}</td>
                                                <td className="">{job.deadline}</td>
                                                <td className='text-right'>
                                                    <div className="dropdown dropdown-end">
                                                        <label tabIndex={0} className="btn bg-transparent border-none shadow-none m-1 font-bold text-xl hover:bg-transparent">
                                                            <HiOutlineEllipsisVertical />
                                                        </label>
                                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                            <li><Link href={`/dashboard/jobs/${job.id}`}>View Applicants</Link></li>
                                                            <li><Link href='#'>Edit Job</Link></li>
                                                            <li><Link href='#'>Delete Job</Link></li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    )
}

export default Jobs