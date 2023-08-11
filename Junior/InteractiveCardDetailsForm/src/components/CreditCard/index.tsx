import "./CreditCard.css";
import { IForm, IFormKeys, initialFormValues } from "../../App";

const CreditCard = (props: IForm) => {
    const checkValue = (field: IFormKeys) => {
        if (props[field] === "") {
            return initialFormValues[field];
        }
        return props[field];
    };

    return (
        <div className='credit-card-container'>
            <div className='credit-card credit-card--back'>
                <p className='cvc-number'>{checkValue("cvc")}</p>
            </div>
            <div className='credit-card credit-card--front'>
                <img className='card-logo' src='/assets/images/card-logo.svg' alt='card logo' />
                <p className='card-number'>
                    {checkValue("cardNumber")
                        ?.match(/.{1,4}/g)
                        ?.join(" ")}
                </p>
                <p>
                    <span className='cardholder-name'>{checkValue("cardholderName")}</span>
                    <span className='exp-date'>
                        {checkValue("month")}/{checkValue("year")}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default CreditCard;
