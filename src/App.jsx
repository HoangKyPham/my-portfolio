import { useState } from 'react'
import LeftMenu from './components/LeftMenu'
import MainMenu from './components/MainMenu'
import RightMenu from './components/RightMenu'
import './scss/main.scss'

function App() {
  return (
    <>
      <LeftMenu />
      <MainMenu />
      <RightMenu />
    </>
  )
}

export default App
