import React from 'react'
import { BsSearch } from "react-icons/bs";
const searchInput = () => {
    return (
        <div className=' flex flex-col space-y-2'>
            <div className=' flex space-x-2'>
                <input type="text" placeholder="Search..." className=" rounded-lg input input-bordered w-full max-w-xs" />
                <button className="btn btn-circle hover:bg-sky-200 ">
                    <BsSearch />
                </button>
            </div>

            <div className="divider"></div>
        </div>
    )
}

export default searchInput