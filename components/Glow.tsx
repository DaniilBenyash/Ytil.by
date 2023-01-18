type GlowProps = {
    color: 'green' | 'orange',
    className: string,
}

const Glow = ({ color, className }: GlowProps) => {
    return (
        <div className={`glow-${color} ${className}`}></div>
    )
}

export default Glow