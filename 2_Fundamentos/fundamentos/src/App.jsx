
// Importando componente

import './App.css'
import Events from './components/Events'

import FirstComponent from './components/FirstComponent'
import MyComponet from './components/MyComponet'

// Importando TEMPLATE EXPRESSION 

import TemplatesExpressions from './components/TemplatesExpressions'

function App() {
  

  return ( 
      <div className='App'>

        {/*Comentários dentro de JSX, devem ter essa estutura*/}

        <h1>Fundamentos do React</h1>
        <FirstComponent/>
        <TemplatesExpressions/>
        <MyComponet/>
        <Events/>
      </div>
  )
}

export default App