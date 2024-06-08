import { create } from 'zustand';

const useConversation = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
    message: [],
    setMessage: (message) => set({ message: message }),
}));

export default useConversation;