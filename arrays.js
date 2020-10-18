
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  
//   const prices = products.map((product)=>product.price)
  
//   //Filter products with prices
  
//   const withPrices = products.filter((product)=> Number.isInteger(product.price))
//   console.log(withPrices)
    
    //Calculate the sum of all the prices using reduce only

//     sum = products.reduce(function(acc, cur) {
//       if (Number.isInteger(cur.price)) return acc + cur.price;
//       else return acc;
//   }, 0);
  
// console.log(sum);

// sum = products.reduce(function(acc, cur) {
//   if (Number.isInteger(cur.price)) acc += cur.price;
//   return acc;
// }, 0);

// const sum = products.filter(x => typeof x.price === 'number').map(x => x.price).reduce((a, b) => a + b);
// console.log(sum)

noPrice = products.findIndex((product)=> !Number.isInteger(product.price))
console.log(noPrice)

//Check if some products do not have a price value

const noPric = products.some((product)=>!Number.isInteger(product.price))
console.log(noPric)