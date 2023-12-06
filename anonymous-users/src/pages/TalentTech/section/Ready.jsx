import { Link } from "react-router-dom";

const Ready = () => {
    return (
        <div className="h-128 bg-gradient-to-t from-blue-800 via-[#070C19] to-[#070C19]">
            <div className="container flex justify-center items-center h-[80vh]">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-white text-center font-bold text-3xl sm:text-4xl md:text-5xl">
                        Ready to Join Uptick <span className="block mt-3">Talent Tech?</span>
                    </h2>

                    <p className="text-center text-sm md:text-lg text-white leading-relaxed w-3/5">
                        If you're ready to embark on an exciting journey of learning, growth, and innovation, Uptick Talent Tech is here to guide you. Apply for your desired program or reach out to us for more information. Your future in technology starts here.
                    </p>

                    <Link to="programs">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 rounded-md">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Ready;