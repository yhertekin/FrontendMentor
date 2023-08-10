interface InputProps {
    label?: string;
    type: "text" | "number";
}

const Input = ({ placeholder, label, type, ...rest }: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className='form-control w-full '>
            {label && (
                <label className='label'>
                    <span className='label-text uppercase tracking-widest'>{label}</span>
                </label>
            )}
            <input type={type} placeholder={placeholder} className='input input-bordered w-full' {...rest} />
        </div>
    );
};

export default Input;
