export const setToken = () => {
  sessionStorage.setItem('TOKEN', "90aa16f24d04c7d882051412f9ec45b")
}

export const getToken = () => {
  return sessionStorage.getItem('TOKEN')
}

export const removeToken = () => {
  sessionStorage.removeItem('TOKEN')
}
