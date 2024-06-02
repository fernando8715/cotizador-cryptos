import { useEffect } from "react"
import { SearchCriptosForm } from "./components/SearchCriptosForm"
import { useCriptoStore } from "./store"

function App() {

  const fetchCriptos = useCriptoStore((state) => state.fetchCriptos)
  useEffect(() => {
    fetchCriptos();
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="title">Cotizador de <span>Criptomonedas</span></h1>

        <div className="content">
          <SearchCriptosForm />
        </div>
      </div>

    </>
  )
}

export default App
