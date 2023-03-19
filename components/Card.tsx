import { useEffect } from "react"
import { type data } from "../features/getPosts"
import CardAlbum from "./CardAlbum"
import CardImage from "./CardImage"
import CardVideo from "./CardVideo"

const Card = (props: data) => {

    return (
        <>
            {props.media_type === 'CAROUSEL_ALBUM' && props.children
            && 
                <CardAlbum data={props.children.data}/>
            }
            {props.media_type === 'IMAGE' && <CardImage url={props.media_url}/>}
            {props.media_type === 'VIDEO' && <CardVideo url={props.media_url}/>}
            
        </>   
    )
}

export default Card