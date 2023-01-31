import React from 'react'
import s from './FriendMessage.module.css'

type FriendMessagePropsType = any;
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div id={'hw1-friend-message-' + props.message.id} className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <div className={s.block}>
                    <img id={'hw1-friend-avatar-' + props.message.id} src={props.message.user.avatar}/>
                    <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>{props.message.message.time}</div>

                </div>

                <div className={s.friendText}>
                    <div id={'hw1-friend-name-' + props.message.id}
                         className={s.friendName}>{props.message.user.name}</div>
                    <div id={'hw1-friend-text-' + props.message.id}
                         className={s.friendMessageText}>{props.message.message.text}</div>
                </div>

            </div>

        </div>
    )
}

export default FriendMessage
