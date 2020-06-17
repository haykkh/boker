const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.status)
  }
  return response
}

const fetchAccessToken = async (url, body) =>
  await fetch(
    url, { method: 'POST', body: body }
  ).then(handleErrors)
    .then(res => res.json())
    .then(({ access_token, token_type }) => ({ access_token, token_type }))
    .catch(error => {
      console.log('fetchAccessToken error: ', error)
      return error
    })

const fetchUserData = async (url, tokens) =>
  await fetch(
    url,
    {
      headers: {
        authorization: `${tokens.token_type} ${tokens.access_token}`
      }
    }
  ).then(handleErrors)
    .then(res => res.json())
    .then(({ username, discriminator, avatar, id }) => ({ username, discriminator, avatar, id }))
    .catch(error => {
      console.log('fetchUserData error: ', error)
      return error
    })

export const Authorize = (dispatch, options) => {
  dispatch(options.onauthorizing, true)
  const windowLocation = new URL(window.location.href)

  if (windowLocation.searchParams.get('code')) {
    const accessCode = windowLocation.searchParams.get('code')

    const oAuthTokenUrl = process.env.OAUTH_TOKEN_URL
    const clientId = process.env.CLIENT_ID
    const clientSecret = process.env.CLIENT_SECRET
    const redirectUri = process.env.REDIRECT_URI
    const userApiUrl = process.env.USER_API_URL

    const data = new URLSearchParams()

    data.append('client_id', clientId)
    data.append('client_secret', clientSecret)
    data.append('grant_type', 'authorization_code')
    data.append('redirect_uri', redirectUri)
    data.append('scope', 'identify')
    data.append('code', accessCode)

    const tokens = fetchAccessToken(oAuthTokenUrl, data)

    tokens.then(tokens => {
      if (!(tokens.name === 'Error')) {
        dispatch(options.onaccesstoken, tokens.access_token)
        const user = fetchUserData(userApiUrl, tokens)

        user.then(res => {
          if (!(user.name === 'Error')) {
            dispatch(options.onfinish, { auth: true, user: res })
          }
          dispatch(options.onauthorizing, false)
        })
      } else {
        dispatch(options.onauthorizing, false)
      }
    })
  }
}
