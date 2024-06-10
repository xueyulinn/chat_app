import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/socketContext';

const conversation = ({ conversation, lastIdx }) => {
    // we need to destructure the oneUser object from the props object

    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();

    const isOnline = onlineUsers.includes(conversation._id) ? 'online' : 'offline';

    // console.log('userId: ', conversation._id, 'isOnline: ', isOnline);

    

    return (
        <div className=' flex flex-col'>
            <div className={`flex space-x-4 hover:bg-sky-300 ${isSelected ? 'bg-sky-300' : ''}`}
                // there should be a function reference instead of a function call 
                onClick={() => setSelectedConversation(conversation)}>

                <div className={`avatar ${isOnline}`}>
                    <div className="w-14 rounded-full">
                        <img src={conversation.profileImg} />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <p className='font-bold text-gray-200'>{conversation.userName}</p>
                </div>

            </div>

            <div>
                {!lastIdx ? <div className="divider" /> : null}
            </div>
        </div>
    )
}

export default conversation