import { html, render } from "lit-html";
import { FetchWrapper } from "./fetchwrapper.js";

const container = document.querySelector(".articles");
const API = new FetchWrapper("");
const cards = [];

const cardTemplate = (title, text, img) => html`
	<li>
		<a href="#" class="card md--g-auto-r--min">
			<div class="img-container row-span-3">
				<img class="o-fit-cover" src="/images/image-${img}.jpg" alt="${img}" />
			</div>
			<h2 class="ttl-sm card__ttl">${title}</h2>
			<p>${text}</p>
		</a>
	</li>
`;

const cardsComponent = cards =>
	html`
		<ul class="cards grid-x col-3">
			${cards}
		</ul>
	`;

API.get("data-cards.json").then(data => {
	data.forEach(entry => {
		const { title, text, img } = entry;
		const card = cardTemplate(title, text, img);
		cards.push(card);
	});

	render(cardsComponent(cards), container);
});
