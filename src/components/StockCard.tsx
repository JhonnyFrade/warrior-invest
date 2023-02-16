import { useApi } from '../hooks/useApi'
import '../styles/StockCard.css'



export const StockCard = (props) => {

    const  info = useApi()

  console.log(info.data?.results)
    return (
        <div className="card">
            {Object.values(info).map((repo, i) => {
                          return (
                              <>
                              <div className="img"><img src={repo?.results[props.idx].logourl} alt="" /></div>
                               <div className="main-content" key={props}>
                                  <h2>{repo?.results[props.idx].shortName}</h2>
                                  <h3>{repo?.results[props.idx].symbol}</h3>
                                  <p>A partir de R$ <span>{repo?.results[props.idx].regularMarketPrice}</span> </p>
                               </div>
                              <div className="percent"><p>{repo?.results[props.idx].regularMarketChangePercent}</p></div>
                              </>
                          )
                      })}
        </div>
    )
}


{/*



*/}