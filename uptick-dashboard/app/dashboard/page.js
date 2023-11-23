import OverviewCard from "../components/overview-card";
import { RiEditBoxLine } from "react-icons/ri";
import { PiToolbox } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi";

const Dashboard = () => {
    return (
        <section>
            <div>
                <h1 className="text-2xl font-bold leading-8">Welcome, Admin</h1>
                <span className="text-sm">Monday, 6th Nov. 2023</span>
            </div>

            <div className="flex flex-col sm:flex-wrap md:flex-row mt-5 gap-4">
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

            <div className="flex flex-col gap-4 mt-6">
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
                                <td>Details</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>John</td>
                                <td>Job</td>
                                <td>6/11/2023</td>
                                <td>Pending</td>
                                <td>Details</td>
                            </tr>
                            {/* row 3 */}
                            <tr className="bg-white">
                                <td>Martha</td>
                                <td>Program</td>
                                <td>6/11/2023</td>
                                <td>Pending</td>
                                <td>Details</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <td>Angelina</td>
                                <td>Job</td>
                                <td>6/11/2023</td>
                                <td>Pending</td>
                                <td>Details</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Dashboard;