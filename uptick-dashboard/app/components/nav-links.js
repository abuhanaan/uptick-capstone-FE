'use client';

import { RxDashboard } from "react-icons/rx";
import { HiOutlineUser } from "react-icons/hi2";
import { PiToolbox } from "react-icons/pi";
import { BiMessageSquareEdit } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className="flex grow flex-row justify-between items-center space-x-2 md:flex-col px-6 md:space-x-0 md:space-y-2">
            <Link
                href='/dashboard'
                className={clsx(
                    `flex h-[48px] grow items-center justify-center gap-2 rounded-lg p-3 text-xl bg-white font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`,
                    {
                        'bg-sky-100 text-blue-600': pathname === '/dashboard'
                    }
                )}
            >
                <RxDashboard className="w-6" />
                <p className="hidden md:block">Dashboard</p>
            </Link>

            <details className="dropdown flex grow">
                <summary className="m-1 btn p-3 text-xl font-bold bg-white hover:bg-sky-100 hover:text-blue-600">
                    <HiOutlineUser className="w-6" />
                    <p className="hidden md:block">Programs</p>
                    <IoIosArrowDown className="hidden md:block" />
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><Link href='/'>Talent Tech</Link></li>
                    <li><Link href='/'>Talent Business</Link></li>
                    <li><Link href='/'>Talent Map</Link></li>
                    <li><Link href='/'>Talent Beginners</Link></li>
                </ul>
            </details>

            <Link
                href='/dashboard/jobs'
                className={clsx(
                    `flex h-[48px] grow items-center justify-center gap-2 rounded-lg p-3 bg-white text-xl font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`,
                    {
                        'bg-sky-100 text-blue-600': pathname === '/dashboard/jobs'
                    }
                )}
            >
                <PiToolbox className="w-6" />
                <p className="hidden md:block">Jobs</p>
            </Link>

            <Link
                href='/dashboard/blogs'
                className={clsx(
                    `flex h-[48px] grow items-center justify-center gap-2 rounded-lg p-3 bg-white text-xl font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`,
                    {
                        'bg-sky-100 text-blue-600': pathname === '/dashboard/blogs'
                    }
                )}
            >
                <BiMessageSquareEdit className="w-6" />
                <p className="hidden md:block">Blogs</p>
            </Link>

            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-lg bg-red-600 text-white p-3 text-xl font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <FiLogOut className="w-6" />
                <p className="hidden md:block">Logout</p>
            </button>
        </div>
    );
}
