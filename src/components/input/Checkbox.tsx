import type { FunctionComponent } from "react"

interface ICheckbox {
    label?: string
}

const Checkbox: FunctionComponent<ICheckbox> = ({ label }) => {
    return (
        <div className="checkbox flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5" />
            { label && (
                <div className="checkbox_label text-[#383A48]">
                    { label }
                </div>
            )}
        </div>
    )
}

export default Checkbox
