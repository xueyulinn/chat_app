import React from 'react'
import SearchInput from './searchInput'
import Users from './users'
import LogoutPage from '../logout/logoutPage'

const sidebarPage = () => {
  return (
    <div className=' flex flex-col space-y-2 md:min-w-[350px]'>
      <SearchInput />
      <Users />
      <LogoutPage />
      <div className="divider divider-start"></div>
    </div>
  )
}

export default sidebarPage