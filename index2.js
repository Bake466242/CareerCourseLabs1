//Function will calculate and output a customer receipt

const salesTaxRate = 0.07

let custSubTotal = 179.36

//Now we want to call their sales tax amount and display a receipt

function calcSalesTax(subTotal, taxRate){
    let taxTotal = subTotal * taxRate
    return taxTotal
    // or just return subTotal * taxRate
}


// const calcSalesTax = function(subTotal, taxRate){
//     return subTotal * taxRate
// }

//const calcSalesTax = (subTotal, taxRate) => {
//     return subTotal * taxRate
// }

//const calcSalesTax = (subTotal, taxRate) => subTotal * taxRate

let customerTaxTotal = calcSalesTax(custSubTotal, salesTaxRate)
let customerTotal = customerTaxTotal + custSubTotal

console.log('Subtotal:  ', custSubTotal.toFixed(2))
console.log('Tax Total:  ', customerTaxTotal.toFixed(2))
console.log('---------------------')
console.log('Total:    ', customerTotal.toFixed(2))

// let customerTaxTotal = calcSalesTax(custSubTotal, salesTaxRate)
// console.log(customerTaxTotal)