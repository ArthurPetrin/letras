import TextSize from "./componentes/TextSize"
import TextPerson from "./componentes/TextPerson"
import TextColor from "./componentes/TextColor"
import TextBackground from "./componentes/TextBackground"
import Images from "./componentes/Images"

function App() {


  return (
    <>
      <div className="container">
        <h1>Projeto</h1>

        <TextSize/>

        <TextPerson/>

        <TextColor/>

        <TextBackground/>

        <Images/>
        
      </div>
    </>
  )
}

export default App
