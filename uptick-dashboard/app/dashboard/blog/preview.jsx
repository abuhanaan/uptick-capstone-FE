'use client';

import Markdown from 'markdown-to-jsx';

export default function PostPreview({ formData, handleSubmit }) {
    return (
        <div className='flex flex-col mt-12 bg-gray-100 rounded-md px-20 py-6 gap-5'>
            <h4 className=''>Written by <span className='font-bold ml-3'>{formData.author}</span></h4>

            <h1 className='text-2xl font-bold'>{formData.title}</h1>
            <h1 className='text-xl font-bold'>Tags: <span className="font-medium">{formData.tagsText}</span></h1>

            <img src={formData.imageFile} className='w-full' alt="Post image" />

            <div>
                {/* <Markdown className='text-sm'> */}
                <p className=''>
                    {formData.content}
                </p>
                {/* </Markdown> */}
            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white font-medium w-full px-4 py-3 rounded-md mt-10 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
                Publish
            </button>
        </div>
    )
}
