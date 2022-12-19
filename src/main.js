fetch(`https://brapi.dev/api/quote/BBAS3%2CPETR4%2CTAEE11%2CCPLE3%2CVALE3%2CSAPR3?range=1d&interval=1d&fundamental=false`).then(response => {
    return response.json()
}).then( data => {

    //banco do brasil
    let BBName = document.getElementById('BBName')
    let BBSymbol = document.getElementById('BBSymbol')
    let BBPrice = document.getElementById('BBPrice')
    let BBMax = document.getElementById('BBMax')
    let BBMin = document.getElementById('BBMin')
    let BBOpen = document.getElementById('BBOpen')
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
    let TAEMax = document.getElementById('TAEMax')
    let TAEMin = document.getElementById('TAEMin')
    let TAEOpen = document.getElementById('TAEOpen')
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
    let VALMax = document.getElementById('VALMax')
    let VALMin = document.getElementById('VALMin')
    let VALOpen = document.getElementById('VALOpen')
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
    
    //-----------------------------------------------------------

    //banco do brasil
    BBName.innerHTML = data.results[0].longName     
    BBSymbol.innerHTML = data.results[0].symbol
    BBPrice.innerHTML += data.results[0].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
   // BBMax.innerHTML += data.results[0].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
   // BBMin.innerHTML += data.results[0].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
   // BBOpen.innerHTML += data.results[0].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
    BBPercent.innerHTML = data.results[0].regularMarketChangePercent.toFixed(2) + `%`
    BBImg.src = data.results[0].logourl

    // petrobras
    PTRName.innerHTML = data.results[1].longName     
    PTRSymbol.innerHTML = data.results[1].symbol
    PTRPrice.innerHTML += data.results[1].regularMarketPrice + ` <span> ${data.results[0].currency}</span>`
    //PTRMax.innerHTML += data.results[1].regularMarketDayHigh + ` <span> ${data.results[0].currency}</span>`
    //PTRMin.innerHTML += data.results[1].regularMarketDayLow + ` <span> ${data.results[0].currency}</span>`
    //PTROpen.innerHTML += data.results[1].regularMarketOpen + `<span> ${data.results[0].currency}</span>`
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
    }

    let showPopup1 = document.getElementById('showPopup1')
    showPopup1.addEventListener('click', function() {
        document.getElementById('popup1').classList.add("active");
    })
    
    let closePopup1 = document.getElementById('closePopup1')
    closePopup1.addEventListener('click', function() {
        document.getElementById('popup1').classList.remove("active");
    })

    percentColor()
})