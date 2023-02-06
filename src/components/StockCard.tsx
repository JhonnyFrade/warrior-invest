import { useApi } from '../hooks/useApi'
import '../styles/StockCard.css'

type Stock = {
    results: [{
        symbol: string
    }]
}

export function StockCard() {

    const { data: dataStocks } = useApi<Stock[]>('https://brapi.dev/api/quote/BBAS3%2CITUB4%2CITSA4%2CBBSE3%2CPETR4%2CVALE3%2CSUZB3%2CVIVT3%2CTAEE4%2CCPLE3%2CSAPR4%2CSBSP3%2CWEGE3%2CGOAU4%2CGGBR4%2CKLBN11%2CFLRY3%2COIBR3%2CMGLU3%2CVIVA3?range=1d&interval=1d&fundamental=true')

  console.log(dataStocks)



    return (
        <div className="card">
            {dataStocks?.map(repo => {
                return (
                    <>
                     <div className="main-content" key={repo.results[0].symbol}>
                        <h2>Nome</h2>
                        <h3>{repo.results[0].symbol}</h3>
                        <p>A partir de R$ <span></span> </p>
                     </div>
                    <div className="percent"><p>1%</p></div>
                    </>
                )
            })}
        </div>
    )
}