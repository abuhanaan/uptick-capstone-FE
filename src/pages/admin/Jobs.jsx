// src/pages/admin/Jobs.js
import React, { useState } from 'react';
import SidebarAdmin from '../../components/AdminSideBar';

const Jobs = () => {
  // Sample job data
  const jobData = [
    { id: 1, title: 'Job 1', description: 'Description for Job 1', startDate: '2023-01-01', endDate: '2023-01-31' },
    { id: 2, title: 'Job 2', description: 'Description for Job 2', startDate: '2023-02-01', endDate: '2023-02-28' },
    // Add more job data as needed
  ];

  // Pagination
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = jobData.slice(indexOfFirstJob, indexOfLastJob);

  // Handle next page click
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Handle previous page click
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row h-screen bg-gradient-to-r from-blue-800 via-[#070C19] to-[#070C19]">
     <SidebarAdmin />
      <div className="md:flex-grow p-4">
        <h2 className="text-3xl font-bold mb-10 text-white">Job Lists</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Id</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Start Date</th>
                <th className="py-2 px-4 border-b">End Date</th>
              </tr>
            </thead>
            <tbody>
              {currentJobs.map(job => (
                <tr key={job.id}>
                  <td className="py-2 px-4 border-b">{job.id}</td>
                  <td className="py-2 px-4 border-b">{job.title}</td>
                  <td className="py-2 px-4 border-b">{job.description}</td>
                  <td className="py-2 px-4 border-b">{job.startDate}</td>
                  <td className="py-2 px-4 border-b">{job.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={indexOfLastJob >= jobData.length}
            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 ${indexOfLastJob >= jobData.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
