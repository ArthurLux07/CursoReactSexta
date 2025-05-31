import { useState } from 'react'
import './App.css'

function App() {

  const [inputMarujo, setInputMarujos] = useState('')
  const [inputEventos, setInputEventos] = useState('')
  const [viagem, setViagem] = useState()

  function verificar(){

    if(inputMarujo>=10 || inputEventos>=1){

      setViagem("Todos abordo marujo!!!")
    }
    else{

      setViagem("Não vai ser dessa vez, prepare-se melhor!!!")
    }
  }

  return (

    <>
      <div className="container">
        <h1>Olá marujo!
          <p>Pronto para mais uma aventura?</p>
        </h1>

        <label>Quantos marujos? </label>
        <input type="text" placeholder='Digite o número' 
        value={inputMarujo}
        onChange={(e) => setInputMarujos(e.target.value)}
        />

        <br />
        <label>Quantos eventos? </label>  
        <input type="text" placeholder='Digite o número' 
        value={inputEventos}
        onChange={(e) => setInputEventos(e.target.value)}
        />

        <br />
        <button onClick={verificar}> Vamos viajar?</button>

        <p>Status: {viagem}</p>
      </div>
    </>
  )
}

export default App
