import React from 'react'


import Navbar from './Components/Navbar'
import BalanceSection from './BalanceSection'
import ExpenceSection from './ExpenceSection'
import ListGroup from './ListGroup'
import { ExpenceProvider } from './Context/ExpenceContext'


const App = () => {




  return (
    <ExpenceProvider>
      <div style={{ minHeight: "100vh" }}
        className='bg-dark'>
        <Navbar />
        <div className="container p-3">
          <BalanceSection />
          <ExpenceSection />
          <ListGroup />
        </div>

      </div>
    </ExpenceProvider>
  )
}

export default App