import { h } from 'hyperapp'
import { SetAuth } from '../actions/auth.actions'

const Auth = () => (
  <section class="flex justify-center items-center" id="auth">
    <button class="container fill-purple w-64 h-32 flex justify-center items-center text-white text-xl font-bold m-4" onclick={SetAuth}>
        Log in with Discord
    </button>
  </section>
)

export default Auth
