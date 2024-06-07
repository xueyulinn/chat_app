import React from 'react'
import { VscSend } from "react-icons/vsc";
const messageInput = () => {
  return (
    <form>
      <div className='flex w-full absolute bottom-0'>
        <div className='relative w-full'>
          <input
            type="text"
            placeholder="Send a message"
            className="w-full input input-bordered input-info pr-10 h-12"
          />
          <button
            type="submit"
            className="absolute right-0 bottom-0 btn "
          >
            <VscSend />
          </button>
        </div>
      </div>
    </form>

  )
}

export default messageInput