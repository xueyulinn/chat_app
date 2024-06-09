import { useQueryClient, useMutation } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { VscSend } from "react-icons/vsc";
import useConversation from '../../zustand/useConversation';
import { useState } from 'react';

const MessageInput = () => {

  const queryClient = useQueryClient();

  const [message, setMessage] = useState('');

  const { selectedConversation } = useConversation();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      try {
        const res = await fetch(`/api/message/sendMessage/${selectedConversation._id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message);
        }

        return data.message;

      } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
    },

    onSuccess: async() => {

      await queryClient.invalidateQueries({ queryKey: ['messages', selectedConversation?._id] });

      setMessage('');
    },

    onError: (error) => {
      toast.error(error.message);
    }

  });

  const handleSendMessage = async (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <form onSubmit={handleSendMessage}>
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
            disabled={isPending}
          >
            {isPending ? <span className="loading loading-spinner loading-md"></span> : <VscSend />}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MessageInput;
