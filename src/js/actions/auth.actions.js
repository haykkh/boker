export const SetAuthorizing = (state, value) => ({
  ...state,
  authorizing: value
})

export const SetAccessToken = (state, token) => ({
  ...state,
  user: {
    ...state.user,
    access_token: token
  }
})

export const SetAuthAndUser = (state, { auth, user }) => ({
  ...state,
  user: user,
  authorized: auth
})
