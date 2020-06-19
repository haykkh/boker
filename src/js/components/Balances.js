import { h } from 'hyperapp'
import { WholeLoadingFish } from './LoadingFish'

const round = num => Number(Math.round(parseFloat(num + 'e' + 2)) + 'e-' + 2).toFixed(2)

const Title = ({ text }) => (
  <th class="px-3 sm:px-6 py-3 text-xs leading-4 text-left">
    {text}
  </th>
)

const UserCol = ({ text, align }) => (
  <td class={`px-3 sm:px-6 py-4 whitespace-no-wrap text-sm leading-5 ${align}`}>{text}</td>
)

const UserRow = ({ userData }) => (
  <tr>
    <UserCol text={userData.name} />
    <UserCol text={userData.chip_balance} />
    <UserCol align="text-right" text={'€' + round(Math.abs(userData.total_transactions))} />
    <UserCol align="text-right" text={userData.total_balance < 0
      ? '-€' + round(Math.abs(userData.total_balance))
      : '€' + round(userData.total_balance) } />

  </tr>
)

const BalTable = ({ state }) => (
  <div class="flex text-white justify-center">
    <div class="overflow-x-auto blob-tall w-auto p-12 sm:p-24 flex justify-center">
      <div class="overflow-scroll">
        <table>
          <thead>
            <tr>
              <Title text="name" />
              <Title text="chips" />
              <Title text="top ups" />
              <Title text="balance" />
            </tr>
          </thead>
          <tbody>
            {state.tabs.balances.users.map(user => (
              <UserRow userData={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

const Balances = ({ state }) => {
  if (state.gettingDb) {
    return WholeLoadingFish()
  } else if (state.haveDb) {
    return (<BalTable state={state} />)
  }
}

export default Balances
