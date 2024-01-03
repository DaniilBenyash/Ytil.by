import { FirebaseDBService} from '../DB/firebaseDBServices'

export type tokenType = {
    "access_token": string,
    "token_type": string,
    "expires_in": number,
}

const firebase = new FirebaseDBService()

export async function getToken(){
    
    
    const dataToken: any = await firebase.getData()
    if(dataToken.expires_in/60/60/24 < 10){
        try{
            
            const url = 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' 

            const refreshToken = await fetch(url+dataToken.access_token)
            const dataRefreshToken: tokenType = await refreshToken.json()

            return await firebase.setData(dataRefreshToken)
            
        } catch(error: any){
            return error
        }
        
    }else{
        return dataToken.access_token
    }
}
