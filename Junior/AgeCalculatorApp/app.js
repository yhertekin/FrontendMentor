function validate(key, element) {
	const errorMessage = document.querySelector(`#${key} ~ .error--text`);
	errorMessage.innerText = "";

	const value = element.value;

	if (value == "") {
		errorMessage.innerText = "This field is required";
		return false;
	}

	const condition = {
		day: value < 1 || value > 31,
		month: value < 1 || value > 12,
		year: value > new Date().getFullYear(),
	};

	const message = {
		day: "Must be a valid date",
		month: "Must be a valid month",
		year: "Must be in the past",
	};

	if (condition[key]) {
		errorMessage.innerText = message[key];
		return false;
	}

	return true;
}

function calculate() {
	const container = document.querySelector(".form");
	const day = document.querySelector("#day");
	const month = document.querySelector("#month");
	const year = document.querySelector("#year");

	let validation;
	validation = validate("day", day);
	validation = validate("month", month);
	validation = validate("year", year);

	if (validation) {
		container.classList.remove("error");

		const birthDate = new Date(year.value, month.value - 1, day.value);
		const diffDate = new Date(new Date() - birthDate);

		const outputYear = diffDate.toISOString().slice(0, 4) - 1970;
		const outputMonth = diffDate.getMonth();
		const outputDay = diffDate.getDate() - 1;

		const resultYear = document.querySelector(".result--year");
		const resultMonth = document.querySelector(".result--month");
		const resultDay = document.querySelector(".result--day");

		resultYear.innerText = outputYear;
		resultMonth.innerText = outputMonth;
		resultDay.innerText = outputDay;
	} else {
		container.classList.add("error");
	}
}
