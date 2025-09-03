import { useState, type FunctionComponent } from "react"

import Textarea from "../components/input/Textarea"
import Button from "../components/buttons/Button"

import type { IDifference } from "../types/difference.type"

const MainContent: FunctionComponent = () => {

    const [firstText, setFirstText] = useState<string>("")
    const [secondText, setSecondText] = useState<string>("")
    const [diff, setDiff] = useState<IDifference[] | null>(null)

    const handleCompare = (): void => {
        const firstWords = firstText.split(/\s+/).filter(Boolean)
        const secondWords = secondText.split(/\s+/).filter(Boolean)
        const result: typeof diff = []

        let i = 0, j = 0
        while (i < firstWords.length || j < secondWords.length) {
            if (i < firstWords.length && j < secondWords.length && firstWords[i] === secondWords[j]) {
                result.push({ value: firstWords[i] + " ", type: "normal" })
                i++; j++
            } else if (i < firstWords.length && (j >= secondWords.length || !secondWords.slice(j).includes(firstWords[i]))) {
                result.push({ value: firstWords[i] + " ", type: "removed" })
                i++
            } else if (j < secondWords.length) {
                result.push({ value: secondWords[j] + " ", type: "added" })
                j++
            }
        }

        setDiff(result)
    }

    return (
        <div className="pt-4 flex flex-col gap-5">
            <div className="inputs_wrapper flex flex-col sm:flex-row items-center gap-4">
                <Textarea value={firstText} onChange={setFirstText} diff={diff} />
                <div className="arrow">
                <img
                    src="/assets/images/Arrow.svg"
                    className="rotate-90 sm:rotate-0 sm:scale-200"
                    alt=""
                />
                </div>
                <Textarea value={secondText} onChange={setSecondText} diff={diff} />
            </div>

            <div className="submit_btn flex justify-center w-max mx-auto">
                <Button onClick={handleCompare} label="შედარება" active />
            </div>
        </div>
    )
}

export default MainContent