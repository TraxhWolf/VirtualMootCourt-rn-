import { createContext, useState } from "react";

const AuthContext = createContext(
    {
        isLoggedIn: false,
        setIsLoggedIn: (isLoggedIn) => {}
    }
)

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(fasle)
    const value = { isLoggedIn, setIsLoggedIn }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }