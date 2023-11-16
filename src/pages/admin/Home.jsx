import React from 'react';
import SidebarAdmin from '../../components/AdminSideBar';

const AdminHome = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-screen bg-gradient-to-r from-blue-800 via-[#070C19] to-[#070C19]">
        <SidebarAdmin />
      <div className="md:flex-grow p-4">
        <h2 className="text-3xl font-bold mb-10 text-white">Admin Dashboard</h2>
        <p className='text-white'>Welcome to the Admin Dashboard! You can manage various aspects of the application here.</p>
      </div>
    </div>
  );
};

export default AdminHome;
