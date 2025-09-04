import { useState, type FunctionComponent } from "react";

import Textarea from "../components/input/Textarea";
import Button from "../components/buttons/Button";

import type { IDifference } from "../types/difference.type";

const MainContent: FunctionComponent = () => {
    const [firstText, setFirstText] = useState<string>("");
    const [secondText, setSecondText] = useState<string>("");
    const [diff, setDiff] = useState<IDifference[] | null>(null);

    const handleCompare = (): void => {
        const originalChars = firstText.split("");
        const newChars = secondText.split("");

        const originalLength = originalChars.length;
        const newLength = newChars.length;

        const table: number[][] = Array.from({ length: originalLength + 1 }, () => Array(newLength + 1).fill(0))

        for (let i = 1; i <= originalLength; i++) {
            for (let j = 1; j <= newLength; j++) {
                if (originalChars[i - 1] === newChars[j - 1]) {
                    table[i][j] = table[i - 1][j - 1] + 1
                } else {
                    table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
                }
            }
        }

        const diffResult: IDifference[] = []
        let originalIndex = originalLength
        let newIndex = newLength;

        while (originalIndex > 0 || newIndex > 0) {
            if (
                originalIndex > 0 &&
                newIndex > 0 &&
                originalChars[originalIndex - 1] === newChars[newIndex - 1]
            ) {
                diffResult.unshift({ value: originalChars[originalIndex - 1], type: "normal" });
                originalIndex--;
                newIndex--;
            } else if (newIndex > 0 && (originalIndex === 0 || table[originalIndex][newIndex - 1] >= table[originalIndex - 1][newIndex])) {
                diffResult.unshift({ value: newChars[newIndex - 1], type: "added" });
                newIndex--;
            } else if (originalIndex > 0) {
                diffResult.unshift({ value: originalChars[originalIndex - 1], type: "removed" });
                originalIndex--;
            }
        }

        setDiff(diffResult);
    };


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
    );
};

export default MainContent;