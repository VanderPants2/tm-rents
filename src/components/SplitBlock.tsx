import React, {ReactNode} from 'react';
import ListItem from './ListItem.tsx';

type Props = {
    title: string;
    children: ReactNode;
    blockRight: ReactNode;
};

const SplitBlock = ({blockRight, children, title}: Props) => {
    return (
        <div className={'flex justify-center px-4'}>
            <div className={'flex max-w-[900px] flex-col sm:flex-row'}>
                <div className={'basis-2/3 '}>
                    <div className={'font-bold sm:text-6xl text-4xl uppercase'}>{title}</div>
                    <ul className={'basis-2/3 flex flex-col gap-4'}>{children}</ul>
                </div>
                <div className={'px-8 sm:pt-14 pt-8 basis-1/3'}>{blockRight}</div>
            </div>
        </div>
    );
};

export default SplitBlock;
