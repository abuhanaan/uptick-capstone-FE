import { talentTechPrograms } from "../../../constant/data";
import TalentTechCard from "../../../components/TalentTechCard";

const Programs = () => {
    return (
        <div className="bg-[#2F2F2F] py-20">
            <div className="container flex flex-col gap-[91px]">
                {
                    talentTechPrograms.map(program => (
                        <TalentTechCard key={program.id} program={program} />
                    ))
                }
            </div>
        </div>
    )
}

export default Programs;