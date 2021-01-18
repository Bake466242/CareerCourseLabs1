const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome to our Currency Exchange!')
rl.question('Please enter your currency type: ', (currency) => {
    rl.question('Please enter how much you have : ', (num) => {
    
        if(currency == 'USD'){
            let euro = num * 2
            let yen = num * 4
            let pounds = num * 8
            let rupees = num * 10
            var result = `USD: ${num} , euro: ${euro}, yen: ${yen}, pound: ${pounds}, rupees: ${rupees}`
        } else if(currency == 'euro'){
            let usd = num * 2
            let yen = num * 4
            let pounds = num * 8
            let rupees = num * 10
            var result = `Euro: ${num} , usd: ${usd}, yen: ${yen}, pound: ${pounds}, rupees: ${rupees}`
        } else if(currency == 'yen'){
            let usd = num * 2
            let euro = num * 4
            let pounds = num * 8
            let rupees = num * 10
            var result = `Yen: ${num} , usd: ${usd}, euro: ${euro}, pound: ${pounds}, rupees: ${rupees}`
        } else if(currency =='rupees'){
            let usd = num * 2
            let euro = num * 4
            let pounds = num * 8
            let yen = num * 10
            var result = `Rupees: ${num} , usd: ${usd}, euro: ${euro}, pound: ${pounds}, yen: ${yen}`
        }else{
            var result = `We don't exchange that currency`
        }
        //var result = (currency) ;
        console.log(`You have ${result}`);
        rl.close();
    });
});