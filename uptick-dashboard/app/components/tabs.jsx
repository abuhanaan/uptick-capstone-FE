'use client';

import React from 'react'
import { useState } from 'react';
import clsx from 'clsx';

export default function Tabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    function handleTabClick(tabId) {
        setActiveTab(tabId);
    }

    return (
        <div>
            <div className='flex flex-wrap -mb-px gap-x-8'>
                {
                    tabs.map(tab => (
                        <button
                            key={tab.id} onClick={() => handleTabClick(tab.id)}
                            className={clsx(`p-2.5 text-lg text-black font-medium border-b-2 border-transparent hover:border-black`,
                            {'bg-gray-50 border-b-2 border-black': activeTab === tab.id})}
                        >
                            {tab.label}
                        </button>
                    ))
                }
            </div>

            <div>
                {
                    tabs.map(tab => (
                        <div key={tab.id} className={activeTab === tab.id ? '' : 'hidden'}>
                            {tab.content}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
