import OverviewCard from "../components/dashboard/overview-card";
import { RiEditBoxLine } from "react-icons/ri";
import { PiToolbox } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import PieChart from '../components/dashboard/pie-chart';
import Link from 'next/link';

const Dashboard = () => {
    const cardData = [
        { type: 'Programs', total: 200, accepted: 150, rejected: 150, pending: 150, icon: RiEditBoxLine },
        { type: 'Jobs', total: 200, accepted: 150, rejected: 150, pending: 150, icon: PiToolbox },
        { type: 'Startups', total: 200, accepted: 150, rejected: 150, pending: 150, icon: HiOutlineUserGroup }
    ];

    const recentApplicationData = [
        { name: 'Chris', application: 'Program', appliedDate: '6/11/2023', status: 'Pending' },
        { name: 'John', application: 'Job', appliedDate: '6/11/2023', status: 'Accepted' },
        { name: 'Martha', application: 'Program', appliedDate: '6/11/2023', status: 'Pending' },
        { name: 'Angelina', application: 'Job', appliedDate: '6/11/2023', status: 'Rejected' }
    ];

    const recentJobs = [
        { company: 'Kuda', role: 'UI/UX Designer', salary: '100' },
        { company: 'Spark', role: 'Software Engineer', salary: '200' },
        { company: 'Google', role: 'Data Analyst', salary: '300' },
    ];

    const chartData = {
        labels: ['120 < 1 year', '150 < 3 years', '100 3+ years'],
        data: [120, 150, 100],
        bgColor: ['#0E1933', '#2B4A99', '#A3BDFF']
    };

    return (
        <section className="overflow-x-auto">
            <div>
                <h1 className="text-2xl font-bold leading-8">Welcome, Admin</h1>
                <span className="text-sm">Monday, 6th Nov. 2023</span>
            </div>

            <div className="flex flex-col sm:flex-wrap md:flex-row mt-5 gap-4 overflow-x-auto">
                {
                    cardData.map(data => {
                        const CardIcon = data.icon;
                        return (
                            <OverviewCard key={data} type={data.type} total={data.total} accepted={data.accepted} rejected={data.rejected} pending={data.pending}>
                                <div className="padding flex justify-center items-center w-7 h-7 p-1 rounded-full bg-blue-200 text-blue-800">
                                    <CardIcon size={20} />
                                </div>
                            </OverviewCard>
                        )
                    })
                }
            </div>

            <div className="flex flex-col gap-4 mt-6 overflow-x-auto">
                <h2 className="font-bold text-lg text-[#15254C]">Recent Applicants</h2>

                <div className="overflow-x-auto">
                    <table className="table table-zebra table-md">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name of Applicants</th>
                                <th>Application</th>
                                <th>Applied Date</th>
                                <th>Status</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recentApplicationData.map(app => (
                                    <tr key={app} className="bg-white">
                                        <td>{app.name}</td>
                                        <td>{app.application}</td>
                                        <td>{app.appliedDate}</td>
                                        <td>{app.status}</td>
                                        <th>
                                            <Link href='#' className="btn btn-ghost btn-xs">Details</Link>
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col-reverse items-stretch gap-8 lg:flex-row mt-9 overflow-x-auto">
                <PieChart chartData={chartData} />

                <div className="flex-2 lg:ml-auto">
                    <h2 className="bg-white font-bold text-lg text-[#15254C] px-4 py-1 mb-2">Recent Jobs</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-lg lg:table-md">
                            <tbody className="flex flex-col gap-2">
                                {
                                    recentJobs.map(job => (
                                        <tr key={job} className="bg-white">
                                            <td className="w-2/6">
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-6 h-6">
                                                            <img src="/images/job-logo.png" alt="Kuda logo" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{job.company}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="w-2/6">
                                                {job.role}
                                            </td>
                                            <td className="w-1/6">{job.salary}</td>
                                            <th className="w-1/6">
                                                <Link href='#' className="btn btn-ghost btn-xs">Details</Link>
                                            </th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;