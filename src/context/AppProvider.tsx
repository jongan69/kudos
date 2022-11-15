import React, { createContext, useState } from 'react'
interface AppContextInterface {
    currentWalletAddress: "",
    key: "",
    email: "",
}

export const AppContext = createContext<AppContextInterface | any>({});

export const AppProvider = (props: { children: any }) => {
    const [currentWalletAddress, setCurrentWalletAddress] = useState<string>("")
    const [key, setKey] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [userInfo, setUserInfo] = useState(null);

    return (
        <AppContext.Provider value={{ currentWalletAddress, setCurrentWalletAddress, key, setKey, email, setEmail, userInfo, setUserInfo }}>
            {props.children}
        </AppContext.Provider >
    )
};

export default AppProvider;

