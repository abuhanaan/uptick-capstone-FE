import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { HiOutlinePlus } from "react-icons/hi";
import Link from 'next/link';


const TalentTech = () => {
    const programsData = [
        { title: 'Software Engineering', totalApplicants: 200 },
        { title: 'Design', totalApplicants: 200 },
        { title: 'Project Management', totalApplicants: 200 },
        { title: 'AI & Data', totalApplicants: 200 }
    ];

    return (
        <div className="mt-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[#15254C] text-2xl font-bold">Talent Tech</h1>

                <Link href='#' className="btn bg-[#477BFF] text-white">
                    <HiOutlinePlus className="stroke-2" />
                    Add New
                </Link>
            </div>

            <div className="">
                <div className="overflow-x-auto overflow-y-hidden">
                    <table className="table border-separate border-spacing-y-6">
                        <thead>
                            <tr>
                                <th className="text-lg font-semibold text-black py-1">Programs</th>
                                <th className="text-lg font-semibold text-black py-1">Number of Applicants</th>
                                <th className="py-1"></th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                programsData.map(program => (
                                    <tr key={program} className="bg-white">
                                        <td className="py-1">{program.title}</td>
                                        <td className="py-1">{program.totalApplicants}</td>
                                        <th className="py-1">
                                            <div className="dropdown dropdown-end">
                                                <label tabIndex={0} className="btn bg-transparent border-none shadow-none m-1 font-bold text-xl hover:bg-transparent">
                                                    <HiOutlineEllipsisVertical />
                                                </label>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a>Item 1</a></li>
                                                    <li><a>Item 2</a></li>
                                                    <li><a>Item 2</a></li>
                                                </ul>
                                            </div>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TalentTech;