import React from 'react'
import useGetMessages from '../../hooks/useGetMessages.jsx'
import Skeleton from '../../pages/common/skeletonPage.jsx'
import Message from './message.jsx'
import useListenMessages from '../../hooks/useListenMessages.jsx'

const messages = () => {

    const { messages, loading } = useGetMessages();
    useListenMessages();

    return (
        <div className='overflow-auto'>
            {loading ? (
                <Skeleton />
            ) : !Array.isArray(messages) || messages.length === 0 ? (
                <div className="flex  gap-4  justify-center">
                    <h1 className=' text-center font-semibold'> No Message Found</h1>
                </div>
            ) : (
                messages.map((message) => (
                    <Message key={message._id} message={message} />
                ))
            )}
        </div>
    )
}

export default messages