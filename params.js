function add(num1=Math.floor(Math.random()*100), num2=0){
   // console.log(`The sum of ${num1} + ${num2} is ${num1 +num2}`);
}

add();
add(1);
add(1,2);


const cart = [
    {
      name: "Black Longline T-Shirt",
      priceInCents: 1500,
      size: "M",
      quantity: 2,
    },
    {
      name: "Light Wash Stretch Skinny Jeans",
      priceInCents: 6000,
      size: 32,
      quantity: 1,
    },
  ];
  const additions = {discountPercentage: 0.1, salesTax: 0.0825 };
 let obj = {}
  function calculateTotal(products=[],{discountPercentage=.2, salesTax=0.07}={}){
      let total = 0;
      for(let product of products){
          total += product.priceInCents*product.quantity
      }

      if(discountPercentage) total *= 1-discountPercentage;
        //20%
        //100-20 =80%

      return total * (1+ salesTax);
  }
  console.log(calculateTotal(cart,additions))



