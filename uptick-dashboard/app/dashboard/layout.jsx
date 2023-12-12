'use client';

import SideNav from '/app/components/dashboard/sidenav';
import { FaRegBell } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import clsx from 'clsx';
import Link from 'next/link';
import { signOut } from 'next-auth/react';


const Layout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen md:flex-row md:overflow-hidden'>
            <div className='w-full flex-none md:w-64'>
                <SideNav />
            </div>

            <div className='flex-grow flex flex-col min-h-screen'>
                <div className="navbar hidden md:flex md:justify-end h-[64px]">
                    <div className="flex justify-end gap-6 w-full">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <FaRegBell className='' size={24} />
                                    <span className="badge badge-sm indicator-item bg-red-600 text-white border-none">3</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-0 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-52">
                                        <li><Link href='#'>Notification 1</Link>
                                        </li>
                                        <li><Link href='#'>Notification 2</Link></li>
                                        <li><Link href='#'>Notification 3</Link></li>
                                    </ul>
                            </div>
                        </div>

                        <Link href='#' className="border border-blue-300 p-[2px] text-blue-500 rounded-full">
                            <HiUser size={24} />
                        </Link>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost flex rounded-none px-0 hover:bg-transparent justify-between items-center">
                                <span>Admin</span>
                                <IoIosArrowDown className="" />
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-52">
                                <li><Link href='#'>Profile</Link></li>
                                <li><Link href='#'>Settings</Link></li>
                                <li><Link onClick={() => signOut()} href='#'>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex-1 overflow-y-auto p-6 md:pb-8 md:pt-4 bg-[#EDF2FF]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;