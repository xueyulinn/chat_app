import React from 'react'

const loginPage = () => {
    return (
        <div className=' p-4 flex flex-col min-w-96  mx-auto justify-center items-center bg-gray-400  space-y-4'>
            <div className=' w-full '>
                <h1 className='text-3xl text-center font-semibold bg-opacity-0'>Login
                </h1>
            </div>

            <form className=' w-full flex flex-col space-y-2'>

                <div className='flex flex-col space-y-4 '>
                    <span className="label-text">Username</span>
                    <label className="input input-bordered flex items-center  bg-opacity-0">
                        <input type="text" className="grow" />
                    </label>
                    <span className="label-text">Password</span>
                    <label className="input input-bordered flex items-center bg-opacity-0">
                        <input type="text" className="grow" />
                    </label>

                    <a href='#' className="link link-hover text-sm">Register a new account</a>
                </div>

                <div className='flex  justify-center'>
                    <button className="btn btn-active btn-ghost text-center">Login</button>
                </div>

            </form>
        </div>
    )
}

export default loginPage