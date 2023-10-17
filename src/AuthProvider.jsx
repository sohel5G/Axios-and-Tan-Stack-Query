import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import auth from './authConfig';

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = { userSignUp, userSignIn, user, setUser }
    return (
        <>
            <authContext.Provider value={userInfo}>
                {children}
            </authContext.Provider>
        </>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};

