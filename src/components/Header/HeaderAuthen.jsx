import { MODAL_TYPES } from '@/constants/general';
import PATHS from '@/constants/paths';
import { useAuthContext } from '@/context/AuthContext'
import tokenMethod, { localToken } from '@/utils/token';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const HeaderAuthen = () => {
    const { handleShowModal, handleLogout, profile } = useAuthContext();
    const [showDropdown, setShowDropdown] = useState(false);
    const { profileImage, firstName } = profile || {};

    const _onRegisterClick = (e) => {
        e.stopPropagation();
        handleShowModal(MODAL_TYPES.register);
    };
    const _onLoginClick = (e) => {
        e.stopPropagation();
        handleShowModal(MODAL_TYPES.login);
    };

    const _onShowDropdown = (e) => {
        e.stopPropagation();
        setShowDropdown(true);
    };

    useEffect(() => {
        document.addEventListener("click", () => {
            setShowDropdown(false);
        });
        return () => {
            document.removeEventListener("click", () => {
                setShowDropdown(false);
            });
        };
    }, []);

    if (!!!tokenMethod.get()) {
        return (
            <div className="header__auth">
                <div className="btn btn--transparent btnmodal" >
                    <span onClick={_onRegisterClick}>Đăng ký /&nbsp;</span>
                    <span onClick={_onLoginClick}>Đăng nhập</span>
                </div >
            </div >
        )
    }

    return (
        <>
            <div className="header__logged">
                <div className="userlogged">
                    <div className="userlogged__avatar user"
                        data-dropdown="userlogged__dropdown"
                        onClick={_onShowDropdown}>
                        <div className="userlogged__avatar-img user__img">
                            <img src={profileImage || "/img/cfd-share-thumbnail-facebook.png"} alt="Avatar teacher" />
                        </div>
                        <i className="userlogged__avatar-icon"><svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 3.5L7.00003 10.5L14 3.5H0Z" fill="white" />
                        </svg>
                        </i>
                    </div>
                    <div className={`userlogged__dropdown dropdown ${showDropdown ? "active" : ""} `}>
                        <div className="userlogged__dropdown-info">
                            <div className="user__img">
                                <img src={profileImage || "/img/cfd-share-thumbnail-facebook.png"} alt="Avatar teacher" />
                            </div>
                            <Link to={PATHS.PROFILE.INDEX} className="user__info">
                                <p className="title --t4"><strong>{firstName || ""}</strong></p>
                                <span className="email">Thông tin tài khoản</span>
                            </Link>
                        </div>
                        <div className="userlogged__dropdown-list">
                            <Link to={PATHS.PROFILE.MY_COURSE}>Khóa học của tôi</Link>
                            <Link to={PATHS.PROFILE.MY_PAYMENT}>Lịch sử thanh toán</Link>
                            <Link to={PATHS.CONTACT}>Hỗ trợ</Link>
                            <a href='' onClick={(e) => {
                                e.preventDefault();
                                handleLogout();
                            }}
                            >Đăng xuất <i><img src="/img/iconlogout.svg" alt /></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeaderAuthen