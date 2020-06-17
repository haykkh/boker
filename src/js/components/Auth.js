import { h } from 'hyperapp'

const OAUTH_URL = process.env.OAUTH_URL

const AuthButton = () => (
  <section class="flex justify-center items-center" id="auth">
    <a class="container fill-purple w-64 h-32 flex justify-center items-center text-white text-xl font-bold m-4" href={OAUTH_URL}>
        Log in with Discord
    </a>
  </section>
)

const Auth = ({ state }) => {
  if (!state.authorized) {
    return AuthButton()
  }
}

export default Auth
