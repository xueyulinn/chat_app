import React, { useEffect } from 'react'
import { useAuth } from '../../context/authContext'
import useConversation from '../../zustand/useConversation'
import Messages from './messages'
import MessageInput from './messageInput'
import Header from './header'

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

  const NoChatSelected = () => {
    return (
      <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
          <p>Welcome 👋 {user.userName} ❄</p>
          <p>Select a chat to start messaging</p>
        </div>
      </div>
    );
  };

  return (
    <div className=' flex flex-col mx-4 p-2 md:min-w-[450px] space-y-4 gap-4 relative'>
      {!selectedConversation ? (<NoChatSelected />) : (
        <>
          <Header userName={selectedConversation.userName} />
          <Messages />
          <MessageInput />
        </>
      )
      }
    </div>
  )
}





export default messagePage