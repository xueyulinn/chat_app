import React, { useEffect } from 'react'
import { useAuth } from '../../context/authContext'
import useConversation from '../../zustand/useConversation'
import ContainerHeader from './containerHeader'
import Messages from './messages'
import MessageInput from './messageInput'

const messagePage = () => {


  const { selectedConversation, setSelectedConversation } = useConversation();

  const { user } = useAuth();

  // if we pass an empty array as the second argument, 
  // the function will only run once after the initial render
  useEffect(() => {
    // cleanup function
    // this will run when the component is unmounted
    return () => { setSelectedConversation(null); }
  }, [])

  const noChatSelected = () => {
    return (
      <div className='flex flex-col items-center justify-center h-full'>
        <div className='text-2xl font-bold'>Welcome {user.userName}</div>
        <div className='text-gray-500'>Start a conversation by selecting a user</div>
      </div>
    )
  }

  return (
    <div className=' flex flex-col mx-4 p-2 md:min-w-[450px] space-y-4 gap-4 relative'>
      {!selectedConversation ? noChatSelected() :
        <>
          <ContainerHeader userName={selectedConversation.userName} />
          <Messages />
          <MessageInput />
        </>}
    </div>

  )
}





export default messagePage