import { NavLink, Outlet } from "react-router-dom"
import MyCourse from "./MyCourse"
import MyInfo from "./MyInfo"
import MyPayment from "./MyPayment"
import { useAuthContext } from "@/context/AuthContext"
import PATHS from "@/constants/paths"

const StudentProfilePage = () => {
    const { profile, handleGetProfileCourse, handleGetProfilePayment } = useAuthContext();
    const { firstname, introduce, email, phone, website } = profile || {};

    return (
        <main className="mainwrapper profilepage">
            <div className="container">
                <div className="wrapper">
                    <div className="sidebar">
                        <div className="sidebar__info">
                            <div className="useravatar">
                                <div className="avatar">
                                    <div className="img"><img src="/img/avatar_nghia.jpg" alt="avatar" /></div>
                                </div>
                                <h3 className="title --t3">{firstname || ""}</h3>
                            </div>
                        </div>
                        <div className="sidebar__content">
                            <h4>Giới thiệu</h4>
                            <p className="description">{introduce || "--"}</p>
                            <ul>
                                <li><img src="/img/icon-mail-outline.svg" alt="icon" /><span>{email || "--"}</span>
                                </li>
                                <li><img src="/img/icon-phone-outline.svg" alt="icon" /><span>{phone || "--"}</span></li>
                                <li><img src="/img/icon-link.svg" alt="icon" />
                                    {
                                        website ? <a href={website} target="_blank">{website || "--"}</a> : "--"
                                    }
                                </li>
                            </ul>
                            <div className="social">
                                <a href="#" target="_blank"><img src="/img/icon-facebook-dark.svg" alt /></a>
                                <a href="#" target="_blank"><img src="/img/icon-linkedin-dark.svg" alt /></a>
                                <a href="#" target="_blank"><img src="/img/icon-youtube-dark.svg" alt /></a>
                            </div>
                        </div>
                    </div>
                    <div className="tabwrap">
                        <div className="tab">
                            <div className="tab__title">
                                <NavLink end to={PATHS.PROFILE.INDEX}>Thông tin cá nhân</NavLink>
                                <NavLink to={PATHS.PROFILE.MY_COURSE}>Khóa học của tôi</NavLink>
                                <NavLink to={PATHS.PROFILE.MY_PAYMENT}>Lịch sử thanh toán</NavLink>
                            </div>
                            <div className="tab__content">
                                <Outlet />
                                {/* Thông tin cá nhân */}
                                {/* <MyInfo /> */}
                                {/* Khoá học của tôi */}
                                {/* <MyCourse /> */}
                                {/* Lịch sử thanh thánh */}
                                {/* <MyPayment /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default StudentProfilePage