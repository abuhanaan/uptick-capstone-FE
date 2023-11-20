import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-6 bg-[070C19]">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
                <Image src='/images/navbar-logo.png' width={202} height={32} alt='Uptick logo' />
            </div>
        </main>
    )
}
