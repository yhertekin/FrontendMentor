import EllipsisIcon from "./../assets/icon-ellipsis.svg";

interface ICard {
    title: string;
    icon: string;
    timeFrame: {
        current: number;
        previous: number;
    };
}
interface IColorClassNames {
    [key: string]: string;
}

const colorClassNames: IColorClassNames = {
    Work: "bg-light_red",
    Play: "bg-soft_blue",
    Study: "bg-light_red_study",
    Exercise: "bg-lime_green",
    Social: "bg-violet",
    "Self Care": "bg-soft_orange",
};

const Card = ({ title, icon, timeFrame }: ICard) => {
    return (
        <div className={`${colorClassNames[title]} pt-8 flex items-end rounded-lg relative overflow-hidden`}>
            <img src={icon} alt='icon' className='absolute -top-1 right-6 w-16' />
            <div className='z-10 w-full text-white rounded-lg bg-dark_blue p-4 hover:bg-desaturated_blue'>
                <div className='flex justify-center items-center'>
                    <p className='mr-auto text-sm font-bold'>{title}</p>
                    <img className='max-h-1' src={EllipsisIcon} alt='ellipsis' />
                </div>
                <div className='mt-2 flex items-center justify-between sm:flex-col sm:items-start sm:mt-4'>
                    <div className='text-3xl font-thin sm:text-5xl'>{timeFrame.current}hrs</div>
                    <div className='text-pale_blue mt-2 text-xs'>Last Week - {timeFrame.previous}hrs</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
