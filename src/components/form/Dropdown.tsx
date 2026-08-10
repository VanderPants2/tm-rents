import {useId} from 'react';
import Select from 'react-select';
import Field from './Field.tsx';

type Option = {
    label: string;
    value: string;
};

type Props = {
    description?: string;
    isDisabled?: boolean;
    label: string;
    /** Becomes the field name in the Formspree e-mail — don't rename lightly. */
    name: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder?: string;
    required?: boolean;
    value: string;
};

const Dropdown = ({
    description,
    isDisabled,
    label,
    name,
    onChange,
    options,
    placeholder = 'Kies een onderwerp',
    required = false,
    value,
}: Props) => {
    const id = useId();

    return (
        <Field description={description} id={id} label={label} required={required}>
            <Select<Option>
                classNamePrefix={'react-select'}
                classNames={{
                    control: (state) =>
                        [
                            'rounded-blok border bg-nacht px-4 py-3 transition-colors',
                            state.menuIsOpen ? 'border-(--service)' : 'border-rand hover:border-krijt/30',
                            state.isDisabled ? 'opacity-60' : '',
                        ].join(' '),
                    dropdownIndicator: (state) =>
                        state.selectProps.menuIsOpen ? 'rotate-180 transition-transform' : 'transition-transform',
                    menu: () => 'mt-2 overflow-hidden rounded-blok border border-rand bg-nacht-op shadow-lg',
                    option: (state) =>
                        [
                            'cursor-pointer px-4 py-2.5',
                            state.isFocused ? 'bg-krijt/5 text-krijt' : 'text-krijt-dim',
                            state.isSelected ? 'text-(--service)' : '',
                        ].join(' '),
                    placeholder: () => 'text-krijt-dim/60',
                    singleValue: () => 'text-krijt',
                }}
                closeMenuOnScroll
                inputId={id}
                isDisabled={isDisabled}
                isSearchable={false}
                menuPortalTarget={document.body}
                name={name}
                onChange={(option) => onChange(option?.value ?? '')}
                options={options}
                placeholder={placeholder}
                required={required}
                styles={{menuPortal: (base) => ({...base, zIndex: 50})}}
                unstyled
                value={options.find((option) => option.value === value) ?? null}
            />
        </Field>
    );
};

export default Dropdown;
