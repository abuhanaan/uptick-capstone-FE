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
import JdForm from './jd-form';
import JobPreview from './preview';
import FullJobPreview from './full-preview';
import { useState, useEffect } from 'react';
import { getSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { fetchJobsData } from 'app/utils/api';

const Jobs = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchDataFromApi = () => {
            getSession()
                .then(session => {
                    if (session) {
                        fetchJobsData(session.accessToken)
                            .then(responseData => {
                                setData(responseData);
                                setIsLoading(false);
                            })
                            .catch(error => {
                                // Handle error
                                console.log(error);
                                router.replace('/');
                            });
                    } else {
                        // Redirect to login page if the user is not authenticated
                        router.replace('/');
                    }
                })
                .catch(error => {
                    console.error('An error occurred during session retrieval:', error);
                });
        };

        fetchDataFromApi();
    }, []);

    const tabs = [
        { id: 'tab1', label: 'Add Thumbnail', content: <ThumbnailForm /> },
        { id: 'tab2', label: 'Job Description', content: <JdForm /> },
        { id: 'tab3', label: <span className='flex items-center gap-2'>Preview <PreviewIcon /></span>, content: <JobPreview /> }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    if (isLoading) {
        return (
            <div className="font-semibold text-xl h-screen w-full flex justify-center items-center">Loading...</div>
        )
    }

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
                    data?.length === 0 ?
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
                                        data?.map((job) => (

                                            <tr key={job.id} className="bg-white">
                                                <td className="w-2/6">
                                                    <Link href={`/dashboard/jobs/${job.id}`}>
                                                        <div className="flex items-center gap-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-6 h-6">
                                                                    <img src={job.companyLogo} alt="Company logo" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{job.title}</div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td className="">
                                                    {job.title}
                                                </td>
                                                <td className="">{job.totalApplicants}</td>
                                                <td className="">
                                                    {
                                                        new Date(job.applicationDeadline).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: 'numeric'
                                                        })
                                                    }
                                                </td>
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