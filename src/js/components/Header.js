import { h } from 'hyperapp'
import Nav from './Nav'

const Header = ({ state }) => (
  <header class="mx-auto flex items-center font-bold">
    <logo class="blob flex items-center justify-center relative w-48 h-48">

      <svg class="absolute" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
        <path id="blob" class="st0" d="M452.2,337.5c-26.6,53.6-70.7,80.4-132.3,80.4s-135.6-26.8-221.9-80.4S7.6,223.4,85.8,156.1s149.1-88.7,212.7-64s111.7,58.3,144.4,101S478.7,283.9,452.2,337.5z" fill="#fab1a0"/>
      </svg>

      <a href="/" class="text-white z-10" id="title">boker</a>
    </logo>

    <Nav state={state} />

    <div class="w-48"></div>
  </header>
)

export default Header
