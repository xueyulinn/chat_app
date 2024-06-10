import React from 'react'
import useGetConversations from '../../hooks/useGetConversations'
import Conversation from './conversation'

const conversations = () => {

  const { loading, conversations } = useGetConversations();

  return (
    <div className=' py-2 flex flex-col  overflow-auto'>
      {conversations && !loading &&
        conversations.map((userIndividual, idx) => <Conversation key={userIndividual._id} conversation={userIndividual} lastIdx={idx === conversations.length - 1} />)}
    </div>
  )
}

export default conversations