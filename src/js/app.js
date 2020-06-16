import { h, app } from 'hyperapp'
import appState from './states/app.state'
import Header from './components/Header'
import Auth from './components/Auth'
import TopUp from './components/TopUp'
import Users from './components/Users'
import Footer from './components/Footer'

const InitApp = (state) => state

const App = () => (state) => (
  <div class="container flex justify-between flex-col min-h-screen">
    <Header state={state} />

    {!state.authorized
      ? <Auth />
      : state.currentTab === 'topup'
        ? <TopUp />
        : state.currentTab === 'balances'
          ? <Users state={state} />
          : null}

    <Footer />
  </div>
)

app({
  init: InitApp(appState),
  view: <App />,
  node: document.querySelector('#nebula')
})
