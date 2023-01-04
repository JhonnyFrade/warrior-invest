fetch(`https://brapi.dev/api/quote/MXRF11%2CVISC11%2CXPML11%2CKNIP11%2CHGLG11%2CXPLG11?fundamental=false`).then(response => {
    return response.json()
}).then( data => {
    
    //MXRF11
    let MXName = document.getElementById('MXName')
    let MXSymbol = document.getElementById('MXSymbol')
    let MXPrice = document.getElementById('MXPrice')
    let MXMax = document.getElementById('MXMax')
    let MXMin = document.getElementById('MXMin')
    let MXOpen = document.getElementById('MXOpen')
    let MXImg = document.getElementById('MXImg')
    let MXPercent = document.getElementById('MXPercent')

    //VISC11
    let VISName = document.getElementById('VISName')
    let VISSymbol = document.getElementById('VISSymbol')
    let VISPrice = document.getElementById('VISPrice')
    let VISMax = document.getElementById('VISMax')
    let VISMin = document.getElementById('VISMin')
    let VISOpen = document.getElementById('VISOpen')
    let VISImg = document.getElementById('VISImg')
    let VISPercent = document.getElementById('VISPercent')

    //XPML11
    let XPMName = document.getElementById('XPMName')
    let XPMSymbol = document.getElementById('XPMSymbol')
    let XPMPrice = document.getElementById('XPMPrice')
    let XPMMax = document.getElementById('XPMMax')
    let XPMMin = document.getElementById('XPMMin')
    let XPMOpen = document.getElementById('XPMOpen')
    let XPMImg = document.getElementById('XPMImg')
    let XPMPercent = document.getElementById('XPMPercent')

    //KNIP11
    let KNIName = document.getElementById('KNIName')
    let KNISymbol = document.getElementById('KNISymbol')
    let KNIPrice = document.getElementById('KNIPrice')
    let KNIMax = document.getElementById('KNIMax')
    let KNIMin = document.getElementById('KNIMin')
    let KNIOpen = document.getElementById('KNIOpen')
    let KNIImg = document.getElementById('KNIImg')
    let KNIPercent = document.getElementById('KNIPercent')

    //HGLG11
    let HGLName = document.getElementById('HGLName')
    let HGLSymbol = document.getElementById('HGLSymbol')
    let HGLPrice = document.getElementById('HGLPrice')
    let HGLMax = document.getElementById('HGLMax')
    let HGLMin = document.getElementById('HGLMin')
    let HGLOpen = document.getElementById('HGLOpen')
    let HGLImg = document.getElementById('HGLImg')
    let HGLPercent = document.getElementById('HGLPercent')

    //XPLG11
    let XPLName = document.getElementById('XPLName')
    let XPLSymbol = document.getElementById('XPLSymbol')
    let XPLPrice = document.getElementById('XPLPrice')
    let XPLMax = document.getElementById('XPLMax')
    let XPLMin = document.getElementById('XPLMin')
    let XPLOpen = document.getElementById('XPLOpen')
    let XPLImg = document.getElementById('XPLImg')
    let XPLPercent = document.getElementById('XPLPercent')

//-----------------------------------------------------------------

    //MXRF11
    MXName.innerHTML = data.results[0].longName     
    MXSymbol.innerHTML = data.results[0].symbol
    MXPrice.innerHTML += data.results[0].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
   // MXMax.innerHTML += data.results[0].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // MXMin.innerHTML += data.results[0].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // MXOpen.innerHTML += data.results[0].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    MXPercent.innerHTML = data.results[0].regularMarketChangePercent.toFixed(2) + `%`
    MXImg.src = data.results[0].logourl

    //VISC11
    VISName.innerHTML = data.results[1].longName     
    VISSymbol.innerHTML = data.results[1].symbol
    VISPrice.innerHTML += data.results[1].regularMarketPrice + ` <span> ${data.results[1].currency}</span>`
   // VISMax.innerHTML += data.results[1].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // VISMin.innerHTML += data.results[1].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // VISOpen.innerHTML += data.results[1].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    VISPercent.innerHTML = data.results[1].regularMarketChangePercent.toFixed(2) + `%`
    VISImg.src = data.results[1].logourl

    //XPML11
    XPMName.innerHTML = data.results[2].longName     
    XPMSymbol.innerHTML = data.results[2].symbol
    XPMPrice.innerHTML += data.results[2].regularMarketPrice + ` <span> ${data.results[1].currency}</span>`
   // XPMMax.innerHTML += data.results[2].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // XPMMin.innerHTML += data.results[2].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // XPMOpen.innerHTML += data.results[2].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    XPMPercent.innerHTML = data.results[2].regularMarketChangePercent.toFixed(2) + `%`
    XPMImg.src = data.results[2].logourl

    //KNIP11
    KNIName.innerHTML = data.results[3].longName     
    KNISymbol.innerHTML = data.results[3].symbol
    KNIPrice.innerHTML += data.results[3].regularMarketPrice + ` <span> ${data.results[1].currency}</span>`
   // KNIMax.innerHTML += data.results[3].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // KNIMin.innerHTML += data.results[3].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // KNIOpen.innerHTML += data.results[3].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    KNIPercent.innerHTML = data.results[3].regularMarketChangePercent.toFixed(2) + `%`
    KNIImg.src = data.results[3].logourl

        //HGLG11
    HGLName.innerHTML = data.results[4].longName     
    HGLSymbol.innerHTML = data.results[4].symbol
    HGLPrice.innerHTML += data.results[4].regularMarketPrice + ` <span> ${data.results[1].currency}</span>`
    // HGLMax.innerHTML += data.results[4].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
    // HGLMin.innerHTML += data.results[4].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
    // HGLOpen.innerHTML += data.results[4].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    HGLPercent.innerHTML = data.results[4].regularMarketChangePercent.toFixed(2) + `%`
    HGLImg.src = data.results[4].logourl

    //XPLG11
    XPLName.innerHTML = data.results[5].longName     
    XPLSymbol.innerHTML = data.results[5].symbol
    XPLPrice.innerHTML += data.results[5].regularMarketPrice + ` <span> ${data.results[1].currency}</span>`
    // XPLMax.innerHTML += data.results[5].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
    // XPLMin.innerHTML += data.results[5].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
    // XPLOpen.innerHTML += data.results[5].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    XPLPercent.innerHTML = data.results[5].regularMarketChangePercent.toFixed(2) + `%`
    XPLImg.src = data.results[5].logourl


    //show variation color
    function percentColor() {

        const red = '#F25050'
        const green = '#24EE76'

        const percent0 = data.results[0].regularMarketChangePercent
        const percent1 = data.results[1].regularMarketChangePercent
        const percent2 = data.results[2].regularMarketChangePercent
        const percent3 = data.results[3].regularMarketChangePercent
        const percent4 = data.results[4].regularMarketChangePercent
        const percent5 = data.results[5].regularMarketChangePercent

        if (percent0 < 0) MXPercent.style.color =  red;
        else MXPercent.style.color = green;

        if (percent1 < 0) VISPercent.style.color = red;
        else VISPercent.style.color = green;

        if (percent2 < 0) XPMPercent.style.color = red;
        else XPMPercent.style.color = green;

        if (percent3 < 0) KNIPercent.style.color = red;
        else KNIPercent.style.color = green;
        
        if (percent4 < 0) HGLPercent.style.color = red;
        else HGLPercent.style.color = green;

        if (percent5 < 0) XPLPercent.style.color = red;
        else XPLPercent.style.color = green;
    }
    percentColor()
})