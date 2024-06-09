import React from 'react'
import { BsSearch } from "react-icons/bs";
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const searchInput = () => {
    const [search, setSearch] = React.useState('');

    const { setSelectedConversation } = useConversation();

    const { data: conversations } = useQuery({ queryKey: ['conversations'] });


    const handleSubmit = (e) => {
        e.preventDefault();

        if (search.length < 3) {
            return toast.error('Search must be at least 3 characters long')
        }

        const conversation = conversations.find((user) => user.userName.toLowerCase().includes(search.toLowerCase()));

        if (!conversation) {
            return toast.error('No user found');
        }


        if (conversation) {
            setSelectedConversation(conversation);
            setSearch('');
        }

    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className=' flex flex-col space-y-2'>
                <div className=' flex space-x-2'>
                    <input type="text" placeholder="Search..." className=" rounded-lg input input-bordered w-full max-w-xs"
                        value={search}
                        onChange={handleChange} />
                    <button className="btn btn-circle hover:bg-sky-200 ">
                        <BsSearch />
                    </button>
                </div>

                <div className="divider"></div>
            </div>
        </form>
    )
}

export default searchInput