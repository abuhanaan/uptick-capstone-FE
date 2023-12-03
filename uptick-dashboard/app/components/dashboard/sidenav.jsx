import Link from 'next/link';
import NavLinks from './nav-links';
import Navbar from './navbar';

export default function SideNav() {
    return (
        <div className="flex h-full w-full flex-col bg-[#14141E] py-4 md:px-2">
            <Navbar />
            <NavLinks />
        </div>
    );
}
