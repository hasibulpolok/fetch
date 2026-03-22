import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Users from './components/Users'

function App() {
const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
 



  return (
    <>
    <Suspense fallback={<h2>Loading...</h2>}>  
      <Users fetchUser={fetchUser} />
    </Suspense>
     
    </>
  )
}

export default App
