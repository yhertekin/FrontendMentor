import { useState } from "react";
import NotificationCard from "./components/NotificationCard";
import { INotification } from "./interfaces/Notification";

const initialData: INotification[] = [
    {
        profilePicture: "./assets/images/avatar-mark-webber.webp",
        name: "Mark Webber",
        notificationText: "reacted to your recent post",
        time: "1m",
        actionText: "My first tournament today!",
        read: false,
    },
    {
        profilePicture: "./assets/images/avatar-angela-gray.webp",
        name: "Angela Gray",
        notificationText: "followed you",
        time: "5m",
        read: false,
    },
    {
        profilePicture: "./assets/images/avatar-jacob-thompson.webp",
        name: "Jacob Thompson",
        notificationText: "has joined your group",
        actionText: "Chess Club",
        time: "1 day",
        read: false,
    },
    {
        profilePicture: "./assets/images/avatar-rizky-hasanuddin.webp",
        name: "Rizky Hasanuddin",
        notificationText: "sent you a private message",
        message:
            "Hello, thanks for seetting up the Chess Clu. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        time: "5 days",
        read: true,
    },
    {
        profilePicture: "./assets/images/avatar-kimberly-smith.webp",
        name: "Kimberly Smith",
        notificationText: "commented on your picture",
        actionImage: "./assets/images/image-chess.webp",
        time: "1 week",
        read: true,
    },
    {
        profilePicture: "./assets/images/avatar-nathan-peterson.webp",
        name: "Nathan Peterson",
        notificationText: "reacted to your recent post",
        actionText: "5 end-game strategies to increase your win rate",
        time: "2 weeks",
        read: true,
    },
    {
        profilePicture: "./assets/images/avatar-anna-kim.webp",
        name: "Anna Kim",
        notificationText: "left the group",
        actionText: "Chess Club",
        time: "2 weeks",
        read: true,
    },
];

function App() {
    const [data, setData] = useState<INotification[]>(initialData);

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
