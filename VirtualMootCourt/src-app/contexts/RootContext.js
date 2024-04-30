import React, { createContext, useContext } from 'react';
import { AuthContext } from './AuthContext';

const RootContext = createContext(
    {
        auth: null
    }
)
const RootProvider = ({ children }) => {
    const authValue = useContext(AuthContext)
    return (
        <RootContext.Provider
            value={
                {
                    auth: authValue
                }
            }
        >
            {children}
        </RootContext.Provider>
    )
}

export { RootContext, RootProvider }