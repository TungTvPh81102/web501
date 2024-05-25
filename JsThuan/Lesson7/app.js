const products = document.getElementById("products");
console.log(products);

async function getProductsApi() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();

  try {
    data.forEach((item) => {
      products.innerHTML += `
          <div class="col-4">
            <div class="card mb-5">
                <img style=" height: 200px;" src="${item.thumbnail}">
                <h2 style="text-align: center; font-size:20px">${item.title}</h2>
                <h2 style="text-align: center; font-size:20px">${item.price}</h2>
                <button class="btn btn-primary">Add to cart</button>
            </div>
          </div>
      `;
    });
  } catch (error) {
    console.log("Message", error.message);
  }
}

getProductsApi();
