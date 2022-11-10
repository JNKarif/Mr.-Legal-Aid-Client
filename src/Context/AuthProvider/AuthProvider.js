import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // default value of loading state is true 
    const [loading, setLoading] = useState(true)



    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const login=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
return signOut(auth)
    }

    
    // onAuthStateChanged to understand whether use is login or not
    useEffect(() => {
      const unsubscribe=  onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)

        });

        return()=>{
            return unsubscribe()
        }

    }, [])

    // from here by authInfo we are sending value to implement from other component
    const authInfo = {
        user,
        loading,
        login,
        logOut,
        createUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;