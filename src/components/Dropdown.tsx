import Select, {Props as ReactSelectProps} from 'react-select';
import {ReactNode} from 'react';

type Props = ReactSelectProps & {
    children?: ReactNode;
    description?: string;
};

const Dropdown = ({children, description, isMulti, name, onChange, options, required, value, ...restProps}: Props) => {
    const values = Array.isArray(value) ? value : [value];
    const selectedOptions = options ? options.filter((option: any) => values.includes(option.value)) : [];

    let classNameInput =
        'disabled:opacity-70 border-2 rounded-md border-primary/40 hover:border-primary/70 focus:outline-none focus:border-primary placeholder:italic placeholder:text-slate-400 w-full py-3 px-4';

    return (
        <div className={'flex flex-col gap-0.5 font-roboto mb-4'}>
            <label className={'ml-1 font-medium'} htmlFor={name}>
                {children} {required && <span className={'text-red-600'}>*</span>}
            </label>

            <Select
                classNamePrefix={'react-select'}
                classNames={{
                    control: (state) =>
                        `border-2 rounded-md border-primary/40 bg-white py-3 px-4 ${state.menuIsOpen ? 'outline-none border-primary/100' : 'hover:border-primary/70'} ${state.isDisabled ? 'opacity-70 bg-transparent' : ''}`,
                    menu: () => `bg-white shadow-lg mt-4 rounded-md border border-primary/40`,
                    placeholder: () => `italic text-slate-400`,
                    dropdownIndicator: (state) => `${state.selectProps.menuIsOpen && 'rotate-180'}`,
                    option: () => `py-2 px-4 hover:bg-primary/5 selected:bg-primary/50`,
                }}
                closeMenuOnScroll={true}
                closeMenuOnSelect={!isMulti}
                hideSelectedOptions={false}
                isMulti={isMulti}
                menuPortalTarget={document.body}
                name={name}
                onChange={(items) => {
                    let value;
                    if (Array.isArray(items)) {
                        value = items.map((item) => item.value);
                    } else {
                        if (items) {
                            // @ts-ignore
                            value = items.value;
                        } else if (isMulti) {
                            value = [];
                        } else {
                            value = '';
                        }
                    }

                    // @ts-ignore
                    onChange(value);
                }}
                options={options}
                placeholder={''}
                required={required}
                unstyled
                value={selectedOptions}
                {...restProps}
            />
            <div className={'ml-1 text-gray-800'}>{description}</div>
        </div>
    );
};

export default Dropdown;
