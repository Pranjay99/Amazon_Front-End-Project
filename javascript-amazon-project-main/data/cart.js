export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart)
{
  cart = [{
    productId : "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quntity: 1
},
{
    productId : "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quntity: 1
}];
}


function savetostorage()
{
  localStorage.setItem('cart', JSON.stringify(cart));
}

console.log(cart);
export function addtocart(productid)
{
  let matchingitem;
  cart.forEach((item) =>
  {
    if(productid === item.productId)
    {
        matchingitem = item;
    }
  });

  if(matchingitem)
  {
    matchingitem.quntity += 1;
  }
  else
  {
    cart.push({
      productId: productid,
      quntity: 1
    });
  }

  savetostorage();
}

export function removefromcart(productId)
{
  const newcart = [];

  cart.forEach((cartitem) =>{
    if(productId != cartitem.productId)
    {
        newcart.push(cartitem);

    }
  });

  cart =newcart;
  console.log(cart);

  savetostorage();

}