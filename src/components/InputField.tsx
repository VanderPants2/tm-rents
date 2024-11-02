type Props = {
    name: string;
    children?: string;
    type?: string;
    required?: boolean;
    description?: string;
    placeholder?: string;
    disabled?: boolean;
};

const InputField = ({children, description, disabled, name, placeholder, required, type = 'text'}: Props) => {
    return (
        <div className={'flex flex-col gap-0.5 font-roboto mb-4'}>
            <label className={'ml-1 font-medium'} htmlFor={name}>
                {children} {required && <span className={'text-red-600'}>*</span>}
            </label>
            <input
                className={
                    'disabled:opacity-70 border-2 rounded-md border-primary/40 hover:border-primary/70 focus:outline-none focus:border-primary placeholder:italic placeholder:text-slate-400 w-full py-3 px-4'
                }
                disabled={disabled}
                name={name}
                placeholder={placeholder}
                required={required}
                type={type}
            />
            <div className={'ml-1 text-gray-800'}>{description}</div>
        </div>
    );
};

export default InputField;
