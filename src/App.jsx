import "./App.css"

function App() {

  return (
    <>
    <head>
      {/* Titolo dell'applicazione */}
      <title> MeowFocus </title>
    </head>

    <div>
      <img src="logo.png" className='logo' alt="Gatto" />
    </div>

    <div className='NomeProgetto'>
      <h1>MeowFocus</h1>
    </div>
    
    <div className="button-wrapper">
      <div className='button-container'>
        <button type='button' >Accedi</button>
        <button type='button'>Registrati</button>
      </div>
    </div>



    <div class="SessioneAttiva-wrapper">
      <div className="SessioneAttiva"> Sessioni Attive </div>
      <ul>
        <li>Sessione 1</li>
        <li>Sessione 2</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>

        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>
        <li>Sessione 3</li>

      </ul>
    </div>

    <div className='MicioBellino'>

    </div>
    </>
  )
}

export default App