import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#070C19]">
            <div className="flex h-20 items-center py-4 md:py-6 px-10 md:px-14">
                <Image src='/images/navbar-logo.png' width={161} height={25} alt='Uptick logo' />
            </div>
        </main>
    )
}
