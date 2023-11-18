import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../../context/AppContext";

const ProgramDetails = () => {
    let { openModal, handleCloseModal } = useAppContext();
    const program = {
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
    };

    return (
        <section
            className={`bg-plain w-full fixed top-0 left-0 h-screen z-[100] py-10 ${openModal
                ? "scale-100 transition duration-500 ease-out"
                : "scale-0 transition duration-150 ease-out"
                }`}
        >
            <div className="flex justify-center  h-[100%] w-full">
                <div className="bg-light-slate-gray rounded-md p-6 w-[90%] sm:w-[500px] overflow-auto">
                    <div className="flex justify-between items-center pb-2 border-b-[1px] border-solid border-neutral">
                        <h3 className="font-semibold text-lg">{program.name} Program</h3>
                        <span>
                            <IoClose
                                onClick={() => handleCloseModal()}
                                className="text-2xl cursor-pointer"
                            />
                        </span>
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                        <div>
                            <span className="text-sm">
                                Program Type: <small className="font-bold">{program.type}</small>
                            </span>
                        </div>

                        <div className="flex gap-1 items-center">
                            <span className="text-sm">
                                Duration: <small className="font-bold">{program.duration}</small>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-3">
                        <div className="flex gap-1 items-center">
                            <span className="text-sm">
                                Start Date: <small className="font-bold">{program.startDate}</small>
                            </span>
                        </div>
                        <div>
                            <span className="text-sm">
                                End Date: <small className="font-bold">{program.endDate}</small>
                            </span>
                        </div>
                    </div>

                    <div className="mt-4 border-t-[1px] border-solid border-neutral">
                        <div>
                            <h2 className="text-sm font-bold mt-2">Description</h2>
                            <p className="text-sm mt-2 text-justify">{program.description}</p>
                        </div>
                    </div>

                    <div className="mt-4 border-t-[1px] border-solid border-neutral">
                        <div>
                            <h2 className="text-sm font-bold mt-2">Objectives</h2>
                            <p className="text-sm mt-2 text-justify">
                                {program.objectives}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 border-t-[1px] border-solid border-neutral">
                        <div>
                            <h2 className="text-sm font-bold mt-2">Subjects Covered</h2>
                            <ul className="list-disc pl-6 sm:pl-12 text-sm mt-2">
                                {
                                    program.curriculumOutline.map((curriculum, index) => (
                                        <li key={index} className="mb-2">{curriculum}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="mt-4 border-t-[1px] border-solid border-neutral">
                        <div>
                            <h2 className="text-sm font-bold mt-2">Benefits</h2>
                            <p className="text-sm mt-2 text-justify">{program.benefits}</p>
                        </div>
                    </div>

                    <div className="mt-4 border-t-[1px] border-solid border-neutral">
                        <div>
                            <h2 className="text-sm font-bold mt-2">Prerequisites</h2>
                            <p className="text-sm mt-2 text-justify">{program.prerequisites}</p>
                        </div>
                    </div>

                    <div className="mt-4 border-t-[1px] border-solid border-neutral">
                        <div>
                            <h2 className="text-sm font-bold mt-2">Enrollment Information</h2>
                            <p className="text-sm mt-2 text-justify">
                                {program.enrollmentInformation}
                            </p>
                            <span className="text-sm font-semibold">
                                Application Link: <small className="font-normal text-sm">{program.applicationFormLink}</small>
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-end mt-20">
                        <button
                            onClick={() => handleCloseModal()}
                            className="bg-red-600 w-full text-sm font-semibold text-white px-[14px] py-[8px] rounded-md  flex items-center justify-center active:translate-y-1"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProgramDetails;