import React, {ReactNode} from 'react';

type Props = {
    imagePath: string;
    imageAlt: string;
    children?: ReactNode;
    title?: string;
    reverse?: boolean;
};

const ImageContentBlock = ({children, imageAlt, imagePath, reverse, title}: Props) => {
    return (
        <div className={'flex justify-center px-4'}>
            <div className={'flex items-center max-w-[900px] flex-col sm:flex-row ' + (reverse ? 'sm:flex-row-reverse' : '')}>
                <div className={'basis-2/3 pb-8 sm:px-8 sm:pb-0'}>
                    <div className={'font-bold sm:text-6xl text-4xl uppercase'}>{title}</div>
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
