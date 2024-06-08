import React from 'react'
import SearchInput from './searchInput'
import Conversations from './conversations'
import LogoutPage from '../logout/logoutPage'

const sidebarPage = () => {
  return (
    <div className=' flex flex-col space-y-2 md:min-w-[350px]'>
      <SearchInput />
      <Conversations />
      <LogoutPage />
      <div className="divider divider-start"></div>
    </div>
  )
}

export default sidebarPage