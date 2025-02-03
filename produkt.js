const productContainer = document.querySelector(".container");
const productId = 1530;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Fetched Data:", data);

    productContainer.innerHTML = `
     <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
        alt="Beskrivelse af billede" 
        />
        <article class="container_produkt">
          <div class="tekst_overskrift">
            <h3>Humps</h3>
            <p>Humps skibriller XL snow blue gem</p>
            <br />
            <p>DKK ${data.price}</p>
          </div>
          <div class="product-container">
            <label for="size">Choose a size:</label>
            <select id="size" class="size-selector">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl">XL</option>
            </select>

            <button class="add-to-cart">Add to Cart</button>
          </div>
          <div class="tekst_afsnit">
            <h2>Produkt Beskrivelse</h2>
            <p>
              Blå skibriller med polariseret linse for optimal beskyttelse mod sollys og sne-refleksioner. Ergonomisk design med justerbar rem og behagelig pasform. Ventilationsegenskaber for dugfri udsigt, selv under ekstreme forhold. Ideelle til
              både nybegyndere og erfarne skiløbere, der ønsker høj ydeevne og stil på pisten.
            </p>
            <b>Produkt infomation</b>
            <nav>
              <ul>
                <li>Model Name: Skibriller</li>
                <li>Inventory Number: 1163</li>
                <li>Color: Blue</li>
              </ul>
            </nav>
          </div>
        </article>
    `;
  });
