import { h } from 'hyperapp'

const TopUp = ({ state }) => (
  <section class="flex justify-center items-center" id="topup">
    <content class="container fill-purple w-168 h-168 flex justify-center items-center flex-col">
      <h1 class="text-white text-xl font-bold"> hello {state.user.username}#{state.user.discriminator} (loser)</h1>
      <p>{state.user.id}</p>
      <img class="rounded-full" src={`https://cdn.discordapp.com/avatars/${state.user.id}/${state.user.avatar}.jpg`}></img>
    </content>
  </section>
)
export default TopUp
