import Image from 'next/image';
import Link from 'next/link';
import LoginForm from './components/login-form';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col gap-[35px] bg-[#070C19]">
            <div className="navbar py-6 px-10 md:px-14">
                <Link href='/'>
                    <Image src='/images/navbar-logo.png' width={161} height={25} alt='Uptick logo' />
                </Link>
            </div>

            <div className='flex flex-col items-center w-full pb-12'>
                <div className='flex flex-col items-stretch text-white w-[65%] max-w-[475px]'>
                    <h1 className='text-3xl sm:text-5xl font-extrabold py-4'>Welcome Back!</h1>
                    <p className='font-medium'>Login to continue</p>

                    <LoginForm />

                    <div className="mt-6 text-center font-medium">Don't have an account? <a className="link link-hover text-[#477BFF]">Sign up</a></div>
                </div>
            </div>
        </main>
    )
}
