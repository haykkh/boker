export const SetAuthAndUser = (state, { auth, user }) => {
  const newState = { ...state }
  newState.authorized = auth
  newState.user = user
  console.log('user', user)
  return newState
}

export const SetAccessToken = (state, token) => {
  const newState = { ...state }
  newState.user.access_token = token
  return newState
}
