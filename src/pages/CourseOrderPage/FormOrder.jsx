import Input from '@/components/Input'
import Select from '@/components/Select'
import { useAuthContext } from '@/context/AuthContext';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'

const FormOrder = ({ types, disabled }, ref) => {

    const { profile } = useAuthContext();
    const [error, setError] = useState({});

    // type check
    const typeOptions =
        types?.length > 0
            ? [
                { value: "", label: "--" },
                ...types.map((type) => ({ value: type, label: type })),
            ]
            : [{ value: "", label: "--" }];
    // form

    const { firstName: profileName, email: profileEmail, phone: profilePhone } = profile || {};
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        type: "",
    })

    useEffect(() => {
        setForm({
            name: profileName || "",
            email: profileEmail || "",
            phone: profilePhone || "",
            type: "",
        })

    }, [profileName, profileEmail, profilePhone])

    const register = (registerField) => {
        return {
            name: registerField,
            error: error[registerField],
            value: form[registerField],
            onChange: (e) => setForm({ ...form, [registerField]: e.target.value })
        }
    }

    useImperativeHandle(
        ref,
        () => {
            return {
                form: form,
                setError: (error) => setError(error),
                setForm: setForm,
            }
        },
        [form],
    )
    return (
        <div className="itemorder formorder">
            <h3 className="title --t3">Thông tin cá nhân</h3>
            <div className="boxorder">
                <div className="form">
                    <div className="form-container">
                        <Input
                            label="name"
                            required
                            disabled={disabled}
                            placeholder="Họ và Tên"
                            {...register("name")}
                        />
                        <Input
                            label="email"
                            required
                            placeholder="Email"
                            disabled
                            {...register("email")}
                        />
                    </div>
                    <div className="form-container">
                        <Input
                            label="phone"
                            required
                            disabled={disabled}
                            placeholder="Số điện thoại"
                            {...register("phone")}
                        />
                        <Input
                            label="Hình thức học"
                            required
                            disabled={disabled}
                            {...register("type")}
                            renderInput={(inputProps) => {
                                return <Select options={typeOptions} {...inputProps} />
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(FormOrder) 