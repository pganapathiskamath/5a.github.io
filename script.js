document.addEventListener("DOMContentOverloaded",function() {
    const productsList=document.getElementById("productList");
    const products=[
    {name:"Product1",price:"$10",image:"print.jpg"},
    {name:"Product2",price:"$20",image:"print.jpg"},
    {name:"Product3",price:"$30",image:"print.jpg"}
    ];
    productsList.forEach((product)=>{
    const productElement=document.createElement("div");
    product.Element.className="product";
    const imageElement=document.createElement("img");
    imageElement.src=product.img;
    imageElement.alt=product.name;
    const nameElement=document.createElement("h3");
    nameElement.textContent=product.name;
    constpriceElement=document.createElement("p");
    priceElement.textContent=product.price;
    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
    productElement.appendChild(productElement);
});
  const scrollToProductsLink=document.getElementById("scrollToProducts");
  const featuredProducts=document.getElementById("featureProducts");
  scrollToProductsLink.addEventListener("click",function(event){
  event.preventDefault();
  featuredProducts.scrollIntoView({behaviour:"smooth"}); 
});
});
