import { Header } from './components/Header'
import { Home } from './pages/Home'
import { globalStyles } from './style'

function App() {
  globalStyles();
  return (
    <div>
    <Header />
    <Home />
    </div>
  )
}

export default App
