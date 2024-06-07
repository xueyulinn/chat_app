import React from 'react'

const user = () => {
    return (
        <div className=' flex space-x-4 hover:bg-sky-300 '>
            <div className="avatar online">
                <div className="w-14 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>

            <div className=' flex items-center space-x-8'>
                <span className='text-lg font-semibold text-gray-200'>John Doe</span>

                <span className='text-xs text-gray-500'>2:30 PM</span>

            </div>

        </div>
    )
}

export default user