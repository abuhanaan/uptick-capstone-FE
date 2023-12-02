'use client';

import React from 'react'
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function JdForm() {
    const [formData, setFormData] = useState({
        jobTitle: '',
        company: '',
        deadline: '',
        jobDescription: '',
        jobType: 'Onsite', // Default value
        jobCategory: 'Software Engineering', // Default value
        location: 'Africa', // Default value
        employmentType: 'Full-time', // Default value
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
                {/* Job Title */}
                <div className="mb-4">
                    <label htmlFor="jobTitle" className="block text-sm font-bold mb-2">
                        Job Title
                    </label>
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Company */}
                <div className="mb-4">
                    <label htmlFor="company" className="block text-sm font-bold mb-2">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Deadline */}
                <div className="mb-4">
                    <label htmlFor="deadline" className="block text-sm font-bold mb-2">
                        Deadline
                    </label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Job Description */}
                <div className="mb-4">
                    <label htmlFor="jobDescription" className="block text-sm font-bold mb-2">
                        Job Description (Markdown supported)
                    </label>
                    <textarea
                        id="jobDescription"
                        name="jobDescription"
                        value={formData.jobDescription}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        rows="6"
                    />
                </div>

                {/* Type of Job */}
                <div className="mb-4">
                    <label htmlFor="jobType" className="block text-sm font-bold mb-2">
                        Work Arrangement
                    </label>
                    <select
                        id="jobType"
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="Onsite">Onsite</option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                    </select>
                </div>

                {/* Job Category */}
                <div className="mb-4">
                    <label htmlFor="jobCategory" className="block text-sm font-bold mb-2">
                        Job Category
                    </label>
                    <select
                        id="jobCategory"
                        name="jobCategory"
                        value={formData.jobCategory}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Product Design">Product Design</option>
                        <option value="Data">Data</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Product Management">Product Management</option>
                        <option value="Sales/Operations">Sales/Operations</option>
                    </select>
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-bold mb-2">
                        Location
                    </label>
                    <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="Africa">Africa</option>
                        <option value="Africa">Europe</option>
                        <option value="Africa">Asia</option>
                        <option value="Africa">Australia</option>
                        <option value="Africa">South America</option>
                        <option value="Africa">North America</option>
                    </select>
                </div>

                {/* Job Type */}
                <div className="mb-4">
                    <label htmlFor="employmentType" className="block text-sm font-bold mb-2">
                        Job Type
                    </label>
                    <select
                        id="employmentType"
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internships">Internships</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                className="bg-blue-500 text-white font-medium w-full px-4 py-3 rounded-md mt-16 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
                Save Changes
            </button>
            </form>
        </div>
    )
}
