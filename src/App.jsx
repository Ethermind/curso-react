import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer>
        <b>AQUI VIENEN LOS ITEMS</b>
      </ItemListContainer>
    </>
  )
}

export default App
