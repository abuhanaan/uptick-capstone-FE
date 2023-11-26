import Link from 'next/link';
import { LiaFileDownloadSolid } from "react-icons/lia";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import clsx from 'clsx';
import ShowModalBtn from '../../show-modal-btn';
import ModalBox from '../../modal-box';

const Program = ({ params }) => {
    const applicants = [
        { id: 1, name: 'Adam', track: 'Frontend', status: 'Accepted', date: '12/12/2022' },
        { id: 2, name: 'Monsur', track: 'Backend', status: 'Rejected', date: '12/12/2022' },
        { id: 3, name: 'Precious', track: 'Mobile', status: 'Pending', date: '12/12/2022' },
        { id: 4, name: 'Maryam', track: 'Fullstack', status: 'Accepted', date: '12/12/2022' },
        { id: 5, name: 'Alice', track: 'Frontend', status: 'Accepted', date: '12/12/2022' },
        { id: 6, name: 'Martha', track: 'Backend', status: 'Rejected', date: '12/12/2022' },
        { id: 7, name: 'Ahmad', track: 'Mobile', status: 'Pending', date: '12/12/2022' },
        { id: 8, name: 'James', track: 'Fullstack', status: 'Accepted', date: '12/12/2022' },
    ];

    const programTitle = params.slug.split('-').join(' ');

    return (
        <div className='mt-6'>
            <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:justify-between lg:items-center lg:mb-6">
                <div className="text-2xl breadcrumbs font-bold">
                    <ul>
                        <li className='text-[#C8D7FF]'><Link href='#'>Talent Tech</Link></li>
                        <li><Link href='#' className='capitalize'>{programTitle}</Link></li>
                    </ul>
                </div>

                <Link href='#' className="btn bg-[#C8D7FF] text-[#15254C] self-end lg:self-auto">
                    Download as CSV
                    <LiaFileDownloadSolid size={24} />
                </Link>
            </div>

            <div>
                <div className="overflow-x-auto overflow-y-hidden flex flex-col">
                    <table className="table table-fixed border-separate border-spacing-y-4">
                        <thead>
                            <tr>
                                <th className="text-lg font-semibold text-black">Name</th>
                                <th className="text-lg font-semibold text-black">Track</th>
                                <th className="text-lg font-semibold text-black">Status</th>
                                <th className="text-lg font-semibold text-black">Date</th>
                                <th className=""></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                applicants.map(applicant => (
                                    <tr key={applicant.id} className="bg-white">
                                        <td className="">{applicant.name}</td>
                                        <td className="">{applicant.track}</td>
                                        <td className="">
                                            <span className={clsx('rounded-full px-2 py-1 inline-block w-20 text-center',
                                                {
                                                    'bg-[#BBF5E7]': applicant.status === 'Accepted',
                                                    'bg-[#FF3434] text-[#F9FAFB]': applicant.status === 'Rejected',
                                                    'bg-[#E6E6E6]': applicant.status === 'Pending'
                                                }
                                            )}>
                                                {applicant.status}
                                            </span>
                                        </td>
                                        <td className="">{applicant.date}</td>
                                        <th className="text-end">
                                                <ShowModalBtn />
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className="flex items-stretch text-gray-400 self-end">
                        <button className="px-2"><MdOutlineKeyboardArrowLeft /></button>
                        <button className="bg-[#477BFF] text-white rounded  hover:bg-blue-500 hover:text-white px-2">1</button>
                        <button className="px-2 hover:bg-blue-500 hover:text-white rounded">2</button>
                        <button className="px-2  hover:bg-blue-500 hover:text-white">...</button>
                        <button className="px-2  hover:bg-blue-500 hover:text-white">10</button>
                        <button className="px-2 text-blue-500"><MdOutlineKeyboardArrowRight /></button>
                    </div>
                </div>
            </div>

            {/* Applicant's Details Modal */}
            <dialog id="applicant-details-modal" className="modal">
                <ModalBox />
            </dialog>
        </div>
    )
}

export default Program;