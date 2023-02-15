import { useApi } from '../hooks/useApi'
import '../styles/StockCard.css'



export const StockCard = () => {

    const  info = useApi()

  console.log(info.data?.results)
    return (
        <div className="card">
            {Object.values(info).map((repo, i) => {
                          return (
                              <>
                              <div className="img"><img src={repo?.results[i].logourl} alt="" /></div>
                               <div className="main-content" key={i}>
                                  <h2>{repo?.results[i].shortName}</h2>
                                  <h3>{repo?.results[i].symbol}</h3>
                                  <p>A partir de R$ <span>{repo?.results[i].regularMarketPrice}</span> </p>
                               </div>
                              <div className="percent"><p>{repo?.results[i].regularMarketChangePercent}</p></div>
                              </>
                          )
                      })}
        </div>
    )
}


{/*



*/}