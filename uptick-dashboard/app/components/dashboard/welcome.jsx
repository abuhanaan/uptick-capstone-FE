'use client';

import { useSession } from "next-auth/react";

export default function Welcome() {
    const {data: session} = useSession();

    return (
        <div>
            <h1 className="text-2xl font-bold leading-8">Welcome, {session?.user?.username}</h1>
            <span className="text-sm">Monday, 6th Nov. 2023</span>
        </div>
    )
}
