import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { HiOutlinePlus } from "react-icons/hi";
import Link from 'next/link';
import { getServerSession } from "next-auth";
import { authOptions } from "app/api/authOptions";
import { redirect } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function getData() {
    const session = await getServerSession(authOptions);
    const token = session.accessToken;
    const baseUrl = process.env.BASE_URL;

    try {
        const response = await fetch(`${baseUrl}/applications?programCategory=${encodeURIComponent('Talent Beginners')}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            next: { revalidate: 240 },
        });

        if (response.status === 401 || response.statusText === 'Unauthorized') {
            return { authError: 'Unauthorized' };
        }

        return response.json();
    } catch (err) {
        return { error: err };
    }
}

const TalentBeginners = async () => {
    const data = await getData();

    if (data.authError) {
        toast.error(`Please login to continue`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
        return redirect('/');
    } else if (data.error) {
        toast.error(
            `
                An error occurred, please try again.
                ${data.error}
            `,
            {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
            });
    }

    const programsData = Object.entries(data).map(([title, totalApplicants], index) => ({
        id: index + 1,
        slug: title.toLowerCase().replace(/\s+/g, '-'),
        title,
        totalApplicants
    }));

    return (
        <div className="mt-6 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-[#15254C] text-2xl font-bold">Talent Beginners</h1>

                <Link href='#' className="btn bg-[#477BFF] text-white">
                    <HiOutlinePlus size={20} className="stroke-2" />
                    Add New
                </Link>
            </div>

            <div className="h-full">
                <div className="overflow-x-auto overflow-y-hidden h-full">
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
                                    <tr key={program.id} className="bg-white">
                                        <td className="py-1"><Link href={`/dashboard/programs/tech/${program.slug}`}>{program.title}</Link></td>
                                        <td className="py-1">{program.totalApplicants}</td>
                                        <th className="py-1">
                                            <div className="dropdown dropdown-end">
                                                <label tabIndex={0} className="btn bg-transparent border-none shadow-none m-1 font-bold text-xl hover:bg-transparent">
                                                    <HiOutlineEllipsisVertical />
                                                </label>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><Link href={`/dashboard/programs/tech/${program.slug}`}>View Applicants</Link></li>
                                                    <li><Link href='#'>Open Application</Link></li>
                                                    <li><Link href='#'>Close Application</Link></li>
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

export default TalentBeginners;