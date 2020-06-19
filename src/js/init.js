import { SetAuthorizing, SetAuthAndUser, SetAccessToken } from './actions/auth.actions'
import { Authorize } from './utils/auth.utils'

import { SetGettingDb, SetDb } from './actions/db.actions'
import { FetchDb } from './utils/db.utils'

const state = {
  tabs: {
    topup: {
      label: 'top up',
      amount: 5
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
  authorizing: false,
  haveDb: false,
  gettingDb: false
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
  ],
  [
    FetchDb,
    {
      ongetting: SetGettingDb,
      onfinish: SetDb
    }
  ]
]
