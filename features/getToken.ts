type tokenType = {
    "access_token": string,
    "token_type": string,
    "expires_in": number
}

export async function getToken(){
    const tokenFetch = await fetch('/api/tokenInfo')
    const dataToken: tokenType = JSON.parse(await tokenFetch.json())
    
    if(dataToken.expires_in/60/60/24 < 50){
        try{
            const url = 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' 

            const refreshToken = await fetch(url+dataToken.access_token)
            const dataRefreshToken: tokenType = await refreshToken.json()

            const response = await fetch('/api/tokenInfo', {
                method: 'POST',
                body: JSON.stringify(dataRefreshToken),
                headers: {
                  'Content-Type': 'application/json',
                }
              })
              const data:tokenType = JSON.parse(await response.json())

            return data.access_token

        } catch(error: any){

            return error
        }
        
    }else{
        return dataToken.access_token
    }
}