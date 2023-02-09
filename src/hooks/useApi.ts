import axios from "axios";
import { useEffect, useState } from "react";

type Stock = {
    results: [{
        symbol: string
    }]
}

export function useApi<T = unknown>() {

    const [data, setData] = useState<T | null> (null)

    useEffect(() => {
        axios.get('https://brapi.dev/api/quote/BBAS3%2CITUB4%2CITSA4%2CBBSE3%2CPETR4%2CVALE3%2CSUZB3%2CVIVT3%2CTAEE4%2CCPLE3%2CSAPR4%2CSBSP3%2CWEGE3%2CGOAU4%2CGGBR4%2CKLBN11%2CFLRY3%2COIBR3%2CMGLU3%2CVIVA3?range=1d&interval=1d&fundamental=true')
            .then(response => {
                setData(response.data.results.symbol)
            })
    }, [])
    return { data } 
}