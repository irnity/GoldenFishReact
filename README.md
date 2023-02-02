<!-- DomTree -->
<MainCart>

  <Header>
    <CarHeader>
      <NavigationHeader>
       <leftSide>
         <ShopName>
         <SearchHeader>
       <rightSide>
         <Signup>
         <Basket>
      <NavigationMain />

  <Main>
    <CartMain>
      <ProductsList />
        <AddProduct />
        <Product />
    
  
  <Footer>

<!-- Router -->

<RouterProvider/>
  <RootLayout>

   <!-- "/" -->
   <HomePage>

<!-- "products" -->

<ProductsListPage
loader: loadProductsListPage

>

  <Main>

<!-- "products/:id" -->

<Product
loader: loadProductPage

>

  <Product />

<!-- add-product -->

<NewProductPage
action: addNewProduct

>
