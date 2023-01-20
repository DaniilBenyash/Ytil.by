import { useState, useRef } from "react"
import { flushSync } from "react-dom"
import { type data } from "../features/getPosts"
import Indicator from "./Indicator"

const CardImage = (props: data) => {
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
            {props.children ? 
                <div className="card_image">
                    {index != 0 && <button className="card_image__button card_image__button_left" onClick={() => slide('left')}></button>}
                    <div className="card_image__container">
                        {props.children.data.map((image, id) =>
                            <div className="card_image__img" style={{backgroundImage: `url(${image.media_url})`}} key={image.id} ref={
                                index === id ?
                                selectedRef
                                :
                                null
                            }>

                            </div>
                        )}
                    </div>
                    {index != props.children.data.length - 1 && <button className="card_image__button card_image__button_right" onClick={() => slide('right')}></button>}
                    <Indicator amount={props.children.data.length - 1} activeNumber={index}/>
                </div>
            :
                <div className="card_image">
                    <div className="card_image__container">
                        <div className="card_image__img" style={{backgroundImage: `url(${props.media_url})`}}></div>
                    </div>
                </div>
            }
        </>   
    )
}

export default CardImage