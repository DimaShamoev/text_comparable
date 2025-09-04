import type { FunctionComponent } from "react"
import type { IDifference } from "../../types/difference.type"

interface ITextareaProps {
    value: string
    onChange: (val: string) => void
    diff?: IDifference[] | null
    mode: "old" | "new"
}

const Textarea: FunctionComponent<ITextareaProps> = ({ value, onChange, diff, mode }) => {
    if (!diff) {
        return (
            <textarea
                className="h-[540px] bg-[#F0F7FF] resize-none w-full p-4 outline-none text-[#383A48] rounded-md"
                placeholder="დაიწყე წერა..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        )
    }

    return (
        <div className="h-[540px] bg-[#F0F7FF] resize-none w-full p-4 outline-none text-[#383A48] rounded-md overflow-y-auto whitespace-pre-wrap">
            {diff.map((part, i) => {
                if (part.type === "normal") return <span key={i}>{part.value}</span>
                if (mode === "old" && part.type === "removed")
                    return <span key={i} className="text-white bg-[#B50022]">{part.value}</span>
                if (mode === "new" && part.type === "added")
                    return <span key={i} className="text-white bg-[#3EBC5E]">{part.value}</span>
                return null
            })}
        </div>
    )
}

export default Textarea