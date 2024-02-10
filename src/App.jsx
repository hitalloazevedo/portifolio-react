import './assets/css/App.css'
import './assets/css/Globals.css'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className='app'>
      <main>
        <Home></Home>
        <About></About>
      </main>
    </div>
  )
}

export default App
