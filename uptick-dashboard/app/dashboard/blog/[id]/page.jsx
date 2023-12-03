import Link from 'next/link';

const BlogPost = () => {

    return (
        <div className="mt-6">
            <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:justify-between lg:items-center lg:mb-6">
                <div className="text-2xl breadcrumbs font-bold">
                    <ul>
                        <li className='text-[#C8D7FF]'><Link href='/dashboard/blog'>Blog</Link></li>
                        <li className='capitalize'>Preview</li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col mt-12 bg-gray-50 rounded-md px-36 py-10 gap-5'>
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
            </div>
        </div>
    )
}

export default BlogPost;