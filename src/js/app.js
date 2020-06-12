import { h, app } from 'hyperapp'
import appState from './states/app.state'
import Header from './components/Header'
import Counter from './components/Counter'
import Users from './components/Users'

const InitApp = (state) => state

const App = () => (state) => (
  <div class="container py-8">
    <Header state={state} />
    {state.currentTab === 'counter' && <Counter state={state} />}
    {state.currentTab === 'http' && <Users state={state} />}
  </div>
)

app({
  init: InitApp(appState),
  view: <App />,
  node: document.querySelector('#nebula')
})
