import PATHS from "@/constants/paths";
import { authService } from "@/services/authService";
import { orderService } from "@/services/orderService";
import tokenMethod from "@/utils/token";
import { message } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    const [showedModal, setShowedModal] = useState("");
    const [profile, setProfile] = useState();
    const [courseInfo, setCourseInfo] = useState([]);
    const [paymentInfo, setPaymentInfo] = useState([]);
    const navigate = useNavigate();
    // // open

    const handleShowModal = (modalType) => {
        if (!!!tokenMethod.get()) {
            setShowedModal(modalType || "");
        }
    };
    // close
    const handleCloseModal = (e) => {
        e?.stopPropagation();
        setShowedModal("");
    }

    useEffect(() => {
        if (tokenMethod.get()) {
            // call api get profile
            handleGetProfile();
            handleGetProfileCourse();
            handleGetProfilePayment();
        }
    }, []);

    const handleLogin = async (loginData, callback) => {
        // call api
        try {
            const res = await authService.login(loginData);
            const { token: accessToken, refreshToken } = res?.data?.data || {};
            // luu vao local storage
            tokenMethod.set({
                accessToken,
                refreshToken,
            });

            console.log("data", res.data.data)
            if (!!tokenMethod.get()) {
                // get profile
                handleGetProfile();
                handleGetProfileCourse();
                handleGetProfilePayment();
                message.success("Đăng nhập thành công!");
                handleCloseModal();
            }
        } catch (error) {
            console.log("error", error);
            message.error("Đăng nhập thất bại");
        }
    };
    // handle register
    const handleRegister = async (registerData, callback) => {
        try {
            const { name, email, password } = registerData || {};
            const payload = {
                firstName: name,
                lastName: "",
                email,
                password,
            }
            const res = await authService.register(payload);
            if (res?.data?.data?.id) {
                message.success("Đăng ký thành công!");
                handleLogin({
                    email,
                    password,
                });
            }
        } catch (error) {
            console.log("error", error);
            if (error?.response?.status === 403) {
                message.error("Email đăng ký đã tôn tại!");
            } else {
                message.error("Đăng ký thất bại!");
            }
        } finally {
            callback();
        }
    };
    // handle logout
    const handleLogout = () => {
        tokenMethod.remove();
        setProfile(undefined);
        navigate(PATHS.HOME);
        message.success("Tài khoản đã đăng xuất thành công");
    };

    // handle get profile
    const handleGetProfile = async () => {
        try {
            const profileRes = await authService.getProfiles();
            if (profileRes?.data?.data) {
                setProfile(profileRes.data.data)
            }
        } catch (error) {
            console.log("error", error);
            handleLogout();
        }
    };

    // handle get profile course
    const handleGetProfileCourse = async () => {
        try {
            const res = await orderService.getCourseHistories();
            const orderedCourse = res?.data?.data?.orders || [];
            setCourseInfo(orderedCourse);
        } catch (error) {
            console.log("getCoursesHistories error", error);
        }
    };

    // handle get profile payment
    const handleGetProfilePayment = async () => {
        try {
            const res = await orderService.getPaymentHistories();
            const payments = res?.data?.data?.orders || [];
            setPaymentInfo(payments);
        } catch (error) {
            console.log("getPaymentHistories error", error);
        }
    };

    const handleUpdateProfile = async (profileData) => {
        try {
            const {
                firstName,
                email,
                facebookURL,
                introduce,
                phone,
                website,
            } = profileData;
            const payload = {
                firstName: firstName,
                lastName: "",
                email,
                facebookURL,
                website,
                introduce,
                phone,
            };
            const res = await authService.updateProfile(payload);
            if (res?.data?.data?.id) {
                message.success("Cập nhật thông tin thành công");
                handleGetProfile();
            }
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <AuthContext.Provider value={{
            showedModal,
            profile,
            courseInfo,
            paymentInfo,
            handleShowModal,
            handleCloseModal,
            handleLogin,
            handleRegister,
            handleLogout,
            handleGetProfileCourse,
            handleGetProfilePayment,
            handleUpdateProfile,
        }} >
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);