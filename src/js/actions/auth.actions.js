export const SetAuth = state => {
  const newState = { ...state }
  newState.authorized = true
  return newState
}
