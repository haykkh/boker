import { h } from 'hyperapp'
import { SelectTab } from '../actions/app.actions'

const Nav = ({ state }) => {
  const { currentTab } = state

  const tabs = Object.keys(state.tabs)

  return tabs ? (
    <nav class="px-3">
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-purple border-purple hover:text-pink hover:border-pink"></button>
      </div>
      <ul class="flex -mx-3">
        {tabs.map(tab => (
          <li class="w-1/3 px-3 font-bold text-purple hover:text-pink">
            <button class={state.currentTab === tab ? 'font-bold underline' : 'font-bold'} onclick={() => SelectTab(state, tab)}>{state.tabs[tab].label}</button>
          </li>
        ))}
      </ul>
    </nav>
  ) : null
}

export default Nav
