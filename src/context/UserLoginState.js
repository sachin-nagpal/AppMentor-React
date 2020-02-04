import React, { createContext, useEffect } from 'react';
import useToggleState from '../hooks/useToggleState';
import { useCookies } from 'react-cookie';

export const UserLoginState = createContext();

function UserLoginStateContextProvider(props) {
    const [isUserLogin, setIsUserLogin] = useToggleState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    if(!isUserLogin){
        
    }
    return(
    <UserLoginState.Provider value={{ isUserLogin, setIsUserLogin: setIsUserLogin }}>
           {props.children}
    </UserLoginState.Provider>
    )
}

export default UserLoginStateContextProvider;