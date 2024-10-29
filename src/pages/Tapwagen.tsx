import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import ImageList from '../components/ImageList.tsx';
import ImageContentBlock from '../components/ImageContentBlock.tsx';

const Tapwagen = () => {
    return (
        <>
            <Header />
            <ImageContentBlock imageAlt={'tapwagen'} imagePath={'./img/tapwagen/1.jpeg'} title={'De Baravan'}></ImageContentBlock>
            <ImageList
                imageList={[
                    {path: './img/tapwagen/2.jpeg', alt: ''},
                    {path: './img/tapwagen/3.jpeg', alt: ''},
                    {path: './img/tapwagen/4.jpeg', alt: ''},
                    {path: './img/tapwagen/5.jpeg', alt: ''},
                    {path: './img/tapwagen/6.jpeg', alt: ''},
                ]}
            />
            <Footer />
        </>
    );
};

export default Tapwagen;
