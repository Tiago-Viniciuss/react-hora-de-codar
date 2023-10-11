import './App.css'

// 2 - CSS de componente
import MyComponents from './components/MyComponents'

function App() {

  // 4 - CSS inline dinamico
  const n = 15

  // 5 - Classes dinamicas
  const redTitle = true
  return (
      <div className='App'>
        {/* 1 - CSS Global */}
        <h1>CSS no React</h1>
        {/* 2 - CSS de componente */}
        <MyComponents/>
        <p>Pegou estilo do CSS</p>
        {/* 3 - CSS inline */}
        <p style={{color:"blue", borderBottom:"2px solid black", padding: "15px"}}>Contém estilo inline, sobrescrevendo o Global ou do componente</p>
        {/* 4 - CSS inline Dinamico */}
        <h2 style={n > 10 ? {color:"purple"} : {color: "magenta"}}>CSS Dinamico</h2>
        <h2 style={n > 20 ? {color:"purple"} : {color: "magenta"}}>CSS Dinamico</h2>
        {/* 5 - CSS classes dinamicas */}
        <h2 className={redTitle ? "red-title" : "title"}>Este título terá uma classe</h2>

      </div>
  )
}

export default App
