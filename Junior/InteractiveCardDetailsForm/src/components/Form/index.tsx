import { useState } from "react";
import Input from "./Input";
import { IForm, IFormKeys, initialFormValues } from "../../App";

interface FormProps {
    values: IForm;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ values, onChange }: FormProps) => {
    const [formVisible, setFormVisible] = useState(true);

    const checkValue = (field: IFormKeys) => {
        if (values[field] === initialFormValues[field]) {
            return "";
        }
        return values[field];
    };

    return (
        <div className='w-full flex items-center justify-center '>
            <div className='max-w-[400px] p-4 flex gap-4 flex-col '>
                {formVisible ? (
                    <>
                        <Input
                            placeholder='e.g. Jane Appleseed'
                            label='Cardholder name'
                            type='text'
                            value={checkValue("cardholderName")}
                            onChange={onChange}
                            name='cardholderName'
                        />
                        <Input
                            placeholder='e.g. 1234 5678 9123 0000'
                            label='Card number'
                            type='number'
                            name='cardNumber'
                            value={checkValue("cardNumber")}
                            onChange={onChange}
                        />
                        <div className='flex items-end gap-2'>
                            <div className=''>
                                <label className='label'>
                                    <span className='label-text uppercase tracking-widest'>exp. date (mm/yy)</span>
                                </label>
                                <div className='flex gap-2'>
                                    <Input
                                        placeholder='MM'
                                        type='number'
                                        value={checkValue("month")}
                                        onChange={onChange}
                                        name='month'
                                    />
                                    <Input
                                        placeholder='YY'
                                        type='number'
                                        value={checkValue("year")}
                                        onChange={onChange}
                                        name='year'
                                    />
                                </div>
                            </div>
                            <Input
                                placeholder='e.g. 123'
                                label='cvc'
                                type='number'
                                value={checkValue("cvc")}
                                onChange={onChange}
                                name='cvc'
                            />
                        </div>
                        <button
                            className='btn text-white bg-violet-500 tracking-widest font-normal capitalize'
                            onClick={() => setFormVisible(false)}
                        >
                            Confirm
                        </button>
                    </>
                ) : (
                    <>
                        <div className='w-20 h-20 bg-gradient-to-b from-violet-300 to-violet-400 rounded-full mx-auto'>
                            <img src='/assets/images/icon-complete.svg' alt='completed' />
                        </div>
                        <h1 className='mx-auto font-black text-3xl uppercase text-violet-500'>Thank You!</h1>
                        <p className='text-violet-200'>We've added your credit card details.</p>
                        <button
                            className='btn text-white bg-violet-500 tracking-widest font-normal capitalize'
                            onClick={() => setFormVisible(true)}
                        >
                            Continue
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Form;
