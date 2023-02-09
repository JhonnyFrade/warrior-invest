import { useApi } from '../hooks/useApi'
import '../styles/StockCard.css'



export const StockCard = () => {

    const  info = useApi()

  console.log(info.data)
    return (
        <div className="card">
          
          {Object.values(info).map(() => {
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


{/*



*/}