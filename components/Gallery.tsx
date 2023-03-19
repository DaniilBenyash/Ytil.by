import Title from "./Title"
import { getPosts, type data } from "../features/getPosts"
import { useEffect, useState } from "react"
import Card from './Card'
import Glow from "./Glow"

const Galery = () => {

    const [cards, setCards] = useState<Array<data> | null>(null)
    
    useEffect(() => {

        let ignore = false

        getPosts()
        .then((result) => {
            if(!ignore && result instanceof Array<data>){
                setCards(result)                
            }
        })

        return () => {
            ignore = true
        }
    }, [])

    return (
        <>
            {cards !== null
            ?
            <section className="gallery">
                <Title greenText="Наши" text="последние работы"/>
                <div className="gallery__section">
                    {cards.map(card => <Card {...card} key={card.id}/>)}
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