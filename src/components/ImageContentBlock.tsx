import React, {ReactNode} from 'react';

type Props = {
    imagePath: string;
    imageAlt: string;
    children?: ReactNode;
    title: string;
    reverse?: boolean;
};

const ImageContentBlock = ({children, imageAlt, imagePath, reverse, title}: Props) => {
    return (
        <div className={'flex justify-center py-16 px-8'}>
            <div className={'flex items-center max-w-[900px] ' + (reverse ? 'flex-row-reverse' : '')}>
                <div className={'basis-2/3 p-8'}>
                    <div className={'font-bold text-6xl uppercase'}>{title}</div>
                    <div>{children}</div>
                </div>
                <div className={'basis-1/3'}>
                    <img alt={imageAlt} className={'rounded-xl'} src={imagePath} />
                </div>
            </div>
        </div>
    );
};

export default ImageContentBlock;
