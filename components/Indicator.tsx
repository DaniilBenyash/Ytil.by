type indicatorPropsType = {
    amount: number,
    activeNumber: number,
}
const Indicator = ({amount, activeNumber}: indicatorPropsType) => {
    const array = []

    for(let i = 0; i <= amount; i++){
        array.push(i)
    }

    return (
        <div className="indicator">
                {array.map((el, id) => {
                    return(
                        <div key={el} className={`indicator__dot ${activeNumber === id && 'indicator__dot-active'}`}></div>    
                    )
                })}
        </div>    
    )
}

export default Indicator