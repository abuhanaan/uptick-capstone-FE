'use client';

import Image from 'next/image';
import Link from 'next/link';

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

                    <div className="form-control w-full mt-12">
                        <div className="w-full mb-5">
                            <label className="label" htmlFor='username'>
                                <span className="label-text text-white">Username</span>
                            </label>
                            <input type="text" id='username' name='username' placeholder="Username" className="input input-bordered border-[#999999] bg-[#4D4D4D] text-[#F5F5F5] font-medium text-sm h-10 w-full" />
                        </div>

                        <div className="mb-0">
                            <label className="label" htmlFor='password'>
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" id='password' name='password' placeholder="Password" className="input input-bordered font-medium border-[#999999] bg-[#4D4D4D] text-[#F5F5F5] text-sm h-10 w-full" />
                        </div>

                        <div className="mb-10 mt-[7px]">
                            <label className="label flex justify-start cursor-pointer">
                                <input type="checkbox" onChange={() => console.log('')} checked="checked" className="checkbox checkbox-primary checkbox-xs mr-4" />
                                <span className="label-text text-white">Remember me</span>
                            </label>
                        </div>

                        <Link href='/dashboard'>
                            <button className="bg-blue-500 w-full rounded-lg h-10">Log in</button>
                        </Link>
                    </div>

                    <div className="mt-6 text-center font-medium">Don't have an account? <a className="link link-hover text-[#477BFF]">Sign up</a></div>
                </div>
            </div>
        </main>
    )
}
