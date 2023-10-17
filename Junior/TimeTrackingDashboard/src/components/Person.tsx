import React from "react";
import { TPeriod } from "../App";
import jeremy from "./../assets/image-jeremy.png";

interface IPerson {
    period: TPeriod;
    setPeriod: React.Dispatch<React.SetStateAction<TPeriod>>;
}

const Person = ({ period, setPeriod }: IPerson) => {
    return (
        <div className='text-white bg-dark_blue rounded-lg sm:row-span-2'>
            <div className='rounded-lg bg-blue p-4 flex items-center gap-4 sm:flex-col sm:items-start'>
                <img src={jeremy} alt='avatar' className='w-14 border-2 border-white rounded-full' />
                <div>
                    <p className='text-pale_blue'>Report for</p>
                    <p className='sm:text-3xl sm:flex sm:flex-col sm:mb-10'>
                        Jeremy <span>Rabson</span>
                    </p>
                </div>
            </div>
            <div className='flex p-4 items-center justify-between sm:flex-col sm:items-start sm:gap-3'>
                <button
                    className={period == "daily" ? "text-white" : "text-pale_blue"}
                    onClick={() => setPeriod("daily")}
                >
                    Daily
                </button>
                <button
                    className={period == "weekly" ? "text-white" : "text-pale_blue"}
                    onClick={() => setPeriod("weekly")}
                >
                    Weekly
                </button>
                <button
                    className={period == "monthly" ? "text-white" : "text-pale_blue"}
                    onClick={() => setPeriod("monthly")}
                >
                    Monthly
                </button>
            </div>
        </div>
    );
};

export default Person;
