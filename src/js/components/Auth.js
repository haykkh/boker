import { h } from 'hyperapp'
import { WholeLoadingFish } from './LoadingFish'

const OAUTH_URL = process.env.OAUTH_URL

const AuthButton = () => (
  <section class="flex justify-center items-center">
    <a class="fill-purple p-8 flex justify-center items-center text-white text-xl font-bold m-4 blob-wide" href={OAUTH_URL}>
        Log in with Discord
    </a>
  </section>
)

const Auth = ({ state }) => {
  if (!state.authorized) {
    if (state.authorizing) {
      return WholeLoadingFish()
    }
    return AuthButton()
  }
}

export default Auth
