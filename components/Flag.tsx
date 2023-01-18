import { ReactNode } from "react"

type FlagProps = {
    className: string,
    text: string,
    icon?: ReactNode
}

const Flag = ({className, text, icon}: FlagProps) => {
    return (
        <div className={`flag ${className}`}><div className="flag__icon">{icon}</div>{text}</div>
    )
}

export default Flag