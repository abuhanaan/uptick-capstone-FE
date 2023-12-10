'use client';

import React from 'react'
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function JdForm({ setFormData }) {
    const [changesSaved, setChangesSaved] = useState(false);
    const [data, setData] = useState({
        title: '',
        companyName: '',
        companyDescription: '',
        description: '',
        requirements: '',
        jobMode: 'Onsite', // Default value
        jobCategory: 'Software Engineering', // Default value
        location: 'Africa', // Default value
        jobType: 'Full-time', // Default value
        applicationFormLink: '',
        applicationDeadline: '',
        startDate: '',
        endDate: '',
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
        // Add your form submission logic here
        setFormData(prev => ({
            ...prev,
            title: data.title,
            companyName: data.companyName,
            companyDescription: data.companyDescription,
            description: data.description,
            requirements: data.requirements,
            jobMode: data.jobMode,
            jobCategory: data.jobCategory,
            location: data.location,
            jobType: data.jobType,
            applicationFormLink: data.applicationFormLink,
            applicationDeadline: new Date(data.applicationDeadline).toISOString(),
            startDate: new Date(data.startDate).toISOString(),
            endDate: new Date(data.endDate).toISOString(),
        }));

        setChangesSaved(true);
    };

    useEffect(() => {
        // Show a toast only when changesSaved is true
        if (changesSaved) {
            toast.success('Changes saved!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1500,
            });

            // Reset changesSaved to false after showing the toast
            setChangesSaved(false);
        }
    }, [changesSaved]);

    return (
        <div className='py-10'>
            <ToastContainer />
            <form>
                {/* Job Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-bold mb-2">
                        Job Title
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

                {/* Company */}
                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-sm font-bold mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={data.companyName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Company Description */}
                <div className="mb-4">
                    <label htmlFor="companyDescription" className="block text-sm font-bold mb-2">
                        Company Description (Markdown supported)
                    </label>
                    <textarea
                        id="companyDescription"
                        name="companyDescription"
                        value={data.companyDescription}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        rows="6"
                    />
                </div>

                {/* Job Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-bold mb-2">
                        Job Description (Markdown supported)
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        rows="6"
                    />
                </div>

                {/* Job Requirements */}
                <div className="mb-4">
                    <label htmlFor="requirements" className="block text-sm font-bold mb-2">
                        Job Requirements (Markdown supported)
                    </label>
                    <textarea
                        id="requirements"
                        name="requirements"
                        value={data.requirements}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                        rows="6"
                    />
                </div>

                {/* Job Mode */}
                <div className="mb-4">
                    <label htmlFor="jobMode" className="block text-sm font-bold mb-2">
                        Job Mode
                    </label>
                    <select
                        id="jobMode"
                        name="jobMode"
                        value={data.jobMode}
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
                        value={data.jobCategory}
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
                        value={data.location}
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
                    <label htmlFor="jobType" className="block text-sm font-bold mb-2">
                        Job Type
                    </label>
                    <select
                        id="jobType"
                        name="jobType"
                        value={data.jobType}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internships">Internships</option>
                    </select>
                </div>

                {/* Application Form Link */}
                <div className="mb-4">
                    <label htmlFor="applicationFormLink" className="block text-sm font-bold mb-2">
                        Application Form Link
                    </label>
                    <input
                        type="text"
                        id="applicationFormLink"
                        name="applicationFormLink"
                        value={data.applicationFormLink}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Application Deadline */}
                <div className="mb-4">
                    <label htmlFor="applicationDeadline" className="block text-sm font-bold mb-2">
                        Application Deadline
                    </label>
                    <input
                        type="date"
                        id="applicationDeadline"
                        name="applicationDeadline"
                        value={data.deadline}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Start Date */}
                <div className="mb-4">
                    <label htmlFor="startDate" className="block text-sm font-bold mb-2">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={data.startDate}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* End Date */}
                <div className="mb-4">
                    <label htmlFor="endDate" className="block text-sm font-bold mb-2">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={data.endDate}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Submit Button */}
                <button
                    onClick={saveChanges}
                    className="bg-blue-500 text-white font-medium w-full px-4 py-3 rounded-md mt-16 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Save Changes
                </button>
            </form>
        </div>
    )
}
