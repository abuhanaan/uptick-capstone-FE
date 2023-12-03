'use client';

import React from 'react'
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function PostForm() {
    const [formData, setFormData] = useState({
        postTitle: '',
        author: '',
        postBody: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className='py-10'>
            <form onSubmit={handleSubmit}>
                {/* Post Title */}
                <div className="mb-4">
                    <label htmlFor="postTitle" className="block text-sm font-bold mb-2">
                        Post Title
                    </label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={formData.postTitle}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Author */}
                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-bold mb-2">
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Post Body */}
                <div className="mb-4">
                    <label htmlFor="postBody" className="block text-sm font-bold mb-2">
                        Post Body (Markdown supported)
                    </label>
                    <textarea
                        id="postBody"
                        name="postBody"
                        value={formData.jobDescription}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        rows="6"
                    />
                </div>

                {/* Submit Button */}
                <button
                    className="bg-blue-500 text-white font-medium w-full px-4 py-3 rounded-md mt-10 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Save Changes
                </button>
            </form>
        </div>
    )
}
