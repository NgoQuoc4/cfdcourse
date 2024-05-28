import { Outlet } from "react-router-dom"
import AuthModal from "../../components/AuthModal"
import Footer from "../../components/Footer"
import Headers from "../../components/Header"
import Navbar from "../../components/Navbar"
import Overlay from "../../components/Overlay"
import PageLoading from "../../components/PageLoading"
import AuthContextProvider from "@/context/AuthContext"
import MainContextProvider from "@/context/MainContext"
// import HomePage from "../../pages/HomePage"

export const MainLayout = () => {
    return (
        <MainContextProvider>
            <AuthContextProvider>
                {/* <PageLoading /> */}
                <Headers />
                <Navbar />
                <Overlay />
                {/* main */}
                <Outlet />
                <Footer />
                <AuthModal />
            </AuthContextProvider>
        </MainContextProvider>
    )
}

export default MainLayout