import OverviewCard from "../components/overview-card";
import { RiEditBoxLine } from "react-icons/ri";
import { PiToolbox } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";
import PieChart from '../components/pie-chart';

const Dashboard = () => {
    return (
        <section className="overflow-x-auto">
            <div>
                <h1 className="text-2xl font-bold leading-8">Welcome, Admin</h1>
                <span className="text-sm">Monday, 6th Nov. 2023</span>
            </div>

            <div className="flex flex-col sm:flex-wrap md:flex-row mt-5 gap-4 overflow-x-auto">
                <OverviewCard type='Programs' total='200' accepted='150' rejected='150' pending='150'>
                    <div className="padding flex justify-center items-center w-7 h-7 p-1 rounded-full bg-blue-200 text-blue-800">
                        <RiEditBoxLine size={20} />
                    </div>
                </OverviewCard>

                <OverviewCard type='Jobs' total='200' accepted='150' rejected='150' pending='150'>
                    <div className="padding flex justify-center items-center w-7 h-7 p-1 rounded-full bg-blue-200 text-blue-800">
                        <PiToolbox size={20} />
                    </div>
                </OverviewCard>

                <OverviewCard type='Startups' total='200' accepted='150' rejected='150' pending='150' color={{ bg: '#DAE5FF', text: '#243E80' }}>
                    <div className="padding flex justify-center items-center w-7 h-7 p-1 rounded-full bg-blue-200 text-blue-800">
                        <HiOutlineUserGroup size={20} />
                    </div>
                </OverviewCard>
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
                            {/* row 1 */}
                            <tr className="bg-white">
                                <td>Chris</td>
                                <td>Program</td>
                                <td>6/11/2023</td>
                                <td>Pending</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Details</button>
                                </th>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>John</td>
                                <td>Job</td>
                                <td>6/11/2023</td>
                                <td>Pending</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Details</button>
                                </th>
                            </tr>
                            {/* row 3 */}
                            <tr className="bg-white">
                                <td>Martha</td>
                                <td>Program</td>
                                <td>6/11/2023</td>
                                <td>Pending</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Details</button>
                                </th>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td>Angelina</td>
                                <td>Job</td>
                                <td>6/11/2023</td>
                                <td>Pending</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Details</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex flex-col-reverse items-stretch gap-8 lg:flex-row mt-9 overflow-x-auto">
                <PieChart />

                <div className="flex-2 lg:ml-auto">
                    <h2 className="bg-white font-bold text-lg text-[#15254C] px-4 py-1 mb-2">Recent Jobs</h2>
                    <div className="overflow-x-auto">
                        <table className="table table-lg lg:table-md">
                            <tbody className="flex flex-col gap-2">
                                <tr className="bg-white">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-6 h-6">
                                                    <img src="/images/job-logo.png" alt="Kuda logo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Kuda</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        UI/UX Designer
                                    </td>
                                    <td>100</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Details</button>
                                    </th>
                                </tr>
                                <tr className="bg-white">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-6 h-6">
                                                    <img src="/images/job-logo.png" alt="Kuda logo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Spark</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Software Engineer
                                    </td>
                                    <td>200</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Details</button>
                                    </th>
                                </tr>
                                <tr className="bg-white">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-6 h-6">
                                                    <img src="/images/job-logo.png" alt="Kuda logo" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Google</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Data Analyst
                                    </td>
                                    <td>300</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Details</button>
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;