import React from 'react';
import { Link } from 'react-router-dom';

const SidebarAdmin = () => {
  const sidebarItems = [
    { label: 'Jobs', link: '/admin/jobs' },
    { label: 'Applications', link: '/admin/applications' },
    { label: 'Programs', link: '/admin/programs' },
    { label: 'Blogs', link: '/admin/blogs' },
    { label: 'Requests', link: '/admin/requests' },
  ];

  return (
    <nav className="  bg-plain z-50 h-screen w-1/5 p-10 mt-10">
      <ul>
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="text-white hover:text-gray-300">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarAdmin;
