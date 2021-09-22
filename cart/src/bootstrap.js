import faker from "faker";

const mount = (el) => {
  const cartMessage = `<div><h2>You have ${faker.random.number()} items on your cart</h2></div>`;

  el.innerHTML = cartMessage;
};

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#e-cart');

    if(el){
        mount(el);
    }
}

export { mount };
