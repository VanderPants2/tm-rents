import React, {ReactNode} from 'react';
import ListItem from './ListItem.tsx';

type Props = {
    title: string;
    children: ReactNode;
};

const ListBlock = ({children, title}: Props) => {
    return (
        <div className={'flex justify-center py-16 px-4 bg-black text-teal-600'}>
            <div className={'flex items-center max-w-[900px]'}>
                <div className={'p-8 basis-1/3'}>
                    <div className={'font-bold text-6xl uppercase'}>{title}</div>
                </div>
                <ul className={'basis-2/3 flex flex-col gap-4'}>{children}</ul>
            </div>
        </div>
    );
};

export default ListBlock;
