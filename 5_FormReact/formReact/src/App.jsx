import './App.css'
import MyForm from './components/MyForm'
import { useState } from 'react'

function App() {
 

  return (
    <>
      <div className="App">
        <h1>Form em React</h1>
      </div>
      <MyForm userName="Tiago Vinícius" userEmail="tiagovinicius@tiago.com"/>
    </>
  )
}

export default App
