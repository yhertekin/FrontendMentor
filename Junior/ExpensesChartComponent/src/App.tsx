import "./App.css";
import Chart from "./components/Chart";
import Header from "./components/Header";

function App() {
    const data = [
        { date: new Date("2023-08-01"), value: 50 },
        { date: new Date("2023-08-02"), value: 100 },
        { date: new Date("2023-08-03"), value: 150 },
        { date: new Date("2023-08-04"), value: 90 },
        { date: new Date("2023-08-05"), value: 70 },
        { date: new Date("2023-08-06"), value: 130 },
        { date: new Date("2023-08-07"), value: 80 },
    ];
    return (
        <main className='p-4 flex justify-center flex-col h-screen'>
            <Header />
            <Chart data={data} />
        </main>
    );
}

export default App;
