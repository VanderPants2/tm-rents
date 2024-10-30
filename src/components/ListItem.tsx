import React, {ReactNode} from 'react';

type Props = {
    icon: ReactNode;
    title: string;
    children: ReactNode;
};

const ListItem = ({children, icon, title}: Props) => {
    return (
        <div className={'flex items-center'}>
            <div className={'text-4xl text-center mr-6 w-[70px]'}>{icon}</div>
            <div>
                <div className={'text-lg font-semibold'}>{title}</div>
                {children}
            </div>
        </div>
    );
};

export default ListItem;
