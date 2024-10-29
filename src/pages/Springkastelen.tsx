import React from 'react';
import Header from '../components/Header.tsx';
import ImageContentBlock from '../components/ImageContentBlock.tsx';
import Footer from '../components/Footer.tsx';

const Springkastelen = () => {
    return (
        <>
            <Header />
            <ImageContentBlock imageAlt={'diddl springkasteel'} imagePath={'./img/springkastelen/diddl.jpeg'} title={'Diddl'}>
                <p>
                    Maak elk feest onvergetelijk met dit kleurrijke Diddl springkasteel, compleet met een glijbaan aan de
                    rechterkant voor extra speelplezier!
                </p>
            </ImageContentBlock>
            <ImageContentBlock
                imageAlt={'frozen springkasteel'}
                imagePath={'./img/springkastelen/frozen.jpeg'}
                reverse
                title={'Frozen'}
            >
                <p>
                    Maak elk feest onvergetelijk met dit kleurrijke Diddl springkasteel, compleet met een glijbaan aan de
                    rechterkant voor extra speelplezier!
                </p>
            </ImageContentBlock>
            <ImageContentBlock imageAlt={'bungee springkasteel'} imagePath={'./img/springkastelen/bungee.jpeg'} title={'Bungee'}>
                <p>
                    Maak elk feest onvergetelijk met dit kleurrijke Diddl springkasteel, compleet met een glijbaan aan de
                    rechterkant voor extra speelplezier!
                </p>
            </ImageContentBlock>
            <Footer />
        </>
    );
};

export default Springkastelen;
