import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../../Firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app)




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // default value of loading state is true 
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const unsubscribe=  onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)

        });

        return()=>{
            return unsubscribe()
        }

    }, [])

    // from here by authInfo we are sending value to implement from other component
    const authInfo = {
        user,
        loading,
        createUser

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;