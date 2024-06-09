import { create } from 'zustand';
import messages from '../pages/messagesPage/messages';

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
    messages: [],
    setMessages: (newMessage) => set((state) => ({ messages: [...state.messages, newMessage] })),
}));

export default useConversation;