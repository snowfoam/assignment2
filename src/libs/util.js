
export const TOKEN_KEY = 'token'

export const setToken = (token) => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.setItem(TOKEN_KEY,JSON.stringify(token))
}

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem(TOKEN_KEY))
  if ( token ) return token
  else return false
}


