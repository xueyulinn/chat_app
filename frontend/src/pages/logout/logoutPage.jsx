import React from 'react'
import { SlLogout } from "react-icons/sl";

const logoutPage = () => {
    return (
        <div className=' absolute left-0 bottom-0'>
            <button className="btn btn-circle ">
                <SlLogout />
            </button>
        </div>
    )
}

export default logoutPage