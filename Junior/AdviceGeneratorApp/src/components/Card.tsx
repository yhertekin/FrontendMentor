import { useEffect, useState } from "react";
import DiceIcon from "./../assets/icon-dice.svg";
import DesktopDivider from "./../assets/pattern-divider-desktop.svg";
import MobileDivider from "./../assets/pattern-divider-mobile.svg";

const api = "https://api.adviceslip.com/advice";

interface IState {
	slip: {
		id: number;
		advice: string;
	};
}

const Card = () => {
	const [state, setState] = useState<IState>({
		slip: {
			id: 0,
			advice: "",
		},
	});

	const getData = () => {
		fetch(api)
			.then((response) => response.json())
			.then((data) => setState(data));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="card">
			<p className="card__id">Advice #{state.slip.id}</p>
			<p className="card__advice">{state.slip.advice}</p>
			<picture className="card__divider">
				<source media="(min-width: 600px)" srcSet={DesktopDivider} />
				<img src={MobileDivider} alt="divider" />
			</picture>
			<button className="card__button" onClick={getData}>
				<img src={DiceIcon} alt="dice icon" />
			</button>
		</div>
	);
};

export default Card;
