import React, {ReactNode} from 'react';

type Props = {
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button' | undefined;
    disabled?: boolean;
};

const Button = ({children, disabled = false, type = undefined}: Props) => {
    return (
        <div>
            <button
                className={
                    'px-4 py-2 bg-primary rounded-md text-white font-medium disabled:opacity-50 select-none hover:opacity-80 transition-all duration-200'
                }
                disabled={disabled}
                type={type}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
