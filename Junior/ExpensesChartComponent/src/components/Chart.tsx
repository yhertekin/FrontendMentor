import "./../App.css";
interface IChart {
    data: IChartData[];
}

interface IChartData {
    date: Date;
    value: number;
}

const Chart = ({ data }: IChart) => {
    const maxValueObj = data.reduce(
        (maxObj, currentObj) => {
            if (currentObj.value > maxObj.value) {
                return currentObj;
            } else {
                return maxObj;
            }
        },
        { value: Number.NEGATIVE_INFINITY }
    );

    return (
        <div className='bg-white mt-4 rounded-md p-6 w-full mx-auto md:w-[500px]'>
            <h2 className='font-bold text-2xl mb-10 text-dark-brown'>Spending - Last 7 days</h2>
            <div className='flex items-end justify-center gap-2 md:gap-4'>
                {data.map((item) => (
                    <div className='flex flex-col items-center'>
                        <div
                            style={{ height: item.value }}
                            className={`rounded-md w-[10vw] md:w-12 ${
                                item.value == maxValueObj.value ? "bg-cyan" : "bg-red "
                            }`}
                        ></div>
                        <div className='mt-2 text-medium-brown lowercase'>
                            {item.date.toLocaleString("en-US", { weekday: "short" })}
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full h-[2px] my-4 bg-cream'></div>
            <div className='flex justify-between items-end'>
                <div>
                    <p className='text-medium-brown'>Total this month</p>
                    <p className='text-dark-brown text-3xl font-bold'>$478.33</p>
                </div>
                <div>
                    <p className='text-dark-brown text-xl font-bold text-right'>+2.4%</p>
                    <p className='text-medium-brown'>from last month</p>
                </div>
            </div>
        </div>
    );
};

export default Chart;
