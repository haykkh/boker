import { SetAuthAndUser, SetAccessToken } from './actions/auth.actions'
import { Authorize } from './utils/auth.utils'

const state = {
  tabs: {
    topup: {
      label: 'top up',
      count: 10
    },
    balances: {
      label: 'balances',
      numberOfUsers: 10,
      users: []
    },
    games: {
      label: 'games'
    }
  },
  user: {},
  currentTab: 'topup',
  authorized: false
}

export default [
  state,
  [
    Authorize,
    {
      onaccesstoken: SetAccessToken,
      onfinish: SetAuthAndUser
    }
  ]
]
