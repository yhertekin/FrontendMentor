import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import Work from "./assets/icon-work.svg";
import Play from "./assets/icon-play.svg";
import Study from "./assets/icon-study.svg";
import Exercise from "./assets/icon-exercise.svg";
import Social from "./assets/icon-social.svg";
import SelfCare from "./assets/icon-self-care.svg";

import data from "./data.json";
import Person from "./components/Person";

interface IIcons {
    [key: string]: string;
}

const icons: IIcons = {
    Work,
    Study,
    Play,
    Exercise,
    Social,
    "Self Care": SelfCare,
};

export type TPeriod = "daily" | "weekly" | "monthly";

function App() {
    const [period, setPeriod] = useState<TPeriod>("daily");

    return (
        <div className='w-[calc(100vw-1.5rem)] max-w-[1000px] grid gap-6 p-4 sm:grid-cols-4 sm:grid-rows-2'>
            <Person period={period} setPeriod={setPeriod} />
            {data &&
                data.map((item) => (
                    <div key={item.title}>
                        <Card title={item.title} icon={icons[item.title]} timeFrame={item.timeframes[period]} />
                    </div>
                ))}
        </div>
    );
}

export default App;
