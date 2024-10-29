import React, {ReactNode} from 'react';
import ListItem from './ListItem.tsx';

type Props = {
    title: string;
    children: ReactNode;
    imagePath: string;
    imageAlt: string;
};

const ImageListBlock = ({children, imageAlt, imagePath, title}: Props) => {
    return (
        <div className={'flex justify-center'}>
            <div className={'flex items-center max-w-[900px] flex-col sm:flex-row'}>
                <ul className={'basis-2/3 flex flex-col gap-4'}>{children}</ul>
                <div className={'p-8 basis-1/3'}>
                    <img alt={imageAlt} className={'rounded-xl'} src={imagePath} />
                </div>
            </div>
        </div>
    );
};

export default ImageListBlock;
