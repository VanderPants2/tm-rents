import React from 'react';

type Props = {
    imageList: {path: string; alt: string}[];
};

const ImageList = ({imageList}: Props) => {
    return (
        <div className={'flex justify-center py-16 px-8'}>
            <div className={'max-w-[900px]'}>
                <div className={'w-full text-3xl font-semibold uppercase py-4'}>Foto's</div>
                <div className={'grid grid-cols-3 gap-6'}>
                    {imageList.map((image) => (
                        <div className={''} key={image.path}>
                            <img alt={image.alt} className={'aspect-square object-cover rounded-xl'} src={image.path} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageList;
