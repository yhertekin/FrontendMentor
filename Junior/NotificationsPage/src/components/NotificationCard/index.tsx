import React from "react";
import "./NotificationCard.css";

interface INotificationCard {
    notification: INotification;
}

interface INotification {
    profilePicture: string;
    name: string;
    notificationText: string;
    time: string;
    read: boolean;
    actionText?: string;
    actionImage?: string;
    message?: string;
}

const NotificationCard = ({ notification }: INotificationCard) => {
    const { read, profilePicture, actionText, name, time, actionImage, message, notificationText } = notification;

    return (
        <article className={`card ${!read && "card--unread"} `}>
            <img className='profile-picture' src={profilePicture} alt='profile picture' />
            <div className='container'>
                <div className='upper'>
                    <div>
                        <p className='text'>
                            <span className='name'>{name}</span> {notificationText}{" "}
                            {actionText && <span className='action-text'>{actionText}</span>}
                            {!read && <div className='read-status'></div>}
                        </p>
                        <p className='date'>{time} ago</p>
                    </div>
                    {actionImage && <img className='action-image' src={actionImage} alt='image' />}
                </div>
                {message && <p className='message'>{message}</p>}
            </div>
        </article>
    );
};

export default NotificationCard;
