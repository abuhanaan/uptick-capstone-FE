import Link from 'next/link';
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { HiOutlineEye } from "react-icons/hi2";
import { BsChatSquareText } from "react-icons/bs";
import { EmptySearch } from '../../components/empty-search';
import clsx from 'clsx';

const Jobs = () => {
    const posts = [
        { id: 1, title: 'Udacity smashed all courses with a 50% discount', body: 'Udacity smashed all courses with a 50% discount. Udacity smashed all courses with a 50% discount', author: 'James Morgan', publishDate: '25 Dec. 2023', image: '/images/post-img.png' },
        { id: 2, title: 'Google engineered a space ship for developers', body: 'Google engineered a space ship for developers. Google engineered a space ship for developers. Google engineered a space ship for developers', author: "Michael Arthur", publishDate: '01 Dec. 2023', image: '/images/post-img.png' },
    ];

    return (
        <div className="mt-6 h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[#15254C] text-2xl font-bold">Blog Posts</h1>

                <Link href='#' className="btn bg-[#477BFF] text-white">
                    <HiOutlinePlus size={20} className="stroke-2" />
                    Add New
                </Link>
            </div>

            <div className="h-full overflow-auto">
                {
                    posts.length === 0 ?
                        <EmptySearch headers={['Posts', 'Published']} />
                        :
                        <div className="overflow-x-auto overflow-y-hidden w-full h-full">
                            <table className="table table-sm border-separate border-spacing-y-6">
                                <thead>
                                    <tr>
                                        <th className="text-lg font-semibold text-black pl-16">Posts</th>
                                        <th className="text-lg font-semibold text-black ">Published</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {
                                        posts.map((post, index) => (

                                            <tr key={index} className="bg-white">
                                                <td className="w-2/3 px-7 py-8">
                                                    <Link href={`/dashboard/blog/${post.id}`}>
                                                        <div className="flex items-center gap-6">
                                                            <div className="avatar">
                                                                <div className="w-[248px] h-[160px]">
                                                                    <img src="/images/post-img.png" alt="Kuda logo" />
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-col gap-3'>
                                                                <div className="">Written by <span className='font-bold'>{post.author}</span></div>

                                                                <h3 className='line-clamp-2 text-2xl leading-9 font-bold'>{post.title}</h3>

                                                                <p className='line-clamp-2'>{post.body}</p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td className="px-7 py-8">{post.publishDate}</td>
                                                <td className='px-7 py-8 flex flex-col items-end gap-6'>
                                                    <div className="dropdown dropdown-end">
                                                        <label tabIndex={0} className="btn bg-transparent border-none shadow-none m-1 mt-14 font-bold text-xl hover:bg-transparent">
                                                            <HiOutlineEllipsisVertical size={22} />
                                                        </label>
                                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                            <li><Link href='#'>Edit</Link></li>
                                                            <li><Link href='#'>Delete</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className='flex justify-end gap-4 px-5'>
                                                        <div className='flex items-center gap-1'>
                                                            <HiOutlineEye size={24} />
                                                            <span className='text-lg font-semibold'>0</span>
                                                        </div>

                                                        <div className='flex items-center gap-1'>
                                                            <BsChatSquareText size={24} />
                                                            <span className='text-lg font-semibold'>0</span>
                                                        </div>

                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    )
}

export default Jobs