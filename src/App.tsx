 import { Header } from './components/Header'
import { StockCard } from './components/StockCard'
 import './styles/main.css'


export function App() {
  return (
    <div className='App'>
      
      <Header />

        <div className='content'>
          <StockCard />
        </div>

    </div>
  )
}