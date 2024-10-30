import React, {ReactNode, useState} from 'react';

type Props = {
    children: ReactNode;
    type?: 'submit' | 'reset' | 'button' | undefined;
    disabled: boolean;
};

const Button = ({children, disabled, type = undefined}: Props) => {
    return (
        <div>
            <button
                className={'px-4 py-2 bg-teal-600 rounded-md text-white font-medium disabled:opacity-50'}
                disabled={disabled}
                type={type}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
