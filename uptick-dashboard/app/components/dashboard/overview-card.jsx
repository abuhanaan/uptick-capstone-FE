import clsx from "clsx";

const OverviewCard = ({ children, type, total, accepted, rejected, pending }) => {
    return (
        <div className="flex flex-col justify-start md:flex-1 min-w-[320px] p-4 gap-5 bg-white rounded-lg">
            <div className="flex flex-row justify-between items-center w-full gap-10">
                <div className="flex flex-col gap-2">
                    {children}
                    <p className="text-sm font-bold">No. of {type} {type !== 'Startups' ? 'Applicants' : ''}</p>
                </div>

                <div
                    className={clsx(
                        `flex justify-center items-center text-4xl h-14 font-bold px-2 rounded-lg`,
                        {
                            'text-[#471B80] bg-[#E8D7FF]': type === 'Programs',
                            'text-[#285C3A] bg-[#DCF1E3]': type === 'Jobs',
                            'text-[#243E80] bg-[#DAE5FF]': type === 'Startups'
                        }
                    )}>
                    {total}
                </div>
            </div>

            <div className="flex justify-between">
                <p className="text-xs text-[#4D4D4D] font-semibold">Accepted <span className="ml-2 text-[#50B773]">{accepted}</span></p>
                <p className="text-xs text-[#4D4D4D] font-semibold">Rejected<span className="ml-2 text-[#FF0000]">{rejected}</span></p>
                <p className="text-xs text-[#4D4D4D] font-semibold">Pending<span className="ml-2 text-[#B3B3B3]">{pending}</span></p>
            </div>
        </div>
    )
}

export default OverviewCard;