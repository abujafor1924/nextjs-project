import React from 'react'
import Topbar from './Topbar'
import Middlebar from './Middlebar'
import Bottombar from './Bottombar'

export default function Navbar() {
  return (
    <header className="flex flex-col">
      <Topbar />
      <Middlebar />
      {/* <Bottombar /> */}
    </header>
  )
}
