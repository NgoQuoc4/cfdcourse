import Button from "@/components/Button"
import { MODAL_TYPES } from "@/constants/general";
import PATHS from "@/constants/paths";
import { useAuthContext } from "@/context/AuthContext";
import tokenMethod from "@/utils/token";
import { useNavigate } from "react-router-dom"


const HeroSection = () => {
    const { handleShowModal } = useAuthContext();
    const navigate = useNavigate();
    // bat dau hoc
    const _onStart = () => {
        if (!!tokenMethod.get()) {
            navigate(PATHS.PROFILE.MY_COURSE);
        } else {
            handleShowModal?.(MODAL_TYPES.login);
        }
    }
    return (
        <section className="hero">
            <div className="hero__content">
                <div className="container">
                    <h1 className="title --white">Học Viện Đào Tạo<br /> Lập Trình Front-End Thực Chiến</h1>
                    <p className="text">Dạy từ kinh nghiệm, học từ thực tế để tạo ra sản phẩm có giá trị.</p>
                    <Button className="btnmodal" data-modal="mdlogin" onClick={_onStart} >Bắt đầu học</Button>
                </div>
            </div>
            <div className="hero__bottom">
                <div className="container-fluid">
                    <div className="hero__bottom-social">
                        <a href="https://www.facebook.com/cfdcircle" target="_blank"><img src="img/icon-facebook.svg" alt="Facebook CFD" /></a>
                        <a href="https://www.youtube.com/cfdcircle" target="_blank"><img src="img/icon-youtube.svg" alt="Youtube CFD" /></a>
                    </div>
                </div>
            </div>
            <div className="hero__background">
                <img className="hero__background-img" src="img/bg-hero-home.jpg" alt="CFD Training Background" />
                <div className="hero__background-video">
                    <video preload="none" autoPlay loop muted playsInline>
                        <source src="/video/CFD-video-bg2.mp4" type="video/mp4" />Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section >
    )
}
export default HeroSection