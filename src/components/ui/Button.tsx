import {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {cx} from '../../utils/utils.ts';

type Props = {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    /** Renders an `<a>` - use for tel:, mailto: and external links. */
    href?: string;
    icon?: string;
    size?: 'md' | 'lg';
    /** Router state, used to pre-fill the contact form's subject. */
    state?: {subject: string};
    /** Renders a react-router `<Link>`. */
    to?: string;
    type?: 'button' | 'reset' | 'submit';
    variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
    primary: 'bg-teal text-nacht hover:bg-krijt',
    secondary: 'border border-krijt/30 text-krijt hover:border-krijt hover:bg-krijt/5',
    ghost: 'text-krijt-dim hover:text-krijt',
};

const sizes = {
    md: 'px-5 py-3 text-sm',
    lg: 'px-7 py-4 text-base',
};

const Button = ({
    children,
    className,
    disabled = false,
    href,
    icon,
    size = 'md',
    state,
    to,
    type,
    variant = 'primary',
}: Props) => {
    const classes = cx(
        'inline-flex w-max items-center gap-2.5 rounded-full font-mono text-xs uppercase tracking-[0.12em] transition-colors',
        'disabled:pointer-events-none disabled:opacity-50',
        sizes[size],
        variants[variant],
        className,
    );

    const content = (
        <>
            {icon ? <i aria-hidden className={icon} /> : null}
            {children}
        </>
    );

    if (to) {
        return (
            <Link className={classes} state={state} to={to}>
                {content}
            </Link>
        );
    }

    if (href) {
        const external = href.startsWith('http');

        return (
            <a className={classes} href={href} rel={external ? 'noreferrer' : undefined} target={external ? '_blank' : undefined}>
                {content}
            </a>
        );
    }

    return (
        <button className={classes} disabled={disabled} type={type ?? 'button'}>
            {content}
        </button>
    );
};

export default Button;
