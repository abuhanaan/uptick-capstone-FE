import OverviewCard from "../components/dashboard/overview-card";
import { RiEditBoxLine } from "react-icons/ri";
import { PiToolbox } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import PieChart from '../components/dashboard/pie-chart';
import Link from 'next/link';
import Welcome from '../components/dashboard/welcome';
import { getSession, useSession } from 'next-auth/react';
import { authOptions } from 'app/api/auth/[...nextauth]/route';
import ViewDetailsBtn from "app/components/view-details-btn";
import Modal from 'app/components/modal';
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';

async function getData() {
    const session = await getServerSession(authOptions);
    const token = session.accessToken;

    const response = await fetch('https://upthick-talent-teama.onrender.com/admin/home', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
        },
        cache: 'no-store',
    });

    if (response.status === 401 || response.statusText === 'Unauthorized') {
        redirect('/');
    }

    return response.json();
}

const Dashboard = async () => {

    const recentJobs = [
        { company: 'Kuda', role: 'UI/UX Designer', salary: '100' },
        { company: 'Spark', role: 'Software Engineer', salary: '200' },
        { company: 'Google', role: 'Data Analyst', salary: '300' },
    ];

    const chartData = {
        labels: ['3 < 1 year', '2 < 3 years', '1 3+ years'],
        data: [3, 2, 1],
        bgColor: ['#0E1933', '#2B4A99', '#A3BDFF']
    };

    const { stats, recentApplicants, recentJobApplicants } = await getData();
    // const data = await getData();
    // console.log(data);

    const cardData = [
        { type: 'Programs', total: stats.programApplicants, accepted: stats.acceptedprogramApplications, rejected: stats.rejectedprogramApplications, pending: stats.pendingprogramApplications, icon: RiEditBoxLine },
        { type: 'Jobs', total: stats.jobApplicants, accepted: stats.acceptedJobApplications, rejected: stats.rejectedJobApplications, pending: stats.pendingJobApplications, icon: PiToolbox },
        { type: 'Startups', total: stats.startups, accepted: stats.acceptedStartupApplications, rejected: stats.rejectedStartupApplications, pending: stats.pendingStartupApplications, icon: HiOutlineUserGroup }
    ];

    return (
        <section className="overflow-x-auto">
            <Welcome />

            <div className="flex flex-col sm:flex-wrap md:flex-row mt-5 gap-4 overflow-x-auto">
                {
                    cardData.map((data, index) => {
                        const CardIcon = data.icon;
                        return (
                            <OverviewCard key={index} type={data.type} total={data.total} accepted={data.accepted} rejected={data.rejected} pending={data.pending}>
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
                                {/* <th>View</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recentApplicants.map((applicant) => (
                                    <tr key={applicant.id} className="bg-white">
                                        <td>{`${applicant.firstname} ${applicant.lastName}`}</td>
                                        <td>{applicant.programPreferenceID ? 'Program' : 'Job'}</td>
                                        <td>
                                            {
                                                new Date(applicant.applicationDate).toLocaleDateString('en-GB', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric'
                                                })
                                            }
                                        </td>
                                        <td className="capitalize">{applicant.status}</td>
                                        <th>
                                            {/* <ViewDetailsBtn toggleModal={setIsModalOpen} className="btn btn-ghost btn-xs">Details</ViewDetailsBtn> */}
                                        </th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col-reverse items-stretch gap-24 lg:flex-row mt-9 overflow-x-auto">
                <PieChart chartData={chartData} />

                <div className="flex-grow lg:ml-auto">
                    <h2 className="bg-white font-bold text-lg text-[#15254C] px-4 py-1">Recent Jobs</h2>
                    <div className="overflow-x-auto">
                        <table className="table border-separate border-spacing-y-4 table-lg lg:table-md">
                            <tbody className="">
                                {
                                    recentJobs.map((job, index) => (
                                        <tr key={index} className="bg-white">
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
                                                {/* <ViewDetailsBtn toggleModal={setIsModalOpen} className="btn btn-ghost btn-xs">Details</ViewDetailsBtn> */}
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