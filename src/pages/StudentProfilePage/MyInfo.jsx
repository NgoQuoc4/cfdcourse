
import Button from "@/components/Button";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { useAuthContext } from "@/context/AuthContext"
import { useEffect, useRef, useState } from "react";

const MyInfo = () => {
    const initialForm = useRef({
        firstName: "",
        email: "",
        facebookURL: "",
        introduce: "",
        phone: "",
        website: "",
    });

    const { profile, handleUpdateProfile } = useAuthContext();
    const [form, setForm] = useState(initialForm.current);
    const [error, setError] = useState({});

    const register = (registerField) => {
        return {
            name: registerField,
            error: error[registerField],
            value: form[registerField],
            onChange: (e) => setForm({ ...form, [registerField]: e.target.value }),
        };
    };

    const isFormChanged = JSON.stringify(initialForm.current) !== JSON.stringify(form);

    useEffect(() => {
        if (profile) {
            const { firstName, email, phone, facebookURL, website, introduce } = profile;
            const newForm = {
                firstName,
                email,
                phone,
                password: "******",
                facebookURL,
                website,
                introduce,
            };
            setForm(newForm);
            initialForm.current = newForm;
        }
    }, [profile])

    const _onSubmit = (e) => {
        e.preventDefault();
        if (!isFormChanged) return
        // e.preventDefault();
        // start validate
        const errorObject = {};
        if (!!!form.firstName) {
            errorObject.firstName = "Vui lòng nhập tên";
        }
        if (!!!form.phone) {
            errorObject.phone = "Vui lòng nhập phone";
        } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
            errorObject.phone = "Vui lòng nhập đúng định dạng phone";
        }

        if (!!!form.facebookURL) {
            errorObject.facebookURL = "Vui lòng nhập link facebook";
        } else if (
            form.facebookURL &&
            !/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/.test(
                form.facebookURL
            )
        ) {
            errorObject.facebookURL = "Vui lòng nhập đúng định dạng website";
        }
        if (!!!form.website) {
            errorObject.website = "Vui lòng nhập link website";
        } else if (
            form.website &&
            !/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/.test(
                form.website
            )
        ) {
            errorObject.website = "Vui lòng nhập đúng định dạng website";
        }
        setError(errorObject);

        if (Object.keys(errorObject).length > 0) {
            console.log("Submit error: ", errorObject);
        } else {
            handleUpdateProfile?.(form)
        }
    };



    return (
        <div className="tab__content-item" style={{ display: 'block' }}>
            <form className="form">
                <div className="form-container">
                    <Input
                        label="Họ và tên"
                        required
                        placeholder="Họ và tên"
                        {...register("firstName")}
                    />
                    <Input
                        label="Số điện thoại"
                        // required
                        placeholder="Số điện thoại"
                        {...register("phone")}
                    />

                </div>
                <div className="form-container">
                    <Input
                        label="Email"
                        // required
                        placeholder="Email"
                        {...register("email")}
                        disabled
                    />
                    <Input
                        label="Mật khẩu"
                        // required
                        placeholder="Mật khẩu"
                        {...register("password")}
                        disabled
                    />
                </div>
                <Input
                    label="Facebook URL"
                    required
                    placeholder="Facebook URL"
                    {...register("facebookURL")}
                />
                <Input
                    label="Website"
                    required
                    placeholder="Website"
                    {...register("website")}
                />
                <Input
                    label="Giới thiệu bản thân"
                    required
                    renderInput={(inputProps) => {
                        return <TextArea  {...inputProps} />
                    }}
                    {...register("introduce")}
                />
                <Button
                    style={{
                        width: "100%",
                        pointerEvents: isFormChanged ? "all" : "none",
                    }}
                    variant="primary"
                    onClick={_onSubmit}
                    disabled={!isFormChanged}
                >
                    Gửi
                </Button>
            </form>
        </div>
    )
}

export default MyInfo