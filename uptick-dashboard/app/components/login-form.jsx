'use client';

import { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
    const router = useRouter();
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState(null);

    function handleDataChange(e) {
        const { name, value } = e.target;

        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await signIn('credentials', {
                redirect: false,
                ...loginData,
            });

            if (res.error) {
                setErrorMessage('Invalid login details.');
                return;
            }

            router.replace('dashboard');

        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    async function handleLogin(e) {
        e.preventDefault();

        const { username, password } = loginData;

        try {
            const response = await fetch('https://upthick-talent-teama.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();

                console.log(data.accessToken);

                // Set the token in an HttpOnly cookie with a 1-hour expiration
                document.cookie = `token=${data.accessToken}; Path=/; HttpOnly; Max-Age=${60 * 60}`;

                // Redirect to a protected page
                router.replace('/dashboard');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Authentication failed');
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            setError('An error occurred. Please try again.');
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={`form-control w-full ${errorMessage ? 'mt-6' : 'mt-12'}`}>
            {errorMessage && (
                <div className="flex h-8 items-end space-x-1 mb-6" aria-live="polite" aria-atomic="true" >
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                </div>
            )}

            <div className="w-full mb-5">
                <label className="label" htmlFor='username'>
                    <span className="label-text text-white">Username</span>
                </label>
                <input type="text" id='username' name='username' placeholder="Username" className="input input-bordered border-[#999999] bg-[#4D4D4D] text-[#F5F5F5] font-medium text-sm h-10 w-full" value={loginData.username} onChange={handleDataChange} required />
            </div>

            <div className="mb-0">
                <label className="label" htmlFor='password'>
                    <span className="label-text text-white">Password</span>
                </label>
                <input type="password" id='password' name='password' placeholder="Password" className="input input-bordered font-medium border-[#999999] bg-[#4D4D4D] text-[#F5F5F5] text-sm h-10 w-full" value={loginData.password} onChange={handleDataChange} required />
            </div>

            <div className="mb-10 mt-[7px]">
                <label className="label flex justify-start cursor-pointer">
                    <input type="checkbox" className="checkbox checkbox-primary checkbox-xs mr-4" />
                    <span className="label-text text-white">Remember me</span>
                </label>
            </div>

            <LoginButton />
        </form>
    )
}

function LoginButton() {
    return (
        <button className="bg-blue-500 w-full rounded-lg h-10">Log in</button>
    )
}