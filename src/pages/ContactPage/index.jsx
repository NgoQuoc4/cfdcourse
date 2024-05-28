import { useNavigate } from "react-router-dom"
import ContactForm from "./ContactForm"
import ContactSidebar from "./ContactSidebar"
import ContactTitle from "./ContactTitle"
import PATHS from "@/constants/paths"
import useMutation from "@/hooks/useMutation"
import { subscribesService } from "@/services/subscribesService"

export const ContactPage = () => {

    const { execute, data, error, loading, setData } = useMutation(subscribesService.getSubsriber)
    const navigate = useNavigate();
    // submit form data
    const handleSubmitForm = async (formData) => {
        const payload = {
            name: formData?.name || "",
            email: formData?.email || "",
            phone: formData?.phone || "",
            title: formData?.topic || "",
            description: formData?.content || "",
        };
        execute?.(payload, {
            onSuccess: (data) => {
                console.log("data", data);
                navigate(PATHS.HOME)
            },
            onFail: (error) => {
                console.log("error", error);
            },
        })
    };
    return (
        <main className="mainwrapper contact --ptop">
            <div className="container">
                <ContactTitle />
            </div>
            <div className="contact__content">
                <div className="container">
                    <div className="wrapper">
                        <ContactSidebar />
                        <ContactForm handleSubmitForm={handleSubmitForm} />
                    </div>
                </div>
            </div>
        </main>

    )
}

export default ContactPage
