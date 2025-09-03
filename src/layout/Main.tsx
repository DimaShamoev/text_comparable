import type { FunctionComponent } from "react"

import MainHeader from "./MainHeader"
import MainContent from "./MainContent"

const Main: FunctionComponent = () => {
    return (
        <main className="main flex-1 flex flex-col p-6">
            <MainHeader />
            <MainContent />
        </main>
    )
}

export default Main