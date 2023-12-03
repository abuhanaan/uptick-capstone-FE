'use client';

import Markdown from 'markdown-to-jsx';

export default function PostPreview() {
    return (
            <div className='flex flex-col mt-12 bg-gray-100 rounded-md px-20 py-6 gap-5'>
                <h4 className=''>Written by <span className='font-bold ml-3'>Joseph Ojo</span></h4>

                <h1 className='text-2xl font-bold'>Udacity smashed all courses with a 50% discount</h1>

                <img src="/images/post-img.png" className='w-full' alt="Post image" />

                <div>
                    {/* <Markdown className='text-sm'> */}
                    <p className=''>

                        Two weeks ago, Bolt announced it would remain in Kenya despite the National Transport and Safety Authority's (NTSA) refusal to renew its licence. <br /> <br />

                        Why did the Authority refuse to do so? The NTSA alleged that the company broke transportation laws — charging an unauthorised 5% booking fee on top of the 18% commission that the NTSA has established. <br /> <br />

                        Here’s what’s new: Yesterday, Bolt Kenya disclosed it would suspend its 5% booking fee until further information from the NTSA is received, while it reiterated that it still operates in Kenya. <br /> <br />

                        Bolt contends that Section 32(4) of the NTSA Act, which allows operations to continue until the licence application process is officially determined, makes the current licence legally valid. <br /> <br />

                        On October 28, 2022, the Transport Network Company granted the mobility startup a licence. <br /> <br />

                        So, the renewal procedure, according to a letter from NTSA to Bolt, should have been completed yesterday, Monday, October 30, 2023.
                    </p>
                    {/* </Markdown> */}
                </div>

                <button
                    className="bg-blue-500 text-white font-medium w-full px-4 py-3 rounded-md mt-10 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Publish
                </button>
            </div>
    )
}
