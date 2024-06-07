import React from 'react'

const signupPage = () => {
    return (
        <div className=' space-y-2 flex flex-col items-center justify-center min-w-96 mx-auto bg-gray-400'>
            <div className=' w-full text-center font-semibold'>
                <h1 className='text-3xl bg-opacity-0'>Sign Up</h1>
            </div>

            <form className='flex flex-col space-y-2 w-full '>
                <div className='flex flex-col space-y-4 px-4 '>
                    <span className="label-text">Username</span>
                    <label className="input input-bordered flex items-center  bg-opacity-0">
                        <input type="text" className="grow" />
                    </label>
                    <span className="label-text">Password</span>
                    <label className="input input-bordered flex items-center bg-opacity-0">
                        <input type="text" className="grow" />
                    </label>
                    <span className="label-text">Confirm Password</span>
                    <label className="input input-bordered flex items-center bg-opacity-0">
                        <input type="text" className="grow" />
                    </label>

                    <a href='#' className="link link-hover text-sm">Already have an account</a>
                </div>

                <div className='flex  justify-center py-2'>
                    <button className="btn btn-active btn-ghost text-center">Signup</button>
                </div>
            </form>
        </div>
    )
}

export default signupPage