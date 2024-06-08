import { createContext, useState, useContext } from 'react';

// first we need to create a context
const UserSelectedContext = createContext();

// Custom hook to use the context
export const useSelectUser = () => {
    return useContext(UserSelectedContext);
}

// this provider will wrap the entire application so 
// that the context is available everywhere
export const UserSelectedProvider = ({ children }) => {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <UserSelectedContext.Provider value={{ isSelected, setIsSelected }}>
            {children}
        </UserSelectedContext.Provider>
    );
};
