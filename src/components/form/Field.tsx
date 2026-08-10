import {ReactNode} from 'react';

type Props = {
    children: ReactNode;
    description?: string;
    id: string;
    label: string;
    required?: boolean;
};

/** The label + asterisk + description shell, which used to be copy-pasted
 *  into InputField, TextArea and Dropdown separately. */
const Field = ({children, description, id, label, required = false}: Props) => (
    <div className={'flex w-full flex-col gap-2'}>
        <label className={'font-mono text-xs uppercase tracking-[0.14em] text-krijt-dim'} htmlFor={id}>
            {label}
            {required ? (
                <span className={'ml-1 text-(--service)'} title={'verplicht'}>
                    *
                </span>
            ) : null}
        </label>
        {children}
        {description ? <p className={'text-sm text-krijt-dim'}>{description}</p> : null}
    </div>
);

export const controlClasses =
    'w-full rounded-blok border border-rand bg-nacht px-4 py-3 text-krijt [color-scheme:dark] ' +
    'transition-colors placeholder:text-krijt-dim/60 hover:border-krijt/30 focus:border-(--service) ' +
    'disabled:opacity-60';

export default Field;
