import React from 'react'

const Events = () => {

    const handleClick = () => {
        alert("Executou")
    }

    // Função de renderização

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderiznado outra coisa...</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={handleClick}>Clique Aqui</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events