'use client';

import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#070C19]">
            <div className="navbar py-6 px-10 md:px-14">
                <Image src='/images/navbar-logo.png' width={161} height={25} alt='Uptick logo' />
            </div>

            <div className='w-full flex justify-center items-center'>
                <div className='flex flex-col items-center text-white w-[80%]'>
                    <h1 className=''>Welcome Back!</h1>
                    <p className=''>Login to continue</p>

                    <div className="form-control w-full max-w-xs">
                        <div className="">
                            <label className="label" htmlFor='username'>
                                <span className="label-text text-white">Username</span>
                            </label>
                            <input type="text" id='username' name='username' placeholder="Username" className="input input-bordered w-full h-10 max-w-xs" />
                        </div>

                        <div className="">
                            <label className="label" htmlFor='password'>
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="text" id='password' name='password' placeholder="Password" className="input input-bordered w-full h-10 max-w-xs" />
                        </div>

                        <div className="">
                            <label className="label cursor-pointer">
                                <input type="checkbox" onChange={() => console.log('')} checked="checked" className="checkbox checkbox-primary checkbox-xs" />
                                <span className="label-text text-white">Remember me</span>
                            </label>
                        </div>

                        <button className="bg-blue-500 w-full rounded-lg h-10">Log in</button>
                    </div>

                    <div className="">Don't have an account? <a className="link link-hover">Sign up</a></div>
                </div>
            </div>
        </main>
    )
}
