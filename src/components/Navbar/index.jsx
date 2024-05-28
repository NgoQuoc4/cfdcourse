import PATHS from "@/constants/paths"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar__main">
                    <li className="navbar__link">
                        <NavLink end to="/" className="navbar__item">Trang chủ</NavLink>
                    </li>
                    <li className="navbar__link">
                        <NavLink to="/about" className="navbar__item">Về CFD Circle</NavLink>
                    </li>
                    <li className="navbar__link">
                        <NavLink to="/course" className="navbar__item">Khóa học</NavLink>
                    </li>
                    <li className="navbar__link">
                        <NavLink to="/blog" className="navbar__item">Bài viết</NavLink>
                    </li>
                    <li className="navbar__link">
                        <NavLink to={PATHS.CONTACT} className="navbar__item">Liên hệ</NavLink>
                    </li>
                </ul>
                <div className="navbar__overlay" />
            </nav>
        </>
    )
}

export default Navbar