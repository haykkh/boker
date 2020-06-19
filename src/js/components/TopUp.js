import { h } from 'hyperapp'
import { SendTopUp, SetTopUp } from '../actions/topup.actions'

const TopUpForm = ({ state }) => (
  <div class="mt-12 w-40 flex">
    <span class="rounded rounded-r-none w-1/6 p-2 bg-white text-purple inline-block">€</span>
    <input class="form-input w-5/12 p-2 text-purple" value={state.tabs.topup.amount} oninput={SetTopUp} />
    <button class="bg-pink rounded rounded-l-none p-2 w-5/12 text-white" type="button" onclick={SendTopUp} >Top up</button>
  </div>
)

const TopUp = ({ state }) => (
  <section class="flex justify-center items-center" id="topup">
    <content class="container fill-purple max-w-168 max-h-full flex justify-center items-center flex-col bg-100%-100% py-32 px-16 sm:p-48">
      <img class="rounded-full" src={`https://cdn.discordapp.com/avatars/${state.user.id}/${state.user.avatar}.jpg`}></img>
      <h1 class="text-white sm:text-xl font-bold">{state.user.username}</h1>
      <TopUpForm state={state}/>
    </content>
  </section>
)
export default TopUp
