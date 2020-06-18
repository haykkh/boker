export const SetGettingDb = (state, value) => ({
  ...state,
  gettingDb: value
})

export const SetDb = (state, { db, haveDb }) => ({
  ...state,
  tabs: {
    ...state.tabs,
    balances: {
      ...state.tabs.balances,
      users: db
    }
  },
  haveDb: haveDb
})
