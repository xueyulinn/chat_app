import { useSocketContext } from "../context/socketContext";
import useConversation from "../zustand/useConversation";
import { useEffect } from "react";
import messageNotificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket?.on("getMessage", (message) => {
            message.shake = true;
            const audio = new Audio(messageNotificationSound);
            audio.play();

            setMessages([...messages, message]);
        });
    }, [socket, setMessages, messages]);

};
export default useListenMessages;