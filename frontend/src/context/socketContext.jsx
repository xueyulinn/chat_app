import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./authContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {

    // whenever a component changes the context value
    // all the components that are using the context value will re-render
    const { user } = useAuth();

    const [socket, setSocket] = useState(null);

    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        if (user) {
            // establish a connection with the server
            const newSocket = io("http://localhost:5000/", {
                query: {
                    userId: user._id,
                },
            });

            setSocket(newSocket);

            // socket.on() is used to listen to the events.
            newSocket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            // Synonym of socket.disconnect()
            return () => newSocket.close();
        } else {
            // when the user logs out, we need to close the socket connection
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
        // whenver the user changes, this useEffect will run
    }, [user]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
}