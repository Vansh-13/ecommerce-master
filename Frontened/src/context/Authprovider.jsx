import React, { useContext } from 'react';

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {
    const initialAuth = localStorage.getItem("User");
    const [auth, setAuth] = React.useState(initialAuth ? JSON.parse(initialAuth) : null);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
