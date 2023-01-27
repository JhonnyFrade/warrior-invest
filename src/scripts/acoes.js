fetch(`https://brapi.dev/api/quote/BBAS3%2CPETR4%2CTAEE11%2CCPLE3%2CVALE3%2CSAPR3%2CVIVT3%2CGGBR3%2CUNIP3%2CWEGE3%2CVIVA3%2CITSA3?fundamental=false`).then(response => {
    return response.json()
}).then( data => {

    //banco do brasil
    let BBName = document.getElementById('BBName')
    let BBSymbol = document.getElementById('BBSymbol')
    let BBPrice = document.getElementById('BBPrice')
  //  let BBMax = document.getElementById('BBMax')
  //  let BBMin = document.getElementById('BBMin')
  // let BBOpen = document.getElementById('BBOpen')
    let BBImg = document.getElementById('BBImg')
    let BBPercent = document.getElementById('BBPercent')

    //petrobras
    let PTRName = document.getElementById('PTRName')
    let PTRSymbol = document.getElementById('PTRSymbol')
    let PTRPrice = document.getElementById('PTRPrice')
    let PTRMax = document.getElementById('PTRMax')
    let PTRMin = document.getElementById('PTRMin')
    let PTROpen = document.getElementById('PTROpen')
    let PTRImg = document.getElementById('PTRImg')
    let PTRPercent = document.getElementById('PTRPercent')

    //taesa
    let TAEName = document.getElementById('TAEName')
    let TAESymbol = document.getElementById('TAESymbol')
    let TAEPrice = document.getElementById('TAEPrice')
   // let TAEMax = document.getElementById('TAEMax')
   // let TAEMin = document.getElementById('TAEMin')
   // let TAEOpen = document.getElementById('TAEOpen')
    let TAEImg = document.getElementById('TAEImg')
    let TAEPercent = document.getElementById('TAEPercent')

    //copel
    let COPName = document.getElementById('COPName')
    let COPSymbol = document.getElementById('COPSymbol')
    let COPPrice = document.getElementById('COPPrice')
    let COPMax = document.getElementById('COPMax')
    let COPMin = document.getElementById('COPMin')
    let COPOpen = document.getElementById('COPOpen')
    let COPImg = document.getElementById('COPImg')
    let COPPercent = document.getElementById('COPPercent')

    //vale
    let VALName = document.getElementById('VALName')
    let VALSymbol = document.getElementById('VALSymbol')
    let VALPrice = document.getElementById('VALPrice')
   // let VALMax = document.getElementById('VALMax')
  //  let VALMin = document.getElementById('VALMin')
   // let VALOpen = document.getElementById('VALOpen')
    let VALImg = document.getElementById('VALImg')
    let VALPercent = document.getElementById('VALPercent')

    //sanepar
    let SAPName = document.getElementById('SAPName')
    let SAPSymbol = document.getElementById('SAPSymbol')
    let SAPPrice = document.getElementById('SAPPrice')
    let SAPMax = document.getElementById('SAPMax')
    let SAPMin = document.getElementById('SAPMin')
    let SAPOpen = document.getElementById('SAPOpen')
    let SAPImg = document.getElementById('SAPImg')
    let SAPPercent = document.getElementById('SAPPercent')

    //vivo
    let VIVName = document.getElementById('VIVName')
    let VIVSymbol = document.getElementById('VIVSymbol')
    let VIVPrice = document.getElementById('VIVPrice')
    //let VIVMax = document.getElementById('VIVMax')
   // let VIVMin = document.getElementById('VIVMin')
    //let VIVOpen = document.getElementById('VIVOpen')
    let VIVImg = document.getElementById('VIVImg')
    let VIVPercent = document.getElementById('VIVPercent')

    //gerdau
    let GERName = document.getElementById('GERName')
    let GERSymbol = document.getElementById('GERSymbol')
   // let GeRPrice = document.getElementById('GERPrice')
  //  let GERMax = document.getElementById('GERMax')
   // let GERMin = document.getElementById('GERMin')
    let GEROpen = document.getElementById('GEROpen')
    let GERImg = document.getElementById('GERImg')
    let GERPercent = document.getElementById('GERPercent')

    //unipar
    let UNIName = document.getElementById('UNIName')
    let UNISymbol = document.getElementById('UNISymbol')
    let UNIPrice = document.getElementById('UNIPrice')
   // let UNIMax = document.getElementById('UNIMax')
   // let UNIMin = document.getElementById('UNIMin')
   // let UNIOpen = document.getElementById('UNIOpen')
    let UNIImg = document.getElementById('UNIImg')
    let UNIPercent = document.getElementById('UNIPercent')

    //weg
    let WEGName = document.getElementById('WEGName')
    let WEGSymbol = document.getElementById('WEGSymbol')
    let WEGPrice = document.getElementById('WEGPrice')
    //let WEGMax = document.getElementById('WEGMax')
   // let WEGMin = document.getElementById('WEGMin')
   // let WEGOpen = document.getElementById('WEGOpen')
    let WEGImg = document.getElementById('WEGImg')
    let WEGPercent = document.getElementById('WEGPercent')

    //vivara
    let VARName = document.getElementById('VARName')
    let VARSymbol = document.getElementById('VARSymbol')
    let VARPrice = document.getElementById('VARPrice')
   // let VARMax = document.getElementById('VARMax')
   // let VARMin = document.getElementById('VARMin')
   // let VAROpen = document.getElementById('VAROpen')
    let VARImg = document.getElementById('VARImg')
    let VARPercent = document.getElementById('VARPercent')

    //itausa
    let ITAName = document.getElementById('ITAName')
    let ITASymbol = document.getElementById('ITASymbol')
    let ITAPrice = document.getElementById('ITAPrice')
   // let ITAMax = document.getElementById('ITAMax')
    //let ITAMin = document.getElementById('ITAMin')
    //let ITAOpen = document.getElementById('ITAOpen')
    let ITAImg = document.getElementById('ITAImg')
    let ITAPercent = document.getElementById('ITAPercent')

    //-----------------------------------------------------------

    //banco do brasil
    BBName.innerHTML = data.results[0].longName     
    BBSymbol.innerHTML = data.results[0].symbol
    BBPrice.innerHTML += data.results[0].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
    //BBMax.innerHTML += data.results[0].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // BBMin.innerHTML += data.results[0].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
    //BBOpen.innerHTML += data.results[0].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    BBPercent.innerHTML = data.results[0].regularMarketChangePercent.toFixed(2) + `%`
    BBImg.src = data.results[0].logourl

    // petrobras
    PTRName.innerHTML = data.results[1].longName     
    PTRSymbol.innerHTML = data.results[1].symbol
    PTRPrice.innerHTML += data.results[1].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
   // PTRMax.innerHTML += data.results[1].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // PTRMin.innerHTML += data.results[1].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // PTROpen.innerHTML += data.results[1].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    PTRPercent.innerHTML = data.results[1].regularMarketChangePercent.toFixed(2) + `%`
    PTRImg.src = data.results[1].logourl

    //taesa
    TAEName.innerHTML = data.results[2].longName     
    TAESymbol.innerHTML = data.results[2].symbol
    TAEPrice.innerHTML += data.results[2].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
    //TAEMax.innerHTML += data.results[2].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
    //TAEMin.innerHTML += data.results[2].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
    //TAEOpen.innerHTML += data.results[2].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    TAEPercent.innerHTML = data.results[2].regularMarketChangePercent.toFixed(2) + `%`
    TAEImg.src = data.results[2].logourl

    //copel
    COPName.innerHTML = data.results[3].longName     
    COPSymbol.innerHTML = data.results[3].symbol
    COPPrice.innerHTML += data.results[3].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
    //COPMax.innerHTML += data.results[3].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
    //COPMin.innerHTML += data.results[3].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
    //COPOpen.innerHTML += data.results[3].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    COPPercent.innerHTML = data.results[3].regularMarketChangePercent.toFixed(2) + `%`
    COPImg.src = data.results[3].logourl

    //vale
    VALName.innerHTML = data.results[4].longName     
    VALSymbol.innerHTML = data.results[4].symbol
    VALPrice.innerHTML += data.results[4].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
    //VALMax.innerHTML += data.results[4].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
    //VALMin.innerHTML += data.results[4].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
    //VALOpen.innerHTML += data.results[4].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    VALPercent.innerHTML = data.results[4].regularMarketChangePercent.toFixed(2) + `%`
    VALImg.src = data.results[4].logourl

    //sanepar
    SAPName.innerHTML = data.results[5].longName     
    SAPSymbol.innerHTML = data.results[5].symbol
    SAPPrice.innerHTML += data.results[5].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
    //SAPMax.innerHTML += data.results[5].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
    //SAPMin.innerHTML += data.results[5].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
    //SAPOpen.innerHTML += data.results[5].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    SAPPercent.innerHTML = data.results[5].regularMarketChangePercent.toFixed(2) + `%`
    SAPImg.src = data.results[5].logourl

    //vivo
    VIVName.innerHTML = data.results[6].longName     
    VIVSymbol.innerHTML = data.results[6].symbol
    VIVPrice.innerHTML += data.results[6].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
   // VIVMax.innerHTML += data.results[6].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // VIVMin.innerHTML += data.results[6].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // VIVOpen.innerHTML += data.results[6].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    VIVPercent.innerHTML = data.results[6].regularMarketChangePercent.toFixed(2) + `%`
    VIVImg.src = data.results[6].logourl

    //gerdau
    GERName.innerHTML = data.results[7].longName     
    GERSymbol.innerHTML = data.results[7].symbol
    GERPrice.innerHTML += data.results[7].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
   // GERMax.innerHTML += data.results[7].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // GERMin.innerHTML += data.results[7].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // GEROpen.innerHTML += data.results[7].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    GERPercent.innerHTML = data.results[7].regularMarketChangePercent.toFixed(2) + `%`
    GERImg.src = data.results[7].logourl

    //unipar
    UNIName.innerHTML = data.results[8].longName     
    UNISymbol.innerHTML = data.results[8].symbol
    UNIPrice.innerHTML += data.results[8].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
   // UNIMax.innerHTML += data.results[8].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // UNIMin.innerHTML += data.results[8].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // UNIOpen.innerHTML += data.results[8].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    UNIPercent.innerHTML = data.results[8].regularMarketChangePercent.toFixed(2) + `%`
    UNIImg.src = data.results[8].logourl

    //weg
    WEGName.innerHTML = data.results[9].longName     
    WEGSymbol.innerHTML = data.results[9].symbol
    WEGPrice.innerHTML += data.results[9].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
   // WEGMax.innerHTML += data.results[9].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // WEGMin.innerHTML += data.results[9].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // WEGOpen.innerHTML += data.results[9].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    WEGPercent.innerHTML = data.results[9].regularMarketChangePercent.toFixed(2) + `%`
    WEGImg.src = data.results[9].logourl

    //vivara
    VARName.innerHTML = data.results[10].longName     
    VARSymbol.innerHTML = data.results[10].symbol
    VARPrice.innerHTML += data.results[10].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
   // VARMax.innerHTML += data.results[10].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // VARMin.innerHTML += data.results[10].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // VAROpen.innerHTML += data.results[10].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    VARPercent.innerHTML = data.results[10].regularMarketChangePercent.toFixed(2) + `%`
    VARImg.src = data.results[10].logourl

    //itausa
    ITAName.innerHTML = data.results[11].longName     
    ITASymbol.innerHTML = data.results[11].symbol
    ITAPrice.innerHTML += data.results[11].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
   // ITAMax.innerHTML += data.results[11].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // ITAMin.innerHTML += data.results[11].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // ITAOpen.innerHTML += data.results[11].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    ITAPercent.innerHTML = data.results[11].regularMarketChangePercent.toFixed(2) + `%`
    ITAImg.src = data.results[11].logourl


// function - green positve - red negative
    function percentColor() {

        const red = '#F25050'
        const green = '#24EE76'

        const percent0 = data.results[0].regularMarketChangePercent
        const percent1 = data.results[1].regularMarketChangePercent
        const percent2 = data.results[2].regularMarketChangePercent
        const percent3 = data.results[3].regularMarketChangePercent
        const percent4 = data.results[4].regularMarketChangePercent
        const percent5 = data.results[5].regularMarketChangePercent
        const percent6 = data.results[6].regularMarketChangePercent
        const percent7 = data.results[7].regularMarketChangePercent
        const percent8 = data.results[8].regularMarketChangePercent
        const percent9 = data.results[9].regularMarketChangePercent
        const percent10 = data.results[10].regularMarketChangePercent
        const percent11 = data.results[11].regularMarketChangePercent

        if (percent0 < 0) BBPercent.style.color =  red;
        else BBPercent.style.color = green;

        if (percent1 < 0) PTRPercent.style.color = red;
        else PTRPercent.style.color = green;

        if (percent2 < 0) TAEPercent.style.color = red;
        else TAEPercent.style.color = green;

        if (percent3 < 0) COPPercent.style.color = red;
        else COPPercent.style.color = green;
        
        if (percent4 < 0) VALPercent.style.color = red;
        else VALPercent.style.color = green;

        if (percent5 < 0) SAPPercent.style.color = red;
        else SAPPercent.style.color = green;

        if (percent6 < 0) VIVPercent.style.color = red;
        else VIVPercent.style.color = green;

        if (percent7 < 0) GERPercent.style.color = red;
        else GERPercent.style.color = green;

        if (percent8 < 0) UNIPercent.style.color = red;
        else UNIPercent.style.color = green;

        if (percent9 < 0) WEGPercent.style.color = red;
        else WEGPercent.style.color = green;

        if (percent10 < 0) VARPercent.style.color = red;
        else VARPercent.style.color = green;

        if (percent11 < 0) ITAPercent.style.color = red;
        else ITAPercent.style.color = green;//

    }
    percentColor()
})