 import { Header } from './components/Header'
import { StockCard } from './components/StockCard'
 import './styles/main.css'


export function App() {
  return (
    <div className='App'>
      
      <Header />

        <div className='content'>
          <StockCard idx={0}/>
          <StockCard idx={1}/>
          <StockCard idx={2}/>
          <StockCard idx={3}/>
          <StockCard idx={4}/>
          <StockCard idx={5}/>
          <StockCard idx={6}/>
          <StockCard idx={7}/>
          <StockCard idx={8}/>
          <StockCard idx={9}/>
          <StockCard idx={10}/>
          <StockCard idx={11}/>
          <StockCard idx={12}/>
          <StockCard idx={13}/>
          <StockCard idx={14}/>
          <StockCard idx={15}/>
          <StockCard idx={16}/>
          <StockCard idx={17}/>
          <StockCard idx={18}/>
          <StockCard idx={19}/>
        </div>

    </div>
  )
}