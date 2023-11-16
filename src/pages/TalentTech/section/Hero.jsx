import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="h-screen bg-[#070C19] md:bg-gradient-to-r pt-20 md:from-[#070C19] md:via-[#070C19] md:to-blue-800">
            <div className="container flex justify-center items-center h-[85vh]">
                <div className="flex flex-col gap-8 items-center md:w-2/3">
                    <h2 className="text-center text-white font-bold text-3xl sm:text-4xl md:text-5xl">
                        Uptick Talent Tech
                    </h2>

                    <p className="text-center text-sm md:text-lg text-white leading-relaxed">
                        Welcome to Uptick Talent Tech where we empower the next generation of technology leaders with cutting-edge knowledge and hands-on experience. Our Tech program offers a diverse range of opportunities to hone your skills, collaborate with industry experts, and build a successful career in the world of technology.
                    </p>

                    <Link to="programs">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-3 rounded-md">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero;