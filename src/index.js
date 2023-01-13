const baseUrl = "https://platzi-avo.vercel.app";

const app = document.getElementById("app");

const formatPrice = (price) =>
  new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(price);

!(async function () {
  const response = await fetch(`${baseUrl}/api/avo`);
  const { data: allAvos } = await response.json();

  const nodeArray = allAvos.map((item) => {

    const image = document.createElement("img");
    const title = document.createElement("h2");
    const price = document.createElement("div");
    const priceAndTitle = document.createElement("div");
    const description = document.createElement("div")
    const taste = document.createElement("div")

    image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
    title.className = "text-lg";
    price.className = "text-gray-600";
    priceAndTitle.className = "text-center md:text-left";
    
    image.src = `${baseUrl}${item.image}`;
    title.textContent = item.name;
    price.textContent = formatPrice(item.price);
    description.textContent = item.attributes.description
    taste.textContent = item.attributes.taste;
    

    priceAndTitle.appendChild(title);
    priceAndTitle.appendChild(price);
    // priceAndTitle.appendChild(description);
    priceAndTitle.appendChild(taste)

    const card = document.createElement("div");
    card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
    card.appendChild(image);
    card.appendChild(priceAndTitle);

    return card;
  });

  app.append(...nodeArray);
})();