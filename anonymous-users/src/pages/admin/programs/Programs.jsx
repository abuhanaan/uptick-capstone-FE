import { Link } from "react-router-dom";
import { GrFormView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import ProgramDetails from "./ProgramDetails";
import { useAppContext } from "../../../context/AppContext";
import { DeleteModal } from "../components/DeleteModal";
import { Button } from "../../../components/Button";

const Programs = () => {
    let { handleOpenModal, toggleDeleteModal } = useAppContext();
    const programList = [
        {
            id: 1,
            name: "Frontend Development",
            description: "In this program, we will provide you with a structured course that will teach you all you need to know to become a front-end web developer. Work through each section, learning new skills (or improving existing ones) as you go along. Each section includes exercises and assessments to test your understanding before you move forward.",
            type: 'Software Engineering',
            curriculumOutline: ['Basic setup and learning how to learn',
                'Web standards and best practices (such as accessibility and cross-browser compatibility)',
                'HTML, the language that gives web content structure and meaning',
                'CSS, the language used to style web pages',
                'JavaScript, the scripting language used to create dynamic functionality on the web',
                'Tooling that is used to facilitate modern client-side web development.'],
            objectives: 'We will provide you with a structured course that will teach you all you need to know to become a front-end web developer. Work through each section, learning new skills (or improving existing ones) as you go along.',
            benefits: 'There are good career benefits of doing a course in front-end development. Front-end developers have good job prospects in the fields of advertising, freelancing, publishing, manufacturers, design studios, departmental stores, printing and typesetting industries, educational institutions, and even government companies.',
            prerequisites: "You don't need any previous knowledge to start this course. All you need is a computer that can run modern web browsers, an internet connection, and a willingness to learn.",
            duration: '6 months',
            applicationFormLink: 'https://applicationlink.com',
            enrollmentInformation: 'Visit the the application URL to apply.',
            startDate: "18th Nov, 2023",
            endDate: "16th Dec, 2023",
        },
        {
            id: 2,
            name: "Backend Development",
            description: "In this program, we will provide you with a structured course that will teach you all you need to know to become a front-end web developer. Work through each section, learning new skills (or improving existing ones) as you go along. Each section includes exercises and assessments to test your understanding before you move forward.",
            type: 'Software Engineering',
            curriculumOutline: ['Basic setup and learning how to learn',
                'Web standards and best practices (such as accessibility and cross-browser compatibility)',
                'HTML, the language that gives web content structure and meaning',
                'CSS, the language used to style web pages',
                'JavaScript, the scripting language used to create dynamic functionality on the web',
                'Tooling that is used to facilitate modern client-side web development.'],
            objectives: 'we will provide you with a structured course that will teach you all you need to know to become a front-end web developer. Work through each section, learning new skills (or improving existing ones) as you go along.',
            benefits: 'There are good career benefits of doing a course in front-end development. Front-end developers have good job prospects in the fields of advertising, freelancing, publishing, manufacturers, design studios, departmental stores, printing and typesetting industries, educational institutions, and even government companies.',
            prerequisites: "You don't need any previous knowledge to start this course. All you need is a computer that can run modern web browsers, an internet connection, and a willingness to learn.",
            duration: '6 months',
            applicationFormLink: 'https://applicationlink.com',
            enrollmentInformation: 'Visit the the application URL to apply.',
            startDate: "18th Nov, 2023",
            endDate: "16th Dec, 2023",
        },
    ];

    return (
        <div className="h-[100%] overflow-auto w-full px-4 py-6">
            <div className="h-[100%] overflow-auto">
                <h2 className="text-2xl text-neutral mb-4">Programs List</h2>

                <div className="w-[800px] sm:w-[1160px]  overflow-auto h-[100%] p-4 bg-light-slate-gray">
                    <table className="w-full">
                        <thead>
                            <tr className="w-full border-solid border-neutral border-b-[1px]">
                                <th className="w-1/12 text-left text-xs font-bold">ID</th>
                                <th className="w-2/12 text-left text-xs font-bold">Name</th>
                                <th className="w-4/12 text-left text-xs font-bold">
                                    Description
                                </th>
                                <th className="w-1/12 text-left text-xs font-bold">
                                    Duration
                                </th>
                                <th className="w-1/12 text-left text-xs font-bold">
                                    Start Date
                                </th>
                                <th className="w-1/12 text-left text-xs font-bold">End Date</th>
                                <th className="w-2/12 text-left text-xs font-bold">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {programList?.map((program) => (
                                <tr
                                    key={program.id}
                                    className="border-solid border-neutral border-b-[1px]"
                                >
                                    <td className="text-sm font-bold">{program.id}</td>
                                    <td className="text-sm font-semibold p-1">{program.name}</td>
                                    <td className="text-sm text-justify pr-2 leading-3 [word-spacing:-1px]">
                                        {program.description.slice(0, 60)}
                                    </td>
                                    <td className="text-xs">{program.duration}</td>
                                    <td className="text-xs">{program.startDate}</td>
                                    <td className="text-xs">{program.endDate}</td>
                                    <td className="py-1 flex gap-3 items-center mt-1">
                                        <button
                                            onClick={() => handleOpenModal()}
                                            className=" bg-primary-blue p-2 rounded-md font-semibold cursor-pointer text-white"
                                        >
                                            <GrFormView className="text-lg" />
                                        </button>

                                        <button
                                            onClick={() => toggleDeleteModal()}
                                            className="text-xs bg-red-500 p-2 rounded-md font-semibold cursor-pointer text-white"
                                        >
                                            <MdDelete className="text-lg" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-14 flex items-center justify-end gap-8">
                        <Link to="/admin/programs/create">
                            <Button text='Create Program' type='filled'></Button>
                        </Link>

                        <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center cursor-pointer w-[60px] h-[25px] text-sm bg-transparent border-solid border-neutral border-[1px]">
                                prev
                            </div>

                            <div className="flex items-center rounded-md bg-gray-300 gap-2 p-1">
                                <div className="w-[20px] h-[20px] rounded-md flex justify-center items-center bg-primary-blue text-white ">
                                    1
                                </div>
                                <div className="w-[20px] h-[20px] rounded-md flex justify-center items-center  text-white ">
                                    2
                                </div>
                                <div className="w-[20px] h-[20px] rounded-md flex justify-center items-center  text-white ">
                                    3
                                </div>
                            </div>

                            <div className="flex justify-center items-center cursor-pointer w-[60px] h-[25px] text-sm bg-transparent border-solid border-neutral border-[1px]">
                                next
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProgramDetails />
            <DeleteModal onClick={toggleDeleteModal} item='program' />
        </div>
    )
}

export default Programs;