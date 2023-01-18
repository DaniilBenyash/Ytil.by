type TitleProps = {
    greenText: string,
    text: string,
}

const Title = ({greenText, text}: TitleProps) => {
    return (
        <h1 className="title"><span className="title-green">{greenText}</span> {text}</h1>
    )
}

export default Title