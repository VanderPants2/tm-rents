type Props = {
    name: string;
    children?: string;
    required?: boolean;
    description?: string;
    placeholder?: string;
    rows?: number;
    disabled?: boolean;
};

const TextArea = ({children, description, disabled, name, placeholder, required, rows}: Props) => {
    return (
        <div className={'flex flex-col gap-0.5 font-roboto mb-4'}>
            <label className={'ml-1 font-medium'} htmlFor={name}>
                {children} {required && <span className={'text-red-600'}>*</span>}
            </label>
            <textarea
                className={
                    'disabled:opacity-70 border-2 rounded-md border-teal-600/40 hover:border-teal-600/70 focus:outline-none focus:border-teal-600 placeholder:italic placeholder:text-slate-400 w-full py-3 px-4'
                }
                disabled={disabled}
                name={name}
                placeholder={placeholder}
                required={required}
                rows={rows}
            />
            <div className={'ml-1 text-gray-800'}>{description}</div>
        </div>
    );
};

export default TextArea;
