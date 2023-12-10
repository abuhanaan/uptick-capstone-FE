'use client';

import { useState } from 'react';
import { NextIcon, PreviousIcon } from '../../components/Icons';
import Markdown from 'markdown-to-jsx';

const PreviewCard = ({ formData }) => (
    <>
        <div className='bg-gray-100 rounded-lg my-10 mx-4 pt-10 pb-5 px-8'>
            <h2 className="text-2xl font-bold mb-3">Featured Job</h2>

            <div className="flex items-start justify-between flex-col xl:flex-row border-[#999999] border py-4 lg:py-7 px-8 lg:px-12 bg-[#EDF2FF] rounded-lg gap-8">
                <img src={formData.file} alt="Company logo" className='rounded-lg flex-none w-full xl:max-w-[241px]' />

                <div className="flex flex-col flex-1 xl:w-2/3">
                    <h3 className='text-lg font-bold mb-[5px]'>{formData.title}</h3>

                    <p className='text-sm line-clamp-5'>
                        {formData.companyDescription}
                    </p>

                    <h4 className='text-sm font-bold my-4'>Company <span className='font-normal ml-3'>{formData.companyName}</span></h4>

                    <h4 className='text-sm font-bold'>Deadline <span className='font-normal ml-3'>
                        {
                            new Date(formData.applicationDeadline).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            })
                        }
                    </span></h4>
                </div>
            </div>
        </div>
    </>
);

const FullPreview = ({ formData }) => (
    <div className='flex flex-col mt-12 bg-gray-100 rounded-md px-20 py-6'>
        <img src="/images/kuda-img.png" className='w-32 mb-6' alt="Company image" />

        <h1 className='text-2xl font-bold mb-4'>{formData.title}</h1>

        <div className='flex flex-col lg:flex-row lg:items-center justify-between lg:mb-4 text-sm font-bold'>
            <h4 className='mb-2 lg:mb-0'>Company <span className='font-normal ml-3'>{formData.companyName}</span></h4>
            <h4 className='mb-2 lg:mb-0'>Deadline <span className='font-normal ml-3'>
                {
                    new Date(formData.applicationDeadline).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                    })
                }
            </span></h4>
        </div>

        <div className='flex flex-col lg:flex-row lg:items-center justify-between lg:mb-4 text-sm font-bold'>
            <h4 className='mb-2 lg:mb-0'>Job Category <span className='font-normal ml-3'>{formData.jobCategory}</span></h4>
            <h4 className='mb-2 lg:mb-0'>Job Mode <span className='font-normal ml-3'>{formData.jobMode}</span></h4>
        </div>

        <div className='flex flex-col lg:flex-row lg:items-center justify-between lg:mb-4 text-sm font-bold'>
            <h4 className='mb-2 lg:mb-0'>Location <span className='font-normal ml-3'>{formData.location}</span></h4>
            <h4 className='mb-2 lg:mb-0'>Job Type <span className='font-normal ml-3'>{formData.jobType}</span></h4>
        </div>

        <div className='mb-4'>
            <h3 className='text-lg font-medium mb-2'>Company Description</h3>
            {/* <Markdown className='text-sm'> */}
            <p className='text-sm'>
                {formData.companyDescription}
            </p>
            {/* </Markdown> */}
        </div>

        <div className='mb-4'>
            <h3 className='text-lg font-medium mb-2'>Job Description/Requirements</h3>
            {/* <Markdown className='text-sm'> */}
            <p className='text-sm'>
                {formData.description}
            </p>

            <p className='text-sm mt-4'>
                {formData.requirements}
            </p>
            {/* </Markdown> */}
        </div>

        <div className='mb-4'>
            <h3 className='text-lg font-medium mb-2'>Application Form Link</h3>
            {/* <Markdown className='text-sm'> */}
            <p className='text-sm'>
                {formData.applicationFormLink}
            </p>
            {/* </Markdown> */}
        </div>
    </div>
);

export default function JobPreview({ formData, handleSubmit }) {
    const [active, setActive] = useState('card');

    function handlePrevious() {
        setActive('card');
    }

    function handleNext() {
        setActive('full');
    }

    return (
        <>
            {
                active === 'card' ? <PreviewCard formData={formData} /> : <FullPreview formData={formData} />
            }

            <div className="flex justify-center mt-10 gap-4">
                <button onClick={handlePrevious} className='disabled:opacity-25' disabled={active === 'card'}>
                    <PreviousIcon />
                </button>

                <button onClick={handleNext} className='disabled:opacity-25' disabled={active === 'full'}>
                    <NextIcon />
                </button>
            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white font-medium w-full px-4 py-3 rounded-md mt-10 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
                Sumbit
            </button>
        </>
    )
}