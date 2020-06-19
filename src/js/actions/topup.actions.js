import { Http } from 'hyperapp-fx'

const webhookUrl = process.env.WEBHOOK_URL

export const SetTopUp = (state, evt) => ({
  ...state,
  tabs: {
    ...state.tabs,
    topup: {
      ...state.tabs.topup,
      amount: evt.target.value
    }
  }
})

export const SendTopUp = state => [
  { ...state },
  Http({
    url: webhookUrl,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': 'boker',
        'content': `pac <@${state.user.id}> ${state.tabs.topup.amount * 1000}`
      })
    },
    action: (_) => state
  })
]