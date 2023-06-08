fetch("./data.json")
	.then((response) => response.json())
	.then((data) => {
		let list = document.getElementsByClassName("card__summary")[0];
		let classList = ["red", "yellow", "teal", "blue"];
		data.forEach((item, i) => {
			let li = document.createElement("li");
			li.classList.add("summary__item", `summary__item--${classList[i]}`);
			li.innerHTML = `
            <div class="summary__item--left">
              <img class="item__icon" src="${item.icon}"/>
							<span class="item__text">${item.category}</span>
            </div>
						<div class="summary__item--right">
							<span class="item__score">${item.score}&nbsp;</span>
							<span class="item__score--max">/ 100</span>
						</div>
            `;
			list.appendChild(li);
		});
	})
	.catch((error) => console.log(error));
