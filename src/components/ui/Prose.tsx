import {ReactNode} from 'react';
import {cx} from '../../utils/utils.ts';

type Props = {
    children: ReactNode;
    className?: string;
};

/** Readable measure plus the few element styles the base layer strips out. */
const Prose = ({children, className}: Props) => (
    <div
        className={cx(
            'flex max-w-[62ch] flex-col gap-4 text-krijt-dim',
            '[&_a]:text-krijt [&_a]:underline [&_a]:decoration-(--service) [&_a]:underline-offset-4',
            '[&_strong]:font-semibold [&_strong]:text-krijt',
            className,
        )}
    >
        {children}
    </div>
);

export default Prose;
