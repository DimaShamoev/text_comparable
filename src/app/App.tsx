import { type FunctionComponent } from "react"

import Sidebar from "../layout/Sidebar"
import Main from "../layout/Main"

const App: FunctionComponent = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <Sidebar />
            <Main />
        </div>
    )
}

export default App