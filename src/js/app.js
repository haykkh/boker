import { h, app } from 'hyperapp'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'text-spinners'
import init from './init'
import Header from './components/Header'
import Auth from './components/Auth'
import TopUp from './components/TopUp'
import Users from './components/Users'
import Footer from './components/Footer'

const App = () => (state) => (
  <div class="container flex justify-between flex-col min-h-screen">
    <Header state={state} />

    {!state.authorized
      ? <Auth state={state}/>
      : state.currentTab === 'topup'
        ? <TopUp state={state}/>
        : state.currentTab === 'balances'
          ? <Users state={state} />
          : null}

    <Footer />
  </div>
)

app({
  init: init,
  view: <App />,
  node: document.querySelector('#nebula')
})
