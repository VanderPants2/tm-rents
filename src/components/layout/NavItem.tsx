import {ReactNode} from 'react';
import {NavLink} from 'react-router-dom';
import {cx} from '../../utils/utils.ts';

type Props = {
    children: ReactNode;
    className?: string;
    /** The hue this link lights up in when it is the current page. */
    hue?: string;
    linkTo: string;
    onClick?: () => void;
};

const NavItem = ({children, className, hue, linkTo, onClick}: Props) => (
    <NavLink
        className={({isActive}) =>
            cx(
                'group relative py-1 font-mono text-xs uppercase tracking-[0.16em] transition-colors',
                isActive ? 'text-krijt' : 'text-krijt-dim hover:text-krijt',
                className,
            )
        }
        end
        onClick={onClick}
        style={hue ? ({'--service': hue} as React.CSSProperties) : undefined}
        to={linkTo}
    >
        {({isActive}) => (
            <>
                {children}
                <span
                    aria-hidden
                    className={cx(
                        'absolute -bottom-0.5 left-0 h-px bg-(--service) transition-all duration-200',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full',
                    )}
                />
            </>
        )}
    </NavLink>
);

export default NavItem;
