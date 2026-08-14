import {useId} from 'react';
import Field, {controlClasses} from './Field.tsx';

type Props = {
    autoComplete?: string;
    description?: string;
    disabled?: boolean;
    label: string;
    /** Becomes the field name in the Formspree e-mail - don't rename lightly. */
    name: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
};

const InputField = ({autoComplete, description, disabled, label, name, placeholder, required = false, type = 'text'}: Props) => {
    const id = useId();

    return (
        <Field description={description} id={id} label={label} required={required}>
            <input
                autoComplete={autoComplete}
                className={controlClasses}
                disabled={disabled}
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                type={type}
            />
        </Field>
    );
};

export default InputField;
