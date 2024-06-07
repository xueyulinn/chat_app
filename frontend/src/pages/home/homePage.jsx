import React from 'react'
import SideBarPage from '../sidebar/sidebarPage'
import MessagesPage from '../messagesPage/messageContainer'

const homePage = () => {
  return (
    <div className=' flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <SideBarPage />
        <MessagesPage />
    </div>
  )
}

export default homePage