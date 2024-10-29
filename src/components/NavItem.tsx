import React, {ReactElement} from 'react';
import {Link, NavLink} from 'react-router-dom';

type Props = {
    linkTo: string;
    children: ReactElement;
    active;
};

const NavItem = ({children, linkTo}: Props) => {
    return (
        <NavLink
            className={({isActive}) =>
                isActive ? 'bg-teal-600 text-white rounded-2xl transition-all hover:opacity-80' : 'hover:opacity-80'
            }
            end
            to={linkTo}
        >
            <li className={'px-3 py-2'}>{children}</li>
        </NavLink>
    );
};

export default NavItem;
