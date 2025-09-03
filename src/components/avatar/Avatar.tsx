import type { FunctionComponent } from "react"

const Avatar: FunctionComponent = () => {
    return (
        <div className="avatar_wrapper flex items-center w-full p-4 border-t-2 border-[#9EB9FF33]">
            <div className="avatar flex items-center flex-1 gap-2">
                <div className="avatar_icon rounded-full border-2 border-white bg-[#9EC8FF] text-[#132450] w-[30px] h-[30px] flex items-center justify-center">
                    თ
                </div>
                <div className="avatar_label text-white">
                    თამარ ონიანი
                </div>
            </div>
            <div className="avatar_settings cursor-pointer">
                <img src="/assets/images/dots-menu.svg" alt="params" />
            </div>
        </div>
    )
}

export default Avatar