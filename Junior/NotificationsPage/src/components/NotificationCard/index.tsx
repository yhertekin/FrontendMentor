import React from "react";
import "./NotificationCard.css";

interface INotificationCard {
    profilePicture: string;
    name: string;
    notification: string;
    time: string;
    read: boolean;
    actionText?: string;
    actionImage?: string;
    message?: string;
}

const NotificationCard = ({
    profilePicture,
    name,
    notification,
    time,
    actionText,
    actionImage,
    message,
    read,
}: INotificationCard) => {
    return (
        <article className={`card ${!read && "card--unread"} `}>
            <img className='profile-picture' src={profilePicture} alt='profile picture' />
            <div>
                <p className='text'>
                    <span className='name'>{name}</span> {notification}{" "}
                    {actionText && <span className='action-text'>{actionText}</span>}
                    {!read && <div className='read-status'></div>}
                </p>
                <p className='date'>{time} ago</p>
            </div>
            {actionImage && <img className='' src={actionImage} alt='image' />}
            {message && <p>{message}</p>}
        </article>
    );
};

export default NotificationCard;
