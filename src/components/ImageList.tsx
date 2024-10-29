import React, {useCallback, useState} from 'react';
import ImageViewer from 'react-simple-image-viewer';

type Props = {
    imageList: {path: string; alt: string}[];
};

const ImageList = ({imageList}: Props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <div className={'flex justify-center px-4'}>
            <div className={'max-w-[900px]'}>
                <div className={'w-full text-3xl font-semibold uppercase py-4'}>Foto's</div>
                <div className={'grid grid-cols-3 gap-3 sm:gap-6'}>
                    {imageList.map((image, index) => (
                        <div key={image.path}>
                            <img
                                alt={image.alt}
                                className={'aspect-square object-cover rounded-xl'}
                                onClick={() => openImageViewer(index)}
                                src={image.path}
                            />
                        </div>
                    ))}
                    {isViewerOpen && (
                        <ImageViewer
                            backgroundStyle={{background: 'rgba(0,0,0,0.7)'}}
                            closeOnClickOutside
                            currentIndex={currentImage}
                            disableScroll
                            onClose={closeImageViewer}
                            src={imageList.map((image) => image.path)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageList;
