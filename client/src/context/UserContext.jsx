import { createContext, useContext, useEffect, useState } from "react";
import * as api from "../api/requester";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    async function getUserCredentials() {
        const response = await api.getUser();
        setUser(response);
        setReady(true);
    }

    useEffect(() => {
        if (!user) {
            getUserCredentials();
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
