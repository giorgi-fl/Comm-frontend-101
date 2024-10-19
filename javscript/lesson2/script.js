// let user = {};

// user.name = "Tom";
// user.age = 25;
// user.display = function () {
//   console.log("user.name");
// };

// user.display();

// let user = {
//   name: "Tom",
//   age: 26,
//   display: function () {
//     console.log(user.name);
//     console.log(user.age);
//   },
// };

// // user.display();

// console.log(user.name);
// delete user.name;

// console.log(user.name);

// const country = {
//   name: "Germany",
//   langugage: "German",
//   population: 1323123123,
//   capital: {
//     name: "Berlin",
//     population: 337629,
//     year: 1234,
//   },
// };

// console.log(country.capital.name);
// console.log(country["capital"]["population"]);
// console.log(country.capital["year"]);

// const country = {
//   name: "Switzerland",
//   languages: ["German", "Fench", "Italy"],
//   capital: {
//     name: "Bern",
//     population: 12345,
//   },
//   cities: [
//     {
//       name: "Zurich",
//       population: 1111,
//     },
//     {
//       name: "Geneva",
//       population: 2222,
//     },
//     {
//       name: "Bazel",
//       population: 44444,
//     },
//   ],
// };
// document.write("<h3>National languages of Swiz </h3>");
// for (let i = 0; i < country.languages.length; i++) {
//   document.write(country.languages[i] + "<br>");
// }

// document.write("<h3>All cisites of Swizz </h3>");
// for (let i = 0; i < country.cities.length; i++) {
//   console.log(country.cities[i]);
//   document.write(country.cities[i].name + "<br>");
// }

// let user = {
//   name: "Tom",
//   age: 26,
//   display: function () {
//     console.log(user.name);
//     console.log(user.age);
//   },
// };

// const hasNameProp = "name" in user;

// console.log(hasNameProp);

// for (let key in user) {
//   console.log(key + ":" + user[key]);
// }

// const object = {
//   a: "test",
//   b: "42",
//   c: "false",
//   d: "ola",
// };

// const data = Object.keys(object);
// const data2 = Object.values(object);
// console.log(data);
// console.log(data2);

// const users = [
//   {
//     id: 101,
//     name: "Andria Asatiani",
//     email: "andria@gmail.com",
//     age: 28,
//   },
//   {
//     id: 102,
//     name: "Sophia Japaridze",
//     email: "sophia@yahoo.com",
//     age: 35,
//   },
//   {
//     id: 103,
//     name: "Luka Tsiklauri",
//     email: "luka@hotmail.com",
//     age: 22,
//   },
//   {
//     id: 104,
//     name: "Mariam Tskhvedadze",
//     email: "mariam@gmail.com",
//     age: 40,
//   },
//   {
//     id: 105,
//     name: "Giorgi Kobalia",
//     email: "giorgi@yahoo.com",
//     age: 31,
//   },
// ];

// const firstDivElement = document.getElementById("main");

// // const newDiv = document.createElement("div");

// users.forEach((user) => {
//   const { name, email, age } = user;
//   console.log(user);
//   const newDiv = document.createElement("div");
//   newDiv.innerHTML = `
//     <div>
//         <p>user: ${name}</p>
//         <p>name:${email} </p>
//         <p>age: ${age}</p>
//     </div>
//   `;
//   firstDivElement.appendChild(newDiv);
// });

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];
let cartItems = [];
const productPage = document.getElementById("main");
const rateFunct = (rate) => {
  let startsHTML = `<div class="flex items-center">`;
  const rateToNumber = Math.round(rate);
  console.log(rateToNumber);
  for (let i = 0; i < 5; i++) {
    if (i <= rateToNumber) {
      startsHTML += `<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>`;
    } else {
      startsHTML += `
             <svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>`;
    }
  }
  startsHTML += `</div>`;
  return startsHTML;
};

products.forEach((product) => {
  const { id, title, price, description, image, rating } = product;
  const singleProduct = document.createElement("div");
  singleProduct.classList.add("product_card");
  singleProduct.innerHTML = `
   <div class="flex font-serif">
  <div class="flex-none w-52 relative">
    <img src="${image}" alt="" class="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap items-baseline">
      <h1 class="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
        ${title}
      </h1>
      <div class="flex-auto text-lg font-medium text-slate-500">
        $${price}
      </div>
      <div class="flex">
        ${rateFunct(rating.rate)} 
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-1 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-4 mb-5 text-sm font-medium">
      <div class="flex-auto flex space-x-4 pr-4">
        <button class="buy_now flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="button" >
          Buy now
        </button>
        <button class="add_to_cart flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button"
        >
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-sm text-slate-500">
      ${description}
    </p>
  </form>
</div>
  `;
  singleProduct.querySelector(".add_to_cart").addEventListener("click", () => {
    addToCart(id);
  });
  singleProduct.querySelector(".buy_now").addEventListener("click", () => {
    navigaateToProductPage(id);
  });
  productPage.appendChild(singleProduct);
});

const addToCart = (id) => {
  const product = products.find((product) => product.id === id);
  cartItems.push(product);
  console.log(cartItems);
  updateCartUrl();
};
let url;
const updateCartUrl = () => {
  const cartItemsIds = cartItems.map((item) => item.id).join(",");
  const currentURl = new URL(window.location.href);
  currentURl.searchParams.set("cart", cartItemsIds);
  console.log(currentURl.search);
  const newURl = currentURl.search;
  url = `cart.html${newURl}`;
  console.log(url);
};

const cartButton = document.getElementById("cart");

const navigaateToProductPage = () => {
  window.location.href = url;
};

cartButton.addEventListener("click", navigaateToProductPage);
