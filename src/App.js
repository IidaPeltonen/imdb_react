import './App.css'
import { useState} from 'react'
import axios from 'axios';

const URL = 'http://localhost/imdb/'

function App () {
  const [leffat, setLeffat] = useState([]);

  function etsi(e) {
    e.preventDefault();
    axios
      .get(URL)
      .then(response => {
        setLeffat(response.data)
        console.log(response.data)
      })
      .catch(error => {
        alert(error)
      })
  }


  return (
    <div className='container-fluid'>
      <button onClick={etsi} >PAINA TÄSTÄ</button>
      <ol>
         {leffat?.map(leffa => (
          <li key={leffa.title_id}>
            <p>{leffa.primary_title}</p>
            <p>{leffa.start_year}</p>
            <p>{leffa.average_rating}</p>
            
          </li>
        ))}  

        </ol>
    </div>
  )
}

export default App
