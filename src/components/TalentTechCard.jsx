import { Link } from "react-router-dom";
import { Button } from "./Button";

const TalentTechCard = ({ program }) => {
    const isEven = Number(program.id) % 2 === 0;
    
    return (
        <div className={`flex flex-col-reverse ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-6 md:gap-8`}>
            <div className="flex flex-col gap-4 md:w-1/2">
                <h2 className="text-white text-3xl lg:text-4xl font-semibold">
                    {program.title}
                </h2>

                <h3 className="text-white text-xl font-medium">{program.subTitle}</h3>

                <p className="text-white text-base lg:text-lg">
                    {program.desc}
                </p>

                <div className="flex flex-wrap gap-[10px] sm:w-3/5 md:w-2/3">
                    {
                        program.tracks.map((track, index) => (
                            <span key={index} className="bg-white text-[#2F2F2F] text-sm px-4 py-2 rounded-lg">{track}</span>
                        ))
                    }
                </div>

                {
                    program.secDesc && <p className="text-white text-base lg:text-lg">{program.secDesc}</p>
                }

                <Link to='' className="mt-2">
                    <Button className="self-start" text="Apply Now" type="filled" />
                </Link>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
                <img className="" src={program.imgUrl} alt="globe" />
            </div>
        </div>
    )
}

export default TalentTechCard;