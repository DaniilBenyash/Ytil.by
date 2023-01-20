import Title from "./Title"
import { getPosts, type data } from "../features/getPosts"
import { useEffect, useState } from "react"
import CardIamge from "./CardImage"
import Glow from "./Glow"

const Galery = () => {

    const [cards, setCards] = useState<Array<data>>([])
    
    useEffect(() => {

        let ignore = false

        getPosts()
        .then(result => {
            if(!ignore){
                setCards(result)
            }
        });

        return () => {
            ignore = true
        }
    }, [])

    return (
        <>
            {cards
            ?
            <section className="gallery">
                <Title greenText="Наши" text="последние работы"/>
                <div className="gallery__section">
                    {cards.map(card => <CardIamge {...card} key={card.id}/>)}
                </div> 
                <Glow color="green" className="gallery__glow_green"/>
                <Glow color="orange" className="gallery__glow_orange"/>
            </section>
            : 
            null
            }
        </>
        
    )
}

export default Galery