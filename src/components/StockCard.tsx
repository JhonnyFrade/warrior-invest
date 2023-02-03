import { useEffect, useState } from 'react'
import '../styles/StockCard.css'

type stock = {
    results: {
        symbol: string
        regularMarketPrice: number
    }
}

export function StockCard() {

    const [stocks, setStocks] = useState<stock[]>([])
    
    useEffect(() => {
        fetch('https://brapi.dev/api/quote/BBAS3%2CITUB4%2CITSA4%2CBBSE3%2CPETR4%2CVALE3%2CSUZB3%2CVIVT3%2CTAEE4%2CCPLE3%2CSAPR4%2CSBSP3%2CWEGE3%2CGOAU4%2CGGBR4%2CKLBN11%2CFLRY3%2COIBR3%2CMGLU3%2CVIVA3?range=1d&interval=1d&fundamental=false')
        .then(response => response.json())
        .then(data => {
            setStocks(data)
        })
    }, [])

    

    return (
        <div className="card">
            {stocks.map(repo => {
                return (
                     <div className="main-content" key={repo.results.symbol}>
                        <h2>Nome</h2>
                        <h3>{repo.results.symbol}</h3>
                        <p>A partir de R$ <span></span> </p>
                     </div>
                )
            })}

           {
               /*            
            <div className="img"></div>
           <div className="main-content">
                <h2>Nome da ação</h2>
                <h3>codigo da ação</h3>
                <p>A partir de R$ <span>30,00</span> </p>
            </div>
            */
           } 

            <div className="percent"><p>1%</p></div>
        </div>
    )
}