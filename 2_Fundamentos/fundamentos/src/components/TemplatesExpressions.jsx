// Template expression

const TemplatesExpressions = () => {

    const name = "Tiago"

    const data = {
        age: 31,
        job: "Programador",
    }

  return (
    <div>
        <button>Click Here</button>
        <p>A soma é {2+2}</p>
        <h3>Bem vindo, {name}!</h3>
        <p>
            Sua idade é {data.age} e você é um {data.job}
        </p>
    </div>
  )
}

export default TemplatesExpressions

// Diferentes maneiras de imprimir componentes dentro do JSX