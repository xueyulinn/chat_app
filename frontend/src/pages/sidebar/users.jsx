import React from 'react'
import User from './user'
const users = () => {
  return (
    <div className=' flex flex-col  overflow-auto'>
        <User />
        <User />
        <User />
        <User />
        <User />
    </div>
  )
}

export default users