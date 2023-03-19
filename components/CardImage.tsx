const CardImage = ({url}: {url: string}) => {

    return (
        <div className="card_image">
            <div className="card_image__container">
                <div className="card_image__img" style={{backgroundImage: `url(${url})`}}></div>
            </div>
        </div>
  
    )
}

export default CardImage