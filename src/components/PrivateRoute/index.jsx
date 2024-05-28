import { MODAL_TYPES } from '@/constants/general';
import PATHS from '@/constants/paths';
import { useAuthContext } from '@/context/AuthContext'
import tokenMethod from '@/utils/token';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ redirectPath = PATHS.HOME }) => {
    const { handleShowModal } = useAuthContext();
    if (!!!tokenMethod.get()) {
        handleShowModal?.(MODAL_TYPES.login);
        return <Navigate to={redirectPath} />
    }
    return (
        <>
            <Outlet />
        </>
    )
}

export default PrivateRoute;