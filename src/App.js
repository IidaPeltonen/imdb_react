import './App.css'
import { useState } from 'react'
import axios from 'axios';

const URL = 'http://localhost/imdb/'

function App() {
  const [leffat, setLeffat] = useState([]);
  const [lyhyet, setLyhyet] = useState([]);
  const [isLoaded, setIsLoaded] = useState(null)
  const [isLoaded1, setIsLoaded1] = useState(null)

  function etsi(e) {
    e.preventDefault();
    setIsLoaded(false)
    axios
      .get(URL)
      .then(response => {
        setLeffat(response.data)
        setIsLoaded(true)
      })
      .catch(error => {
        alert(error)
      })
  }

  function etsiLyhyet(e) {
    e.preventDefault();
    setIsLoaded1(false)
    axios
      .get(URL + 'haku.php')
      .then(response => {
        setLyhyet(response.data)
        setIsLoaded1(true)
      })
      .catch(error => {
        alert(error)
      })
  }


  return (
    <div className='container-fluid'>
      <h1 id="center">Kaikki mitä olet halunnut IMDB:ltä!</h1>
      <div className="row">
        <div className="col-6">
          <br />
          <button onClick={etsi} >Paina tästä löytääksesi parhaat Bean-julkaisut!</button>
          <br />
          <ol>
            {isLoaded === false ? (
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              (leffat?.map(leffa => (
                <li key={leffa.title_id}>
                  <b><p>{leffa.primary_title}</p></b>
                  <p>Vuosi: {leffa.start_year}</p>
                  <p>Arvosana: {leffa.average_rating}</p>
                </li>
              )))
            )}
          </ol>
        </div>
        <div className="col-6">
          <br />
          <button onClick={etsiLyhyet} >Paina tästä löytääksesi lyhyitä action-leffoja suomenkielisillä julkaisunimillä!</button>
          <br />
          <ol>
            {isLoaded1 === false ? (
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              (lyhyet?.map(lyhyt => (
                <li key={lyhyt.title_id}>
                  <b><p>{lyhyt.primary_title}</p></b>
                  <p>Vuosi: {lyhyt.start_year}</p>
                  <p>Pituus: {lyhyt.runtime_minutes}</p>
                </li>
              )))
            )}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
