import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const MainContext = createContext({});
const MainContextProvider = ({ children }) => {
    const { pathname } = useLocation();

    const [isShowNavbar, setIsShowNavbar] = useState(false);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });

        setIsShowNavbar(false);
    }, [pathname]);
    const handleShowNavbar = (isShow) => {
        setIsShowNavbar(isShow);
    }
    return (
        <MainContext.Provider value={{ isShowNavbar, handleShowNavbar }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;
export const useMainContext = () => useContext(MainContext);