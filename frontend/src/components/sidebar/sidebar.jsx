import React from 'react'
import SearchInput from './searchInput'
import Conversations from './conversations'
import Logout from './logout'

const sidebarPage = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <Conversations />
      <Logout />
      <div className="divider divider-start"></div>
    </div>
  )
}

export default sidebarPage