import React from 'react';
import Header from '../components/Header.tsx';
import ImageContentBlock from '../components/ImageContentBlock.tsx';
import Footer from '../components/Footer.tsx';

const Springkastelen = () => {
    return (
        <div className={'flex flex-col gap-8'}>
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
                    Laat de kinderen zich uitleven in de wereld van Frozen met dit prachtige opblaasbare speelparadijs. Dit
                    springkasteel heeft een klim en glijbaan gedeelte.
                </p>
            </ImageContentBlock>
            <ImageContentBlock imageAlt={'bungee springkasteel'} imagePath={'./img/springkastelen/bungee.jpeg'} title={'Bungee'}>
                <p>
                    Spring en slinger op onze kleurrijke sombrero! Dit unieke springkasteel in de vorm van een sombrero is een
                    echte blikvanger op elk feestje. Perfect voor kinderen die van een uitdaging houden!
                </p>
            </ImageContentBlock>
            <Footer />
        </div>
    );
};

export default Springkastelen;
