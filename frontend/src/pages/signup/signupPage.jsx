import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { useAuth } from '../../context/authContext'

const signupPage = () => {

    const { setUser } = useAuth();

    const [input, setInput] = useState({
        fullName: '',
        userName: '',
        passWord: '',
        confirmPassword: ''
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async () => {
            try {
                const response = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(input)
                })

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message)
                }

                // Save user data to local storage
                localStorage.setItem('chat-user', JSON.stringify(data));

                // Set user data to context
                setUser(data);

            } catch (error) {
                console.error(error.message);
                throw new Error(error.message);
            }
        },
        onSuccess: () => {
            toast.success('Account created successfully')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await mutate()
        setInput({
            fullName: '',
            userName: '',
            passWord: '',
            confirmPassword: ''
        })
    }


    return (
        <div className=' rounded-lg  space-y-2 flex flex-col items-center justify-center min-w-96 mx-auto bg-gray-400'>
            <div className=' w-full text-center font-semibold'>
                <h1 className='text-3xl bg-opacity-0'>Sign Up</h1>
            </div>

            <form className='flex flex-col space-y-2 w-full '>
                <div className='flex flex-col space-y-4 px-4 '>
                    <span className="label-text">Fullname</span>
                    <label className="input input-bordered flex items-center  bg-opacity-0">
                        <input type="text"
                            value={input.fullName}
                            onChange={(e) => setInput({ ...input, fullName: e.target.value })}
                            className="grow" />
                    </label>
                    <span className="label-text">username</span>
                    <label className="input input-bordered flex items-center  bg-opacity-0">
                        <input type="text"
                            value={input.userName}
                            onChange={(e) => setInput({ ...input, userName: e.target.value })}
                            className="grow" />
                    </label>
                    <span className="label-text">Password</span>
                    <label className="input input-bordered flex items-center bg-opacity-0">
                        <input type="text"
                            value={input.passWord}
                            onChange={(e) => setInput({ ...input, passWord: e.target.value })}
                            className="grow" />
                    </label>
                    <span className="label-text">Confirm Password</span>
                    <label className="input input-bordered flex items-center bg-opacity-0">
                        <input
                            value={input.confirmPassword}
                            onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
                            type="text" className="grow" />
                    </label>

                    <Link to='/login' className="link link-hover text-sm">Already have an account</Link>
                </div>

                <div className='flex justify-center py-2'>
                    <button className="btn btn-active btn-ghost text-center" onClick={handleSubmit}
                        disabled={isPending}>
                        {isPending ? <span className="loading loading-spinner loading-md"></span> : 'Signup'}</button>
                </div>
            </form>
        </div>
    )
}

export default signupPage