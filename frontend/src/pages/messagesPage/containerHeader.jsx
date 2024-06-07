import React from 'react'

const containerHeader = () => {
  return (
    <div className=' flex  space-x-2 bg-slate-200 w-full h-8 items-center rounded-lg'>
        <h1 className=' text-lg font-semibold p-2'>To: 
        <span className='text-lg font-bold p-2'>John Doe</span>
        </h1>
    </div>
  )
}

export default containerHeader