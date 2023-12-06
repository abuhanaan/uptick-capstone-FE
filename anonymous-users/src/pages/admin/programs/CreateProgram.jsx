import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateProgram = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        type: "",
        duration: "",
        applicationFormLink: "",
        curriculumOutline: "",
        enrollmentInformation: "",
        objectives: "",
        benefits: "",
        prerequisites: "",
        startDate: "",
        endDate: "",
    });

    const handleOnChange = (e) => {
        console.log(e.target.name, e.target.value);
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formDetails);

        setFormData({
            name: "",
            description: "",
            type: "",
            duration: "",
            applicationFormLink: "",
            curriculumOutline: "",
            enrollmentInformation: "",
            objectives: "",
            benefits: "",
            prerequisites: "",
            startDate: "",
            endDate: "",
        });

        navigate("/admin/programs");
    };
    return (
        <div className="h-[100%] overflow-auto w-full px-4 py-6">
            <div className="w-full">
                <h2 className="text-white text-xl mb-3 pb-2 ">Create new program</h2>

                <div className="p-6 bg-light-slate-gray rounded-md">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-5">
                                <div className="flex">
                                    <label className="w-full sm:w-1/3">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                                        type="text"
                                        placeholder="Program name"
                                        aria-label="Program name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>

                                <div className="flex">
                                    <label className="w-full sm:w-1/3">
                                        Type <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                                        type="text"
                                        placeholder="Type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>

                                <div className="flex ">
                                    <label className="w-full sm:w-1/3">
                                        Description <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px]
                  border-slate-300 border-solid focus:outline-none"
                                        type="text"
                                        placeholder="Description"
                                        required
                                        name="description"
                                        value={formData.description}
                                        onChange={handleOnChange}
                                    ></textarea>
                                </div>

                                <div className="flex ">
                                    <label className="w-full sm:w-1/3">
                                        Duration <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                                        type="text"
                                        placeholder="Program duration"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>

                                <div className="flex ">
                                    <label className="w-full sm:w-1/3">
                                        Curriculum outline <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                                        type="text"
                                        placeholder="Curriculum outline"
                                        name="curriculumOutline"
                                        value={formData.curriculumOutline}
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>

                                <div className="flex ">
                                    <label className="w-full sm:w-1/3">
                                        Objectives <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px]
                  border-slate-300 border-solid focus:outline-none"
                                        type="text"
                                        placeholder="Objectives"
                                        required
                                        name="objectives"
                                        value={formData.objectives}
                                        onChange={handleOnChange}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="flex flex-col gap-5 lg:border-l lg:pl-6">
                                <div className="flex">
                                    <label className="w-full sm:w-1/3">
                                        Prerequisites <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px]
                  border-slate-300 border-solid focus:outline-none"
                                        type="text"
                                        placeholder="Prerequisites"
                                        required
                                        name="prerequisites"
                                        value={formData.prerequisites}
                                        onChange={handleOnChange}
                                    ></textarea>
                                </div>

                                <div className="flex ">
                                    <label className="w-full sm:w-1/3">
                                        Benefits <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px]
                  border-slate-300 border-solid focus:outline-none"
                                        type="text"
                                        placeholder="Benefits"
                                        required
                                        name="benefits"
                                        value={formData.benefits}
                                        onChange={handleOnChange}
                                    ></textarea>
                                </div>

                                <div className="flex ">
                                    <label className="w-full sm:w-1/3">
                                        Enrollment information <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px]
                  border-slate-300 border-solid focus:outline-none"
                                        type="text"
                                        placeholder="Enrollment information"
                                        required
                                        name="enrollmentInformation"
                                        value={formData.enrollmentInformation}
                                        onChange={handleOnChange}
                                    ></textarea>
                                </div>

                                <div className="flex ">
                                    <label className="w-full sm:w-1/3">
                                        Application link <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                                        type="text"
                                        placeholder="Application link"
                                        name="applicationFormLink"
                                        value={formData.applicationFormLink}
                                        onChange={handleOnChange}
                                        required
                                    />
                                </div>

                                <div className="flex ">
                                    <label className="w-full sm:w-1/3">
                                        Start date <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                                        type="date"
                                        required
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleOnChange}
                                    />
                                </div>

                                <div className="flex ">
                                    <label className="w-full sm:w-1/3">
                                        End date <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        className="w-full sm:w-2/3 rounded-md p-2 border-[1px] border-slate-300 border-solid focus:outline-none"
                                        type="date"
                                        required
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleOnChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-10">
                            <button className="btn-filled text-md font-bold">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateProgram;