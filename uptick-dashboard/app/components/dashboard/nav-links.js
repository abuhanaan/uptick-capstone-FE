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
        <div className="flex grow flex-row justify-between items-center space-x-2 md:flex-col md:items-start md:justify-start px-6  md:space-y-2 mt-6 md:mt-[51px]">
            <Link
                href='/dashboard'
                className={clsx(
                    `flex h-[48px] grow items-center justify-center gap-2 p-3 text-xl rounded-lg md:text-base text-[#9A99A0] hover:bg-[#21212B] md:hover:border-t-2 md:hover:border-blue-600 hover:text-white md:w-full md:ml-2 md:flex-none md:justify-start md:p-2 md:px-3`,
                    {
                        'bg-[#21212B] text-white md:rounded-lg md:border-t-2 md:border-blue-600 hover:text-white': pathname === '/dashboard'
                    }
                )}
            >
                <RxDashboard className="w-6" />
                <p className={clsx(`hidden md:block`, { 'text-white': pathname === '/dashboard' })}>Dashboard</p>
            </Link>

            <details className="dropdown dropdown-open grow md:flex-none flex md:w-full">
                <summary tabIndex={0} className="flex grow h-[48px] flex-row justify-center md:justify-start gap-2 items-center border-none rounded-lg p-3 md:p-2 md:px-3 bg-[#21212B] md:bg-transparent text-xl md:text-base text-[#9A99A0] hover:bg-[#21212B] md:hover:rounded-lg md:hover:border-t-2 md:hover:border-blue-600 hover:text-white md:w-full">
                    <HiOutlineUser className="w-6" />
                    <p className="hidden md:block">Programs</p>
                    <IoIosArrowDown className="hidden md:block md:ml-auto" />
                </summary>
                <ul tabIndex={0} className="p-0 shadow menu dropdown-content z-[1] bg-[#252531] text-gray-300 w-52 md:w-full mt-1">
                    <li className={clsx("hover:bg-gray-300 hover:text-[#252531] hover:font-semibold", {'bg-gray-300 text-[#252531]': pathname === '/dashboard/programs/tech'})}>
                        <Link href='/dashboard/programs/tech' className="md:pl-14">Talent Tech</Link>
                    </li>

                    <li className={clsx("hover:bg-gray-300 hover:text-[#252531] hover:font-semibold", {'bg-gray-300 text-[#252531]': pathname === '/dashboard/programs/business'})}>
                        <Link href='/dashboard/programs/business' className="md:pl-14">Talent Business</Link>
                    </li>

                    <li className={clsx("hover:bg-gray-300 hover:text-[#252531] hover:font-semibold", {'bg-gray-300 text-[#252531]': pathname === '/dashboard/programs/map'})}>
                        <Link href='/dashboard/programs/map' className="md:pl-14">Talent Map</Link>
                    </li>

                    <li className={clsx("hover:bg-gray-300 hover:text-[#252531] hover:font-semibold", {'bg-gray-300 text-[#252531]': pathname === '/dashboard/programs/beginners'})}>
                        <Link href='/dashboard/programs/beginners' className="md:pl-14">Talent Beginners</Link>
                    </li>
                </ul>
            </details>

            <Link
                href='/dashboard/jobs'
                className={clsx(
                    `flex h-[48px] grow items-center justify-center gap-2 rounded-lg p-3 bg-[#21212B] md:bg-transparent text-xl md:text-base text-[#9A99A0] hover:bg-[#21212B] md:hover:rounded-lg md:hover:border-t-2 md:hover:border-blue-600 hover:text-white md:w-full md:flex-none md:justify-start md:p-2 md:px-3`,
                    {
                        'bg-sky-100 text-blue-600': pathname === '/dashboard/jobs'
                    }
                )}
            >
                <PiToolbox className="w-6" />
                <p className={clsx(`hidden md:block`, { 'text-white': pathname === '/dashboard/jobs' })}>Jobs</p>
            </Link>

            <Link
                href='/dashboard/blog'
                className={clsx(
                    `flex h-[48px] grow items-center justify-center gap-2 rounded-lg p-3 bg-[#21212B] md:bg-transparent md:text-base text-[#9A99A0] hover:bg-[#21212B] md:hover:border-t-2 md:hover:border-blue-600 hover:text-white md:w-full md:flex-none md:justify-start md:p-2 md:px-3`,
                    {
                        'bg-sky-100 text-blue-600': pathname === '/dashboard/blog'
                    }
                )}
            >
                <BiMessageSquareEdit className="w-6" />
                <p className={clsx(`hidden md:block`, { 'text-white': pathname === '/dashboard/blog' })}>Blogs</p>
            </Link>

            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-lg bg-red-600 md:bg-transparent md:text-base text-white hover:bg-[#21212B] md:hover:rounded-lg md:hover:border-t-2 md:hover:border-red-600 hover:text-white md:w-full md:flex-none md:justify-start md:p-2 md:px-3">
                <FiLogOut className="w-6" />
                <p className="hidden md:block">Logout</p>
            </button>
        </div>
    );
}
