import { useState } from "react";
import Input from "./Input";

interface IForm {
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

const Form = () => {
    const [form, setForm] = useState<IForm>({} as IForm);

    const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prevState: IForm) => ({ ...prevState, [e.target.name]: e.target.value }));
        console.log("as");
    };

    return (
        <div className='w-full p-4 flex gap-4 flex-col'>
            <Input
                placeholder='e.g. Jane Appleseed'
                label='Cardholder name'
                type='text'
                value={form.cardholderName}
                onChange={formChangeHandler}
                name='cardholderName'
            />
            <Input
                placeholder='e.g. 1234 5678 9123 0000'
                label='Card number'
                type='number'
                name='cardNumber'
                value={form.cardNumber}
                onChange={formChangeHandler}
            />
            <div className='flex items-end gap-2'>
                <div className=''>
                    <label className='label'>
                        <span className='label-text uppercase tracking-widest'>exp. date (mm/yy)</span>
                    </label>
                    <div className='flex gap-2'>
                        <Input placeholder='MM' type='number' />
                        <Input placeholder='YY' type='number' />
                    </div>
                </div>
                <Input placeholder='e.g. 123' label='cvc' type='number' />
            </div>
            <button className='btn capitalize'>Confirm</button>
        </div>
    );
};

export default Form;
