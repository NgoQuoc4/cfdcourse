import React, { useEffect, useRef, useState } from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Select from "../../components/Select"
import TextArea from "../../components/TextArea"
const ContactForm = ({ handleSubmitForm }) => {
    const firstInputRef = useRef();

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        topic: "",
        content: "",
    })

    const [error, setError] = useState({})
    const _onChange = (e) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    }

    const _onSubmit = () => {
        console.log("Submit Form", form)
        const errorObject = {};
        if (form.name === "") {
            errorObject.name = "Vui lòng điền họ và tên";
        }
        if (form.email === "") {
            errorObject.email = "Vui lòng điền email";
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
            errorObject.email = "Vui lòng điền đúng định dạng email";
        }
        if (form.phone === "") {
            errorObject.phone = "Vui lòng điền số điện thoại";
        } else if (!/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(form.phone)) {
            errorObject.phone = "Vui lòng điền đúng định dạng phone";
        }
        if (form.topic === "") {
            errorObject.topic = "Vui lòng chọn chủ đề"
        }
        if (form.content === "") {
            errorObject.content = "Vui lòng điền nội dung"
        }

        setError(errorObject);

        if (Object.keys(errorObject).length > 0) {
            console.log("Error: ", errorObject);
        } else {
            console.log(`Name: ${form.name} , Email: ${form.email} , Phone: ${form.phone}`);
            handleSubmitForm?.(form);
        }
    }

    const register = (registerField) => {
        return {
            name: registerField,
            error: error[registerField],
            value: form[registerField],
            onChange: (e) => setForm({ ...form, [registerField]: e.target.value })
        }
    }

    useEffect(() => {
        firstInputRef.current.focus();
    }, [])

    return (
        <div className="form">
            <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
            <Input
                // name="name"
                label="Họ và Tên"
                requied
                placeholder="Họ và Tên"
                // error={error.name}
                // value={form.name}
                // onChange={_onChange}
                ref={firstInputRef}
                {...register("name")}
            />
            <Input
                // name="email"
                label="Email"
                requied={true}
                placeholder="abc@gmail.com"
                // error={error.email}
                // value={form.value}
                // onChange={_onChange}
                {...register("email")}
            />
            <Input
                // name="phone"
                label="Số điện thoại"
                requied={true}
                placeholder="0912345678"
                // value={form.phone}
                // error={error.phone}
                // onChange={_onChange}
                {...register("phone")}

            />
            <Input
                // name="topic"
                label="Chủ đề cần hỗ trợ"
                requied={true}
                // error={error.topic}
                // value={form.topic}
                // onChange={_onChange}
                {...register("topic")}
                renderInput={(inputProps) => {
                    return <Select
                        options={[
                            { value: "", label: "--" },
                            { value: "react", label: "ReactJs" },
                            { value: "responsive", label: "Web Responsive" }
                        ]}
                        {...inputProps} />
                }}
            />
            <Input
                // name="content"
                label="Nội dung"
                requied={true}
                // error={error.content}
                // value={form.content}
                // onChange={_onChange}
                {...register("content")}
                renderInput={(inputProps) => {
                    return <TextArea {...inputProps} />
                }}
            />
            <div className="btncontrol">
                <Button variant="primary" onClick={_onSubmit}>Gửi</Button>
            </div>
        </div >
    )
}

export default ContactForm