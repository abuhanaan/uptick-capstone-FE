'use client';

import React from 'react'
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PostForm({formData, setFormData}) {
    const [data, setData] = useState({
        title: '',
        author: '',
        content: '',
        tagsText: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const saveChanges = (e) => {
        e.preventDefault();
        
        setFormData(prev => (
            {
                ...prev,
                title: data.title,
                author: data.author,
                content: data.content,
                tagsText: data.tagsText
            }
        ));

        toast.success("Changes saved!", {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    return (
        <div className='py-10'>
            <form>
                {/* Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-bold mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={data.title}
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
                        value={data.author}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Post Body */}
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-bold mb-2">
                        Post Body (Markdown supported)
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={data.content}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        rows="6"
                    />
                </div>

                {/* Tags */}
                <div className="mb-4">
                    <label htmlFor="tagsText" className="block text-sm font-bold mb-2">
                        Tags <small>(Comma-separated)</small>
                    </label>
                    <input
                        type="text"
                        id="tagsText"
                        name="tagsText"
                        value={data.tagsText}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                <ToastContainer />

                {/* Submit Button */}
                <button
                    onClick={saveChanges}
                    className="bg-blue-500 text-white font-medium w-full px-4 py-3 rounded-md mt-10 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Save Changes
                </button>
            </form>
        </div>
    )
}
