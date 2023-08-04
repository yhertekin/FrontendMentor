import { useEffect, useState } from "react";
import NotificationCard from "./components/NotificationCard";

function App() {
    const [data, setData] = useState();

    const fetchNotificationData = () => {
        fetch("./data.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data);
            });
    };

    useEffect(() => {
        fetchNotificationData();
    }, []);

    return (
        <main>{data && data?.map((notification, i) => <NotificationCard key={i} notification={notification} />)}</main>
    );
}

export default App;
