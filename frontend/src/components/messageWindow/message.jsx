import React from 'react';
import { useAuth } from '../../context/authContext';
import useConversation from '../../zustand/useConversation';

const message = ({ message }) => {

    const { user } = useAuth();
    const { selectedConversation } = useConversation();

    const fromMe = user._id === message.sender;

    const chatClassName = fromMe ? 'chat chat-end' : 'chat chat-start';
    const chatAvatar = fromMe ? user.profileImg : selectedConversation.profileImg;
    const chatName = fromMe ? user.userName : selectedConversation.userName;
    const chatBubble = fromMe ? 'bg-blue-500' : '';

    const shakeClass = message.shouldShake ? "shake" : "";


    return (
        <div className='overflow-auto w-full'>
            <div className={chatClassName}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={chatAvatar} />
                    </div>
                </div>
                <div className="chat-header">
                    {chatName}
                    <time className="text-xs opacity-50">12:45</time>
                </div>
                <div className={` chat-bubble ${chatBubble}  ${shakeClass}`}>{message.messageContent}</div>
                <div className="chat-footer opacity-50">
                    Delivered
                </div>
            </div>
        </div>
    )
}

export default message