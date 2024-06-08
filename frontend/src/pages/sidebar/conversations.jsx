import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Conversation from './conversation'
const conversations = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['conversations'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/user', {
          method: 'GET',
        })

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }

        return data;

      } catch (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
    }
  });

  return (
    <div className=' flex flex-col  overflow-auto'>
      {data && !isLoading && data.map((userIndividual, idx) => <Conversation key={userIndividual._id} conversation={userIndividual} lastIdx={idx === data.length - 1} />)}
    </div>
  )
}

export default conversations