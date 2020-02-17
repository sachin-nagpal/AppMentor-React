import React from 'react';
import {useAuth} from '../../context/auth';

export default function UserNameImages() {
    const {userName} = useAuth();
    return (
        <div>
            <h1>{userName}</h1>
        </div>
    )
}

export default UserNameImages;
