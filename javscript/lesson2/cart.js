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

const searchParams = new URLSearchParams(window.location.search);

const productID = searchParams.get("cart");

const cartArray = productID.split(",").map(Number);

console.log(cartArray);

const cartProducts = products.filter((product) =>
  cartArray.includes(product.id)
);
console.log(cartProducts);

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

cartProducts.forEach((product) => {
  const { id, title, price, description, image, rating } = product;
  const singleProduct = document.createElement("div");
  singleProduct.classList.add("product_card");
  singleProduct.innerHTML = `
        <div class="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 ">
        <div class="col-span-12 lg:col-span-2 img box">
            <img src="${image}" alt="speaker image" class="max-lg:w-full lg:w-[180px] rounded-lg object-cover">
        </div>
        <div class="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
            <div class="flex items-center justify-between w-full mb-4">
                <h5 class="font-manrope font-bold text-2xl leading-9 text-gray-900">
                    ${title}
                </h5>
                <button class="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle class="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                        cx="17" cy="17" r="17" fill="" />
                    <path class="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                        d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                        stroke="#EF4444" stroke-width="1.6" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            <p class="font-normal text-base leading-7 text-gray-500 mb-6">
                ${description}    
                <a href="javascript:;"
                    class="text-indigo-600">More....</a>
            </p>
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <button
                    class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                    <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                        width="18" height="19" viewBox="0 0 18 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.5 9.5H13.5" stroke="" stroke-width="1.6" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                    </button>
                    <input type="text" id="number"
                    class="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                    placeholder="2">
                    <button
                    class="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                    <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                        width="18" height="19" viewBox="0 0 18 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </button>
                </div>
                <h6 class="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">$${price}</h6>
            </div>
        </div>
        </div>
  `;
  productPage.appendChild(singleProduct);
});

const finalPrice = document.getElementById("finalPrice");
let sumPrice = 0;
console.log(cartProducts);
cartProducts.forEach((product) => {
  sumPrice += product.price;
});

finalPrice.innerHTML = `$${sumPrice}`;
