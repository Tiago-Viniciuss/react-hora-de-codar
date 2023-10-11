import { useState } from "react"
import "./MyForm.css"

const MyForm = ({userName, userEmail}) => {

  // 3 - Gerenciamento de dados
  const [name, setName] = useState(userName)
  const [email, setEmail] = useState(userEmail)
  const [bio, setBio] = useState("")
  const [role, setRole] = useState("")

  const handleName = (e) => {
    setName(e.target.value)
  }

  // 5 - Envio de form 

  const handleSubmit = (e) => {
    e.preventDefault()
  
  
  
  console.log(name, email, bio, role)

   // validação
  // envio

  // 7 - Limpar o form

  setName("")
  setEmail("")
  setBio("")
  setRole("")
  
  }

  console.log(name, email, bio, role)

  return (
    <div>
      {/* 1 - Criação de formulário */}
      {/* 5 - Envio de formulário */}
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" placeholder="Digite seu nome" onChange={handleName}
            // 6 - Controlled input
            value={name || ""}
            />
        </div>
        {/* 2 - Form com input dentro de label */}
        <label>
            <span>E-mail:</span>
            {/* 4 - Simplificando manipulação */}
            <input type="email" name="email" id="email" placeholder="Digite o seu e-mail:" onChange={(e) => setEmail(e.target.value)}
            // 6 - Controlled input
            value={email || ""}
            />
          </label>  
            {/* 8 - Textarea*/}
            <label>
              <span>Bio:</span>
              <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - Select */}
            <label>
              <span>Função no sistema</span>
              <select name="role" onChange={(e) => setRole(e.target.value)}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
            </label>
        <input type="submit" value="Enviar" />
    </form>




    </div>
  )
}

export default MyForm