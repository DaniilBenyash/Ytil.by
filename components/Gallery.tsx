import Title from "./Title"
import { getPosts, type data } from "../features/getPosts"
import { useEffect, useState } from "react"
import CardIamge from "./CardImage"

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
            <section className="galery">
                <Title greenText="Наши" text="последние работы"/>
                <div className="galery__section">
                    {cards.map(card => <CardIamge {...card} key={card.id}/>)}
                </div> 
            </section>
            : 
            null
            }
        </>
        
    )
}

export default Galery