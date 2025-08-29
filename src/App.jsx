import { useEffect, useState } from 'react'

function App() {

  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())
      .then((post) => {
        setPosts(post)
      })
      .catch(() => console.error("La peticion fallo"))
  }, [])

  if (!posts) {
    return <h1>...cargando</h1>
  } else {
    return (
      <>
        <h1>Lista de cripto monedas</h1>
        <ul>
          <>
            {posts.map(post => (
              <li>Nombre: {post.title}</li>
            ))}
          </>
        </ul>
      </>
    )
  }


}

export default App
