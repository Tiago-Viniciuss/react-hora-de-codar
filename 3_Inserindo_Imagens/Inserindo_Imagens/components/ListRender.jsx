import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Matheus", "Tiago", "Jorge"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 31},
        {id: 2, name: "Tiago", age: 27},
        {id: 3, name: "Jorge", age: 38},
    ]);

  return (
    <div>

        {/* 4 - Render sem key */}
        <ul>
            {list.map((item)=> (
                <li>{item}</li>
            ))

            }  
        </ul>

        {/* 5 - Render com key */}

        <ul>
            {
                users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>

    </div>
  )
}

export default ListRender

// É obrigatório o uso da chave única para cada item da lista