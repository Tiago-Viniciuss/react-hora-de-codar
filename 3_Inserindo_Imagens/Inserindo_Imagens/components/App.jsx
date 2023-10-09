
import './App.css'

import ConditionalRender from '../../../4_Render_Condicional/condicionais/src/components/ConditionalRender'

import ShowUserName from '../../../4_Render_Condicional/condicionais/src/components/ShowUserName'

import CarDetails from '../../../4_Render_Condicional/condicionais/src/components/CarDetails'


// Renderização de listas com componentes

const cars = [
  {id: 1, brand: "Ferrari", color: "Vermelho", km: 0},
  {id: 2, brand: "Audi", color: "Azul", km: 2530},
  {id: 3, brand: "Bulgati", color: "Preto", km: 9500}
]

// Fragments

import Fragments from '../../../4_Render_Condicional/condicionais/src/components/Fragments'

// Importando CHILDREN

import Container from './Container'

function App() {
  

  return (
      <div className='App'>
        <h1>Renderizando Condicionais</h1>
        
        <ConditionalRender/>

        {/* Importando PROPS */}

        <ShowUserName name="Tiago"/>

        {/* Desestruturando PROPS */}

        <CarDetails brand="BMW" km={999} color="preto"/>

        {/* Reaproveitando PROPS. Usando a mesma PROP em outros componentes com dados diferentes e propriedades iguais*/}

        <CarDetails brand="Volvo" km={5000} color="vermelho"/>

        <CarDetails color="verde" brand="Audi" km={2500} />

        {/*Renderização de listas com componentes */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color}/>
        ))}

        {/* Fragments */}

        <Fragments/>


        {/* Children */}

        <Container>
          <p>Alguma coisa...</p>
        </Container>

      </div>
  )
}

export default App
