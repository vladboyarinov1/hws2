import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: {
        id: number,
        user: {
            avatar: any
            name: string
        },
        message: {
            time: string,
            text: string
        }
    }
}

const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <div className={s.block}>
                    <img id={'hw1-avatar-' + props.message.id} src={props.message.user.avatar}/>
                    <div id={'hw1-time-' + props.message.id} className={s.time}>{props.message.message.time}</div>
                </div>

                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>{props.message.user.name}</div>
                    <div id={'hw1-text-' + props.message.id}
                         className={s.messageText}>{props.message.message.text}</div>
                </div>
            </div>

        </div>
    )
}

export default Message
