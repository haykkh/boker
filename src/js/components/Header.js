import { h } from 'hyperapp'
import Nav from './Nav'

const Header = ({ state }) => (
  <header>
    <logo class="blob">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
        <path id="blob" d="M411.5,329.5Q342,409,241.5,424Q141,439,91.5,344.5Q42,250,89,151.5Q136,53,233,82Q330,111,405.5,180.5Q481,250,411.5,329.5Z" fill="#fab1a0"></path>
      </svg>
      <a href="/" id="title">boker</a>
    </logo>

    <Nav state={state} />
  </header>
)

export default Header
