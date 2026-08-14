import {Link} from 'react-router-dom';
import site from '../../content/site.ts';
import {cx} from '../../utils/utils.ts';

type Props = {
    className?: string;
    size?: 'sm' | 'lg';
};

const sizes = {
    sm: 'text-xl',
    lg: 'text-2xl',
};

/**
 * The logo is a white TM with a hard magenta offset behind it on teal.
 * The wordmark repeats that offset in type. Deliberately pinned to magenta
 * rather than `--service`, so the brand mark stays the same on every page.
 */
const Wordmark = ({className, size = 'sm'}: Props) => (
    <Link
        aria-label={`${site.name} - naar de homepagina`}
        className={cx('display-kop inline-flex items-baseline gap-1.5 leading-none', sizes[size], className)}
        to={'/'}
    >
        <span className={'text-krijt [text-shadow:0.07em_0.07em_0_var(--color-magenta)]'}>TM</span>
        <span className={'text-krijt-dim'}>Events</span>
    </Link>
);

export default Wordmark;
