import { h } from 'hyperapp'
import { SelectTab } from '../actions/app.actions'

const Nav = ({ state }) => {
  const { currentTab } = state

  const tabs = Object.keys(state.tabs)

  return tabs ? (
    <nav class="px-3">
      <ul class="flex -mx-3 flex-col sm:flex-row h-32 sm:h-auto justify-around">
        {tabs.map(tab => (
          <li class="flex-1w-1/3 px-3 font-bold text-purple hover:text-pink">
            <button class={state.currentTab === tab ? 'font-bold underline' : 'font-bold'} onclick={() => SelectTab(state, tab)}>{state.tabs[tab].label}</button>
          </li>
        ))}
      </ul>
    </nav>
  ) : null
}

export default Nav
