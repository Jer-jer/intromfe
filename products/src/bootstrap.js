import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const prodName = faker.commerce.productName();

    products += `<div><h4>${prodName}</h4></div>`;
  }

  // document.querySelector("#product-list").innerHTML = products;
  el.innerHTML = products;
};

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#product-list');

    //Assuming doesn't have an ID of 'product-list'
    if(el){
        //Probably running in isolation
        mount(el);
    }
}

export { mount };
