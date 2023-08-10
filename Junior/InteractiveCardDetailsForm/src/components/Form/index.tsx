import { useState } from "react";
import Input from "./Input";
import { IForm } from "../../App";

interface FormProps {
    data: IForm;
    setData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ data, setData }: FormProps) => {
    return (
        <div className='w-full p-4 flex gap-4 flex-col'>
            <Input
                placeholder='e.g. Jane Appleseed'
                label='Cardholder name'
                type='text'
                value={data.cardholderName}
                onChange={setData}
                name='cardholderName'
            />
            <Input
                placeholder='e.g. 1234 5678 9123 0000'
                label='Card number'
                type='number'
                name='cardNumber'
                value={data.cardNumber}
                onChange={setData}
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
            <button className='btn text-white bg-violet-500 tracking-widest font-normal capitalize'>Confirm</button>
        </div>
    );
};

export default Form;
