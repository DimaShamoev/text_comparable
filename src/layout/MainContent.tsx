import { useState, type FunctionComponent } from "react"

import Textarea from "../components/input/Textarea"
import Button from "../components/buttons/Button"

import type { IDifference } from "../types/difference.type"

const MainContent: FunctionComponent = () => {
    const [firstText, setFirstText] = useState<string>("")
    const [secondText, setSecondText] = useState<string>("")
    const [diff, setDiff] = useState<IDifference[] | null>(null)

    const handleCompare = (): void => {
        const firstChars = firstText.split("")
        const secondChars = secondText.split("")

        const result: { value: string; type: "normal" | "added" | "removed" }[] = []
        const maxLen = Math.max(firstChars.length, secondChars.length)

        for (let i = 0; i < maxLen; i++) {
            if (firstChars[i] === secondChars[i]) {
                if (firstChars[i]) result.push({ value: firstChars[i], type: "normal" })
            } else {
                if (firstChars[i]) result.push({ value: firstChars[i], type: "removed" })
                if (secondChars[i]) result.push({ value: secondChars[i], type: "added" })
            }
        }

        setDiff(result)
    }

    return (
        <div className="pt-4 flex flex-col gap-5">
            <div className="inputs_wrapper flex flex-col sm:flex-row items-center gap-4">
                <Textarea value={firstText} onChange={setFirstText} diff={diff} mode="old" />

                <div className="arrow">
                    <img
                        src="/assets/images/Arrow.svg"
                        className="rotate-90 sm:rotate-0 sm:scale-200"
                        alt="direct_arrow"
                    />
                </div>

                <Textarea value={secondText} onChange={setSecondText} diff={diff} mode="new" />
            </div>

            <div className="submit_btn flex justify-center w-max mx-auto">
                <Button onClick={handleCompare} label="შედარება" active />
            </div>
        </div>
    )
}

export default MainContent