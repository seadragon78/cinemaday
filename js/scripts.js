const schemeSVG = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".mob__menu");
const navMenu = document.querySelector(".nav__menu");
let cost = 800;
let totalPrice = 0;
schemeSVG.addEventListener("click", (event) => {
	if (!event.target.classList.contains("locked")) {
		event.target.classList.toggle("choosed");
		let totalSeats = schemeSVG.querySelectorAll(".choosed").length;
		totalPrice = totalSeats * cost;
		totalPriceTag.textContent = totalPrice;
	}
});
menuButton.addEventListener('click', () => {
	// alert('Клик о меню');
	navMenu.classList.toggle("opened");
});
