import './App.css'
import {useState, useEffect} from 'react'
import {PokemonList} from './components/PokemonList'
import {Button} from './components/Button'

// Implementar TryCatch
// Aplicar Bootstrap a este proyecto
// Una tabla desde bootstrap y un NavBar
// Crear un tercer boton que te lleve a la primera pagina

//BONUS
// Como obtener una imagen y renderizarla en mi listado
// o en una tabla


function App() {
  
  const [pokemones, setPokemones]= useState([])
  const [actual, setActual]= useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
  const [anterior, setAnterior]= useState(null)
  const [siguiente, setSiguiente]= useState(null)

  // Use effect realizara la funcion callback por defecto al
  // cargar la pagina
  useEffect(()=>{
    // defino la funcion callback como async
    async function obtenerPokemones(){
      // espero por la respuesta de la peticion a la API
      const response = await fetch (actual);
      // espero por la traduccion del archivo Json a un objeto
      // utilizable por JavaScript
      const data = await response.json()
      // Obtengo de ese objeto results que segun la API
      // es donde esta el vector de pokemones
      const results= await data.results
      // Seteo ese resultado al estado pokemones
      setPokemones(results)
      // Aprovecho para capturar sugerido para anterior
      setAnterior(data.previous)
      // y tambien el sugerido para siguiente
      setSiguiente(data.next)
    }
    // llamo a la funcion que acabo de crear
    obtenerPokemones()
    // defino cual es el elemento en este caso el estado
    // que si cambia TODA esta logica se vuelve a ejecutar
  },[actual])
  return (
    <div className="App">
      

      <PokemonList pokemones={pokemones}/>

      <Button 
        onClick={()=>anterior!== null && setActual(anterior)} 
        mostrar={'Anterior'} 
        comprobacion={anterior} />

      <Button
        onClick={()=>siguiente!== null && setActual(siguiente)} 
        mostrar={'Siguiente'} 
        comprobacion={siguiente}/>
      {/* <button onClick={()=> anterior !== null && setActual(anterior)}  disabled={anterior===null}>Anterior</button>
      <button onClick={()=> siguiente !== null && setActual(siguiente)}>Siguiente</button> */}
    </div>
    
  )
}

export default App
