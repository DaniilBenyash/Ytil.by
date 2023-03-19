import { getToken } from "./getToken";

export type data = {
    children?: {
        data: Array<{
            id: string,
            media_url: string,
            permalink: string,
        }>,
        id: string,
        media_type: string,
        media_url: string,
        permalink: string,
        timestamp: string,
    },
    id: string,
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM',
    media_url: string,
    permalink: string,
    timestamp: string,
}

type paging = {
    cursors: {
        after: string,
        before: string,
    }
    next: string   
}
type response = {
    data: data,
    paging: paging,
}

const url = "https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,thumbnail_url,permalink,children{fields=id,media_url,thumbnail_url,permalink}&limit=6&access_token="

export async function getPosts() {
    try{
        const token = await getToken()
        
        const response = await fetch(url + token)    
        
        const data = await response.json()

        return data.data

    } catch(error: any){
        
        return error
    }
}