import {useId} from 'react';
import Field, {controlClasses} from './Field.tsx';

type Props = {
    description?: string;
    disabled?: boolean;
    label: string;
    /** Becomes the field name in the Formspree e-mail - don't rename lightly. */
    name: string;
    placeholder?: string;
    required?: boolean;
    rows?: number;
};

const TextArea = ({description, disabled, label, name, placeholder, required = false, rows = 5}: Props) => {
    const id = useId();

    return (
        <Field description={description} id={id} label={label} required={required}>
            <textarea
                className={`${controlClasses} resize-y`}
                disabled={disabled}
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                rows={rows}
            />
        </Field>
    );
};

export default TextArea;
