import type { FunctionComponent } from "react"

import Button from "../components/buttons/Button"
import Checkbox from "../components/input/Checkbox"
import LanguageDropdown from "../components/input/LanguageDropdown"

const MainHeader: FunctionComponent = () => {
    return (
        <div className="main_header flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between border-b-2 border-b-[#EDEDED] pb-4">
            <div className="main_header-right flex flex-col sm:flex-row sm:items-center gap-4">
                <LanguageDropdown />
                <Checkbox label="ფორმატის შენარჩუნება" />
            </div>
            <div className="main_header-left">
                <Button label="ახლის გახსნა" active={false} icon="/assets/images/add_icon.svg" onClick={() => window.location.reload()} />
            </div>
        </div>
    )
}

export default MainHeader