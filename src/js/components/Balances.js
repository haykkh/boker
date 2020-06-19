import { h } from 'hyperapp'
import { WholeLoadingFish } from './LoadingFish'

const Bal = ({ state }) => (
  <section class="flex justify-center items-center mb-8">
    <content class="text-white flex justify-center items-center flex-col p-16 sm:p-32 blob-tall">
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
