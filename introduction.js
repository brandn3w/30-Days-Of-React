// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]


  // products.forEach(function({product, price}){
  //   console.log(`${product} costs $${price}`)
  // })
      
 //Calculate the sum of all the prices using forEach 
let sumProductsLambda =0;
products.forEach(product =>{
    if(Number.isInteger(product.price)){
      sumProductsLambda+=product.price;
    }
  }
  
  )

  let sum = 0;
  products.forEach( function(product) {
    if(Number.isInteger(product.price)){
      sum+=product.price;
  }
  return sum;
  })


  let sumPrice = 0;
  prices.forEach(product =>{
    if(Number.isInteger(product)){
      sumPrice+=product;
    }
  })

// console.log(sumProductsLambda)
// console.log(sum)
// console.log(sumPrice)

//Create an array of prices using map and store it in a variable prices

