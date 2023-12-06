import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div
            className='flex flex-row justify-start items-center leading-none text-white'
        >
            <div className="navbar p-6">
                <Link className="flex items-center justify-start"
                    href="/dashboard">
                    <Image src='/images/navbar-logo.png' width={202} height={32} alt='Uptick talent logo' />
                </Link>
            </div>
        </div>
    );
}
