import { useAuthContext } from '@/context/AuthContext';
import React, { useEffect, useRef, useState } from 'react'
import PageLoading from '../PageLoading';
import { MODAL_TYPES } from '@/constants/general';
import Input from '../Input';
import { REGEX } from '@/constants/regex';
import Button from '../Button';
import { message } from 'antd';

const LoginForm = () => {
    const firstInputRef = useRef();

    const { handleShowModal, handleCloseModal, handleLogin } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const register = (registerField) => {
        return {
            name: registerField,
            error: error[registerField],
            value: form[registerField],
            onChange: (e) => setForm({ ...form, [registerField]: e.target.value })
        }
    }

    const _onSubmit = (e) => {
        e.preventDefault();
        // validate
        const errObj = {};
        if (!!!form.email) {
            errObj.email = "Vui lòng nhập email!";
        }
        // else if (!REGEX["email"].test(form.email)) {
        //     errObj.email = "Vui lòng nhập đúng định dạng email!";
        // }

        if (!!!form.password) {
            errObj.password = "Vui lòng nhập password!";
        }
        // else if (!REGEX["password"].test(form.password)) {
        //     errObj.password = "Vui lòng nhập đúng định dạng password!";
        // }
        setError(errObj);
        // end validation

        if (Object.keys(errObj)?.length > 0) {
            console.log("Submit error: ", errObj);
        } else {
            setLoading(true);
            console.log("Submit success: ", form);
            handleLogin({ ...form }, () => {
                setTimeout(() => {
                    setLoading(false);
                }, 300)
            })
        }
    }

    useEffect(() => {
        firstInputRef.current.focus();
    }, [])

    return (
        <div className="modal__wrapper-content mdregister active" style={{ position: "relative" }}>
            {loading && <PageLoading />}
            <div className="form__bottom">
                <p>Bạn chưa có tài khoản?</p>
                <div className="color--primary btnmodal" data-modal="mdregister"
                    onClick={() => { handleShowModal(MODAL_TYPES.register) }}>
                    <strong>Đăng ký</strong>
                </div>
            </div>
            <form onSubmit={_onSubmit} className="form">
                <Input
                    label="Email"
                    placeholder="Email"
                    required
                    type="email"
                    {...register("email")}
                    ref={firstInputRef}
                />
                <Input
                    label="Password"
                    placeholder="Password"
                    required
                    type="password"
                    {...register("password")}
                />
                {/* <div className="form__bottom">
                    <a className="color--primary" href="#">Quên mật khẩu?</a>
                </div> */}
                <Button className="btn btn--primary form__btn-register" type="submit">Đăng nhập</Button>
            </form>
        </div>
    )
}

export default LoginForm