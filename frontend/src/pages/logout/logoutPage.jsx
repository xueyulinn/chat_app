import React from 'react'
import { SlLogout } from "react-icons/sl";
import { useAuth } from '../../context/authContext'
import { useMutation } from '@tanstack/react-query'



const logoutPage = () => {

    const { setUser } = useAuth();

    const { mutate, isPending } = useMutation({
        mutationFn: async () => {
            try {
                const response = await fetch('/api/auth/logout', {
                    method: 'POST',
                })

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message)
                }

                // Remove user data from local storage
                localStorage.removeItem('chat-user');

                setUser(null);

            } catch (error) {
                console.error(error.message);
                throw new Error(error.message);
            }
        },
        onSuccess: () => {
            toast.success('Logged out successfully')
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    const handleLogout = () => {
        mutate()
    }


    return (
        <div className=' absolute left-0 bottom-0'>
            <button className="btn btn-circle "
                onClick={handleLogout}>
                <SlLogout />
            </button>
        </div>
    )
}

export default logoutPage