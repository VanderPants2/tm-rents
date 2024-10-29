import React, {ReactNode} from 'react';

type Props = {
    icon: ReactNode;
    title: string;
    children: ReactNode;
};

const ListItem = ({children, icon, title}: Props) => {
    return (
        <li>
            <div className={'flex'}>
                <div className={'text-4xl py-2 px-4'}>{icon}</div>
                <div>
                    <div className={'text-lg font-semibold'}>{title}</div>
                    {children}
                </div>
            </div>
        </li>
    );
};

export default ListItem;
