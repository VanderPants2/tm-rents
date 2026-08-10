import {ReactNode} from 'react';
import {cx} from '../../utils/utils.ts';

type Props = {
    children: ReactNode;
    className?: string;
    id?: string;
    size?: 'sm' | 'md' | 'lg';
    tone?: 'nacht' | 'op';
};

const sizes = {
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-24',
    lg: 'py-20 sm:py-32',
};

const tones = {
    nacht: 'bg-nacht',
    op: 'bg-nacht-op',
};

const Section = ({children, className, id, size = 'md', tone = 'nacht'}: Props) => (
    <section className={cx('relative', sizes[size], tones[tone], className)} id={id}>
        {children}
    </section>
);

export default Section;
