// products
products = {
  products: [
    {
      id: "p1",
      title: "Фідерне вудлище Flagman Mantaray Pro Feeder 3.6м 100г",
      price: 5,
      description: "This is a first product - amazing!",
      inStock: 1,
    },
  ],
  totalAmountProduct: 0,
}

//
state.products.push({
  id: key,
  code: data[key].code || "code",
  title: data[key].title,
  image: data[key].image,
  price: data[key].price,
  description: data[key].description,
  isStock: data[key].inStock,
})
