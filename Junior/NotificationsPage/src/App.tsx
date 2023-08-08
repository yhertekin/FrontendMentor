import { useEffect, useState } from "react";
import NotificationCard from "./components/NotificationCard";
import { INotification } from "./interfaces/Notification";

const initialData: INotification[] = [
    {
        profilePicture: "",
        name: "",
        notificationText: "",
        actionText: "",
        time: "",
        read: false,
        message: "",
        actionImage: "",
    },
];

function App() {
    const [data, setData] = useState<INotification[]>(initialData);

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

    const updateData = () => {
        setData((prevState) => prevState.map((item) => ({ ...item, read: true })));
    };

    return (
        <main>
            <header>
                <h1>
                    Notifications <span>{data?.filter((d) => !d.read).length}</span>
                </h1>
                <button onClick={updateData}>Mark all as read</button>
            </header>
            {data && data?.map((notification: any, i: any) => <NotificationCard key={i} notification={notification} />)}
        </main>
    );
}

export default App;
