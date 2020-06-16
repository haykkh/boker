import { h } from 'hyperapp'

const TopUp = ({ state }) => (
  <section class="flex justify-center items-center" id="topup">
    <content class="container fill-purple w-168 h-168 flex justify-center items-center">
      <h1 class="text-white text-xl font-bold"> hello {state.user.username} (loser)</h1>
    </content>
  </section>
)
export default TopUp
