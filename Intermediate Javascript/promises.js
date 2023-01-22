// https://github.com/alok722/namaste-javascript-notes/blob/master/notes/lecture-20.md

const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

promise.then(function () {
  produceToPayment(orderId);
});

function createOrder(cart){
  const pr = new Promise(function(resolve, reject){
    // createOrder
    // validateCart
    // orderId
    
  })
}
