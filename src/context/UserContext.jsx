import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}) {
    const [userName, setUserName] = useState("Kirill");
    const [avatar, setAvatar] = useState(() => {
        return localStorage.getItem("avater") || "";
    });

    useEffect(() => {
        try {
            if (avatar) {
                localStorage.setItem('avatar', avatar);
            }
            else {
                localStorage.removeItem('avatar');
            }
        } catch (error) {
            console.error("Не удалось сохранить аватарку", error)
        }
    }, [avatar]);

    return (
        <UserContext.Provider value={{userName, setUserName, avatar, setAvatar}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if(context === null) {
        throw new Error("useUser должен использоватся в UserProvider")
    }
    return context;
}