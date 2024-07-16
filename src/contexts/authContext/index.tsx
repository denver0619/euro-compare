import React, { useEffect, useState, useContext, ReactNode } from "react";
import { auth } from "../../services/firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    currentUser: User | null;
    userLoggedIn: boolean;
    loading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = React.createContext<AuthContextType>({
    currentUser: null,
    userLoggedIn: false,
    loading: false,
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthContextProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                initializeUser(user);
                navigate("/");
            } else {
                navigate("/authenticate");
                setLoading(false);
            }
        });
        return unsubscribe;
    }, []);

    async function initializeUser(user: User | null) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
