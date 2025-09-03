import type { FunctionComponent } from "react"

interface ISidebarLinkProps {
    icon: string
    label: string
    active: boolean
}

const SidebarLink: FunctionComponent<ISidebarLinkProps> = ({ icon, label, active }) => {
    return (
        <div className={`sidebar_links-link flex items-center gap-2 px-4 py-3 rounded-l-full cursor-pointer ${active && 'bg-white'}`}>
            <div className="link-icon">
                <img src={icon} alt={label} />
            </div>
            <div className={`link-label ${active ? 'text-[#132450] font-semibold' : 'text-white'}`}>
                { label }
            </div>
        </div>
    )
}

export default SidebarLink
