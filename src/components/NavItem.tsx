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
                'hover:opacity-80 border border-primary rounded-2xl ' + (isActive ? 'bg-primary text-whit transition-all' : '')
            }
            end
            to={linkTo}
        >
            <li className={'px-3 py-2 select-none'}>{children}</li>
        </NavLink>
    );
};

export default NavItem;
