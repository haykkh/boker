import { h } from 'hyperapp'
import { WholeLoadingFish } from './LoadingFish'

const Bal = ({ state }) => (
  <section class="flex justify-center items-center" id="topup">
    <content class="text-white container w-168 h-168 flex justify-center items-center flex-col">
      {state.tabs.balances.users.map(user => (
        <p>{user.name}: {user.chip_balance}</p>
      ))}
    </content>
  </section>
)

const Balances = ({ state }) => {
  if (state.gettingDb) {
    return WholeLoadingFish()
  } else if (state.haveDb) {
    return (<Bal state={state} />)
  }
}

export default Balances
