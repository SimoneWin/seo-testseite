const products = [
    {
    id: 1,
    name: "Schraube",
    price: "4.99",
    image: "",
    },
    {
        id: 2,
        name: "Hammer",
        price: "29.99",
        image: "",
    },
    {
        id: 3,
        name: "Meisel",
        price: 21.99,
        image: "",
    }
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
    <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text>${product.price.toFixed(2)}€</p>
            <button class="btn btn-primary mt-auto" disabled>In den Warenkorb</button>
        </div>
    </div>
    `;
    productList.appendChild(col);
});
