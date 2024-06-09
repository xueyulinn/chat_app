import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import useConversation from '../../zustand/useConversation.js'
import Message from './message.jsx'
import Skeleton from '../common/skeletonPage.jsx'

const messages = () => {

    const { selectedConversation } = useConversation();

    const { data, isLoading, refetch, isRefetching, error } = useQuery({
        // when the selectedConversation changes, the queryKey will change and the query will be refetched
        queryKey: ['messages', selectedConversation?._id],
        queryFn: async () => {
            try {
                const response = await fetch(`/api/message/getMessage/${selectedConversation._id}`);

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message)
                }

                const messages = data.messages;

                return messages;

            } catch (error) {
                console.error(error.message)
                throw new Error(error.message)
            }
        },
        // this prevents the query from retrying when it fails
        retry: false,
        // this prevents the query from running automatically
        enabled: false
    })

    useEffect(() => {
        if (selectedConversation?._id) {
            refetch();
        }
    }, [selectedConversation._id, refetch])



    return (
        <div className='overflow-auto'>

            {isLoading || isRefetching ? (
                <Skeleton />
            ) : error ? (
                <div>Error: {error.message}</div>
            ) : !Array.isArray(data) || data.length === 0 ? (
                <div className="flex  gap-4  justify-center">
                    <h1 className=' text-center font-semibold'> No Message Found</h1>
                </div>
            ) : (
                data.map((message) => (
                    <Message key={message._id} message={message} />
                ))
            )}
        </div>
    )
}

export default messages