import type { FunctionComponent } from "react"

import Avatar from "../components/avatar/Avatar"
import SidebarLink from "../components/buttons/SidebarLink"

const Sidebar: FunctionComponent = () => {
    return (
        <aside className="sidebar flex flex-col">
            <div className="sidebar-wrapper bg-[#132450] h-[60px] lg:min-h-full w-full lg:w-[240px] flex lg:flex-col justify-between items-center lg:items-stretch">
                <div className="sidebar_main flex flex-col gap-3 pt-1 lg:pt-4 lg:flex-1">
                    <div className="sidebar_expand-btn justify-end pr-4 cursor-pointer hidden lg:flex">
                        <img src="/assets/images/chevrons-left.svg" alt="Expand" />
                    </div>
                    <div className="sidebar_logo flex items-center text-white px-4 gap-3">
                        <div className="sidebar_logo-img">
                            <img src="/assets/images/logo.svg" alt="" />
                        </div>
                        <div className="sidebar_logo-text uppercase font-semibold">
                            enagram
                        </div>
                    </div>
                    <div className="sidebarL_links mt-3 pl-4 flex-col gap-4 hidden lg:flex">
                        <SidebarLink icon="/assets/images/check.svg" label="მართლმწერი" active={false} />
                        <SidebarLink icon="/assets/images/text.svg" label="ტექსტის შედარება" active={true} />
                        <SidebarLink icon="/assets/images/mic.svg" label="ხმა &rarr; ტექსტი" active={false} />
                        <SidebarLink icon="/assets/images/voice.svg" label="ტექსტი &rarr; ხმა" active={false} />
                        <SidebarLink icon="/assets/images/pdf.svg" label="PDF კონვერტაცია" active={false} />
                    </div>
                </div>
                <div className="sidebar_footer hidden lg:flex">
                    <Avatar />
                </div>
                <div className="menu_btn pr-4 block lg:hidden">
                    <img src="/assets/images/menu.svg" alt="" />
                </div>
            </div>
            <div className="current_location flex items-center p-5 gap-2 lg:hidden border-b-2 border-[#E0E0E0]">
                <div className="current_location-icon scale-105">
                    <img src='/assets/images/text.svg' alt='text' />
                </div>
                <div className='current_location-label text-[#132450] font-semibold'>
                    ტექსტის შედარება
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
