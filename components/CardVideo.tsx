const CardVideo = ({url}: {url: string}) => {
    return (
        <div className="card_video">
            <div className="card_video__container">
                <video  className="card_video__content" controls>
                    <source src={url}/>
                </video>
            </div>
        </div>   
    )
}

export default CardVideo