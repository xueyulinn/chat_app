import React from 'react'
import ContainerHeader from './containerHeader'
import MessageBox from './messageBox'
import MessageInput from './messageInput'

const messagePage = () => {

  let chatSelected = false;


  const noChatSelected = () => {
    return (
      <div className='flex flex-col items-center justify-center h-full'>
        <div className='text-2xl font-bold'>Select a chat</div>
        <div className='text-gray-500'>Start a conversation by selecting a chat</div>
      </div>
    )
  }

  return (
    <div className=' flex flex-col mx-4 p-2 md:min-w-[450px] space-y-4 gap-4 relative'>
      {!chatSelected ? noChatSelected() :
        <>
          <ContainerHeader />
          <MessageBox />
          <MessageInput />
        </>}
    </div>

  )
}





export default messagePage