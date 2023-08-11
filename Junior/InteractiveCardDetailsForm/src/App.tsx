import { useEffect, useState } from "react";
import CreditCard from "./components/CreditCard";
import Form from "./components/Form";

export interface IForm {
    cardholderName: string;
    cardNumber: string;
    month: string;
    year: string;
    cvc: string;
}

export type IFormKeys = "cardholderName" | "cardNumber" | "month" | "year" | "cvc";

export const initialFormValues: IForm = {
    cardholderName: "Jane Appleseed",
    cardNumber: "0000000000000000",
    month: "00",
    year: "00",
    cvc: "000",
};

function App() {
    const [form, setForm] = useState<IForm>(initialFormValues);

    const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prevState: IForm) => ({ ...prevState, [e.target.name]: e.target.value }));
        console.log("as");
    };
    useEffect(() => {
        console.log(form);
    }, [form]);

    return (
        <main className='flex items-center justify-center flex-col md:flex-row'>
            <CreditCard {...form} />
            <Form values={form} onChange={formChangeHandler} />
        </main>
    );
}

export default App;
