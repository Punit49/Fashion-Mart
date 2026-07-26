import React, { useCallback, useContext } from 'react'
import { MyStore } from '../context/MainContext'
import { Navigate } from 'react-router';

const LayoutProtectedRoutes = ({children}) => {
  const { logUser } = useContext(MyStore);

  if(logUser) return children;
  return <Navigate to={"/login"} />
}

export default LayoutProtectedRoutes
