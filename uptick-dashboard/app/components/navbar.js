import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div
            className='flex flex-row items-center leading-none text-white'
        >
            <div className="navbar p-6 md:px-14">
                <Link className="mb-2 flex items-center justify-start rounded-md"
                    href="/dashboard">
                    <Image src='/images/navbar-logo.png' width={202} height={32} alt='Uptick logo' />
                </Link>
            </div>
        </div>
    );
}
