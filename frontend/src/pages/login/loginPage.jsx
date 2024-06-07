import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from '../../context/authContext'


const loginPage = () => {

    const { setUser } = useAuth();

    const [input, setInput] = useState({
        userName: '',
        passWord: ''
    });

    const { mutate, isPending } = useMutation({
        mutationFn: async () => {
            try {
                const response = await fetch('/api/auth/login', {
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

                setUser(data);

            } catch (error) {
                console.error(error.message);
                throw new Error(error.message);
            }
        },
        onSuccess: () => {
            toast.success('Login successful')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        await mutate();
        setInput({
            userName: '',
            passWord: ''
        })
    };




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
                        <input type="text" className="grow"
                            value={input.userName}
                            onChange={(e) => setInput({ ...input, userName: e.target.value })}
                        />
                    </label>
                    <span className="label-text">Password</span>
                    <label className="input input-bordered flex items-center bg-opacity-0">
                        <input type="text" className="grow"
                            value={input.passWord}
                            onChange={(e) => setInput({ ...input, passWord: e.target.value })}
                        />
                    </label>
                    <Link to='/signup' className="link link-hover text-sm">Register a new account</Link>
                </div>

                <div className='flex  justify-center'>
                    <button className="btn btn-active btn-ghost text-center"
                        onClick={handleSubmit}>
                        {isPending ? 'Loading...' : 'Login'}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default loginPage