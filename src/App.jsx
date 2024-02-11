import './assets/css/App.css'
import './assets/css/Globals.css'
import Home from './components/Home'
import About from './components/About'
import Portifolio from './components/Portifolio'

function App() {
  return (
    <div className='app'>
      <main>
        <Home></Home>
        <About></About>
        <Portifolio></Portifolio>
      </main>
    </div>
  )
}

export default App
