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

                <OverviewCard type='Startups' total='200' accepted='150' rejected='150' pending='150' color={{bg: '#DAE5FF', text: '#243E80'}}>
                    <div className="padding flex justify-center items-center w-7 h-7 p-1 rounded-full bg-blue-200 text-blue-800">
                        <HiOutlineUserGroup size={20} />
                    </div>
                </OverviewCard>
            </div>
        </section>
    )
}

export default Dashboard;