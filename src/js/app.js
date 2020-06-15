import { h, app } from 'hyperapp'
import appState from './states/app.state'
import Header from './components/Header'
import Counter from './components/Counter'
import Users from './components/Users'
import Footer from './components/Footer'

const InitApp = (state) => state

const App = () => (state) => (
  <div class="container">
    <Header state={state} />
    {state.currentTab === 'counter' && <Counter state={state} />}
    {state.currentTab === 'http' && <Users state={state} />}

    <Footer />
  </div>
)

app({
  init: InitApp(appState),
  view: <App />,
  node: document.querySelector('#nebula')
})
