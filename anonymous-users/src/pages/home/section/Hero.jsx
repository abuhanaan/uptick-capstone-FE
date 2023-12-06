import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="h-screen bg-gradient-to-b pt-20 from-blue-800 via-[#070C19] to-[#070C19]">
            <div className="container flex justify-center items-center h-[80vh]">
                <div className="flex flex-col gap-8">
                    <h2 className="text-center text-white font-bold text-2xl md:text-4xl">
                        Discover Your Potential <br /> with{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                            Uptick Talent
                        </span>
                    </h2>

                    <p className="text-center text-sm text-white">
                        Uptick Talent incubates and empowers the next generation <br /> of
                        great technology and business talent through innovative <br />{" "}
                        solutions.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-5">
                        <Link to="programs">
                            <button className="bg-primary-blue text-sm text-white px-[16px] py-[10px] rounded-md  flex items-center justify-center">
                                Explore Our Programme
                            </button>
                        </Link>
                        <Link to="">
                            <button className="bg-transparent text-xs  text-white px-[16px] py-[10px] rounded-md  flex items-center justify-center border-[1px] border-neutral border-solid">
                                Explore Our Programme
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
