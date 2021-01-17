

function convertCurr(num, currency){
    if(currency == 'USD'){
    let euro = num * 2
    let yen = num * 4
    let pounds = num * 8
    let rupees = num * 10
return `USD: ${num} , euro: ${euro}, yen: ${yen}, pound: ${pounds}, rupees: ${rupees}`
} else if(currency == 'euro'){
    let usd = num * 2
    let yen = num * 4
    let pounds = num * 8
    let rupees = num * 10
return `Euro: ${num} , usd: ${usd}, yen: ${yen}, pound: ${pounds}, rupees: ${rupees}`
} else if(currency == 'yen'){
    let usd = num * 2
    let euro = num * 4
    let pounds = num * 8
    let rupees = num * 10
    return `Yen: ${num} , usd: ${usd}, euro: ${euro}, pound: ${pounds}, rupees: ${rupees}`
} else if(currency =='rupees'){
    let usd = num * 2
    let euro = num * 4
    let pounds = num * 8
    let yen = num * 10
    return `Rupees: ${num} , usd: ${usd}, euro: ${euro}, pound: ${pounds}, yen: ${yen}`
}else{
    return `We don't exchange that currency`
}
}

console.log(convertCurr(9, 'rupees'))