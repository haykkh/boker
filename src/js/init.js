import { SetAuthorizing, SetAuthAndUser, SetAccessToken } from './actions/auth.actions'
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
  user: {
    username: '',
    discriminator: '',
    avatar: '',
    id: ''
  },
  currentTab: 'topup',
  authorized: false,
  authorizing: false
}

export default [
  state,
  [
    Authorize,
    {
      onauthorizing: SetAuthorizing,
      onaccesstoken: SetAccessToken,
      onfinish: SetAuthAndUser
    }
  ]
]
