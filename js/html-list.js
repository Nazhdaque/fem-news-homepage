import { html, render } from "lit-html";
import { FetchWrapper } from "./fetchwrapper.js";

const container = document.querySelector(".aside");
const API = new FetchWrapper("");
const items = [];

const itemTemplate = (title, text) => html`
	<li>
		<a href="#">
			<h3 class="ttl-rg">${title}</h3>
			<p>${text}</p>
		</a>
	</li>
`;

const listComponent = items =>
	html`
		<ul class="list">
			${items}
		</ul>
	`;

API.get("data-list.json").then(data => {
	data.forEach(entry => {
		const { title, text } = entry;
		const item = itemTemplate(title, text);
		items.push(item);
	});

	render(listComponent(items), container);
});
