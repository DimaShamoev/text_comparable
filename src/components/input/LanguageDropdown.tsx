import { useState, type FunctionComponent } from "react"

const LanguageDropdown: FunctionComponent = () => {

    const [openLanguages, setOpenLanguages] = useState<boolean>(false)

    return (
        <div className="w-full sm:w-[155px] relative">
            <div
                onClick={() => setOpenLanguages(prev => !prev)}
                className="selected_input border-2 border-[#E0E0E0] flex justify-between w-full py-1 px-2 rounded-md cursor-pointer text-[#383A48]"
            >
                ქართული
                <img src="/assets/images/arrow_d.svg" alt="arrow_down" />
            </div>
            <div className={`languages_list absolute top-[110%] bg-white rounded-md border-[#E0E0E0] border-2 w-full p-2 flex flex-col gap-2 ${openLanguages ? 'block' : 'hidden'}`}>
                <label htmlFor="language" className="language_option flex items-center gap-1" onClick={() => setOpenLanguages(false)}>
                    <div className="select_box">
                        <input type="radio" name="language" id="language" className="h-4 w-4" defaultChecked />
                    </div>
                    <div className="language_label">
                        ქართული
                    </div>
                </label>
                <label htmlFor="language2" className="language_option flex items-center gap-1" onClick={() => setOpenLanguages(false)}>
                    <div className="select_box">
                        <input type="radio" name="language" id="language2" className="h-4 w-4" />
                    </div>
                    <div className="language_label">
                        ქართული
                    </div>
                </label>
            </div>
        </div>
    )
}

export default LanguageDropdown