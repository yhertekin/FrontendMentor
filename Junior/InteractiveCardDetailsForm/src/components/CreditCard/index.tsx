import "./CreditCard.css";
import { IForm } from "../../App";

const CreditCard = (props: IForm) => {
    return (
        <div className='credit-card-container'>
            <div className='credit-card credit-card--back'></div>
            <div className='credit-card credit-card--front'>
                <p className='card-number'>{props.cardNumber}</p>
                <p>
                    <span className='cardholder-name'>{props.cardholderName}</span>
                    <span className='exp-date'>
                        {props.month}/{props.year}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default CreditCard;
