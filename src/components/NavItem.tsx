import React, {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';

type Props = {
    linkTo: string;
    children: ReactElement;
};

const NavItem = ({children, linkTo}: Props) => {
    return (
        <NavLink
            className={({isActive}) =>
                'hover:opacity-80 border border-teal-600 rounded-2xl sm:border-none ' +
                (isActive ? 'bg-teal-600 text-whit transition-all' : '')
            }
            end
            to={linkTo}
        >
            <li className={'px-3 py-2'}>{children}</li>
        </NavLink>
    );
};

export default NavItem;
