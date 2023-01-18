import { ReactNode } from "react"

type CardAboutProps = {
    icon: ReactNode,
    text: string,
}

const CardAbout = ({icon, text}: CardAboutProps) => {
    return (
        <div className="card_about">
            <div className="card_about__icon">
                {icon}
            </div>
            <h3 className="card_about__name">{text}</h3>
        </div>
    )
}

export default CardAbout