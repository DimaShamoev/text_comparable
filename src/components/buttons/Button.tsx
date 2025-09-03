import type { FunctionComponent } from "react"

interface IButton {
    icon?: string
    onClick?: () => void 
    label: string 
    active: boolean
}

const Button: FunctionComponent<IButton> = ({ label, icon, onClick, active }) => {
    return (
        <button
            className={`p-2 rounded-md flex gap-2 cursor-pointer w-full text-white ${active ? "bg-[#4571E4]" : "bg-[#383A4899]"}`}
            onClick={onClick}
        >
            {icon && (
                <div className="button_icon">
                    <img src={icon} alt={label} />
                </div>
            )}
            <div className="button_label">
                {label}
            </div>
        </button>
    )
}

export default Button