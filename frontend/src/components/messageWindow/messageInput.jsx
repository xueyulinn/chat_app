import React from 'react';
import { VscSend } from "react-icons/vsc";
import useSendMessages  from '../../hooks/useSendMessages'
import { useState } from 'react';

const MessageInput = () => {

  const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessages();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};


  return (
    <form onSubmit={handleSubmit}>
      <div className='flex w-full absolute bottom-0'>
        <div className='relative w-full'>
          <input
            type="text"
            placeholder="Send a message"
            className="w-full input input-bordered input-info pr-10 h-12"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-0 bottom-0 btn"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner loading-md"></span> : <VscSend />}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageInput;
