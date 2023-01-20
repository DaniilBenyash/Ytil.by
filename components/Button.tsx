
type typePropsButton = {
    background: string,
    icon: string,
    name: string,
    link: string,
}

const Button = ({icon, name, link, background}: typePropsButton) => {
    return (
        <a href={link} className="button" style={{background: background}}>
            <p className="button__name">{name}</p>
            <img src={icon} alt={name} />
        </a>
    )
}

export default Button