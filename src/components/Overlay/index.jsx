import { useMainContext } from "@/context/MainContext"

export const Overlay = () => {
    const { handleShowNavbar } = useMainContext();
    return (
        <div className="overlay" onClick={() => handleShowNavbar(false)} />
    )
}
export default Overlay
