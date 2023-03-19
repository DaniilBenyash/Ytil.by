import { useState, useRef } from "react"
import { flushSync } from "react-dom"
import Indicator from "./Indicator"

type CardAlbumProps = {
    data: Array<{
        id: string,
        media_url: string,
        permalink: string,
    }>,
}

const CardAlbum = ({ data }: CardAlbumProps) => {
    const selectedRef = useRef<any>(null)

    const [index, setIndex] = useState(0)  

    function slide(direction: string){
        
        if(direction === 'left'){
            flushSync(() => setIndex(index - 1)) 
            selectedRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        } else if('right') {
            flushSync(() => setIndex(index + 1)) 
            selectedRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            
        }
    }

    return (
        <>
            <div className="card_album">
                {index != 0 && <button className="card_album__button card_album__button_left" onClick={() => slide('left')}></button>}
                <div className="card_album__container">
                    {data.map((image, id) =>
                        <div className="card_album__img" style={{backgroundImage: `url(${image.media_url})`}} key={image.id} ref={
                            index === id ?
                            selectedRef
                            :
                            null
                        }>

                        </div>
                    )}
                </div>
                {index != data.length - 1 
                && 
                <button className="card_album__button card_album__button_right" onClick={() => slide('right')}></button>
                }
                <Indicator amount={data.length - 1} activeNumber={index}/>
            </div>
        </>   
    )
}

export default CardAlbum