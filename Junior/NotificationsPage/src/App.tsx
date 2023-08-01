import { useEffect, useState } from "react";
import NotificationCard from "./components/NotificationCard";

function App() {
    const [data, setData] = useState();

    const changeTheme = () => {
        const html = document.querySelector("html");
        html.classList.toggle("dark");
    };

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
        <main>
            <button onClick={changeTheme} className='primary'>
                change theme
            </button>
            {/* {data &&
                data?.map((notification, i) => (
                    <NotificationCard
                        key={i}
                        name={notification?.name}
                        notification={notification.notification}
                        time={notification.time}
                        profilePicture={notification.profilePicture}
                        actionText={notification.actionText}
                        read={notification.read}
                    />
                ))} */}
        </main>
    );
}

export default App;
