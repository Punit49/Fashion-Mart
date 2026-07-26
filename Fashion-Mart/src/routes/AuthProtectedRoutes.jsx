import React, { useContext } from 'react'
import { MyStore } from '../context/MainContext';
import { Navigate } from 'react-router';

const IsLoggedIn = ({children}) => {

    const { logUser } = useContext(MyStore); 

    if(!logUser) {
        return children;
    }

    return <Navigate to={"/home"} />
}

export default IsLoggedIn
