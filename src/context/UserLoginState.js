import React, { createContext, useEffect,useState } from 'react';
import useToggleState from '../hooks/useToggleState';
import { useCookies } from 'react-cookie';

export const UserLoginState = createContext();

function UserLoginStateContextProvider(props) {
    const [isUserLogin, setIsUserLogin] = useToggleState(false);
    const [userName,setUserName] = useState('');
    const [userEmail,setUserEmail] = useState('');
    // const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    if(!isUserLogin){
        
    }
    return(
    <UserLoginState.Provider value={{ isUserLogin, setIsUserLogin: setIsUserLogin,useInfo:{
        name: userName,
        email: userEmail,
        setName: setUserName,
        setEmail: setUserEmail
    } }}>
           {props.children}
    </UserLoginState.Provider>
    )
}

export default UserLoginStateContextProvider;