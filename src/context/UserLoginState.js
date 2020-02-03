import React, { createContext, useEffect } from 'react';
import useToggleState from '../hooks/useToggleState';

export const UserLoginState = createContext();

function UserLoginStateContextProvider(props) {
    const [isUserLogin, setIsUserLogin] = useToggleState(false);
    return(
    <UserLoginState.Provider value={{ isUserLogin, setIsUserLogin: setIsUserLogin }}>
           {props.children}
    </UserLoginState.Provider>
    )
}

export default UserLoginStateContextProvider;