import { useState } from "react";
import CreditCard from "./components/CreditCard";
import Form from "./components/Form";

export interface IForm {
    cardholderName: string;
    cardNumber: number;
    month: number;
    year: number;
    cvc: number;
}
const initialForm = {
    cardholderName: "",
    cardNumber: 0,
    month: 0,
    year: 0,
    cvc: 0,
};
function App() {
    const [form, setForm] = useState<IForm>({} as IForm);

    const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prevState: IForm) => ({ ...prevState, [e.target.name]: e.target.value }));
        console.log("as");
    };

    return (
        <main className='flex items-center justify-center flex-col'>
            <CreditCard />
            <Form />
        </main>
    );
}

export default App;
