import React from 'react';

type Props = {
    videoList: string[];
};

const VideoBlock = ({videoList}: Props) => {
    return (
        <div className={'flex justify-center px-4'}>
            <div className={'max-w-[900px] w-full'}>
                <div className={'w-full text-3xl font-semibold uppercase py-4'}>Video's</div>
                <div className={'grid sm:grid-cols-2 gap-4'}>
                    {videoList.map((path) => (
                        <video className={'w-full'} controls loop>
                            <source src={path} type={'video/mp4'} />
                        </video>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoBlock;
