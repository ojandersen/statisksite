const listcontainer = document.querySelector(".container");

fetch("https://kea-alt-del.dk/t7/api/products/")
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<article class="container_vare">
<img img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
<div class="card_content">
  <h3>${product.brandname}</h3>
  <p>
    Humps skibriller XL snow blue gem <br />
    DKK ${product.price}
  </p>
  <a href="produkt.html"><button>Read more</button></a>
</div>
</article>`;
    })
    .join("");
  console.log(markup);
  listcontainer.innerHTML = markup;
}
