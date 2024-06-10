import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
    // useContext will return the value of the passed context
    // it will search for the closest provider and return the value
    return useContext(AuthContext);
}


// Auth provider to wrap the app with
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}