let data;
fetch("./data.json")
	.then((response) => response.json())
	.then((_data) => (data = _data["destinations"]))
	.catch((error) => console.log(error));

const tabList = document.querySelector(".tab-list");
const tabs = [...document.querySelectorAll(".tab")];
const main = document.querySelector("main");

tabs.map((tab) =>
	tab.addEventListener("click", () => {
		const content = data.filter((d) => d.name.toLowerCase() === tab.innerText.toLowerCase())[0];
		console.log(content);
		const htmlContent = `
      <article class="destination-info flow">
        <h2 class="fs-800 uppercase ff-serif">${content.name}</h2>
        <p>
          ${content.description}
        </p>
        <div class="destination-meta flex">
          <div>
            <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
            <p class="ff-serif uppercase">384,400 km</p>
          </div>
          <div>
            <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
            <p class="ff-serif uppercase">3 days</p>
          </div>
        </div>
      </article>
  `;
		main.innerHTML += htmlContent;
	})
);
