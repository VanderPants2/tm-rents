import React from 'react';
import Header from '../components/Header.tsx';
import ImageContentBlock from '../components/ImageContentBlock.tsx';
import ImageList from '../components/ImageList.tsx';
import Footer from '../components/Footer.tsx';

const PartyBus = () => {
    return (
        <div className={'flex flex-col gap-8'}>
            <Header />
            <ImageContentBlock imageAlt={'partybus'} imagePath={'./img/partybus/12.jpeg'} title={'Partybus'}>
                <p>
                    Maak je volgende evenement legendarisch met de Baravan, onze unieke en volledig uitgeruste mobiele tapwagen!
                    Perfect voor elke gelegenheid, van epische bruiloften en onvergetelijke verjaardagen tot bruisende
                    bedrijfsfeesten en knallende festivals.
                </p>
                <p className={'pt-4'}>Waarom de Baravan?</p>
                <ul className={'list-disc list-inside'}>
                    <div className={'indent-3'}>
                        <li>Professioneel en uniek bar concept 🍻</li>
                        <li>Volledig uitgerust met tapinstallatie en koeling ❄️</li>
                        <li>Flexibel en geschikt voor elke locatie 🌍</li>
                        <li>🎉 Beleef de Plezier!</li>
                    </div>
                </ul>
                <p className={'pt-4'}>
                    Gasten genieten van perfect getapte drankjes 🍹 Creëer een gezellige sfeer met een stijlvolle barambiance ✨
                    Maak onvergetelijke herinneringen met vrienden en familie ❤️ Reserveer de Baravan vandaag nog en voeg een
                    vleugje magie en gemak toe aan je evenement! 🥳🍻
                </p>
            </ImageContentBlock>
            <ImageList
                imageList={[
                    {path: './img/partybus/1.jpeg', alt: ''},
                    {path: './img/partybus/2.jpeg', alt: ''},
                    {path: './img/partybus/3.jpeg', alt: ''},
                    {path: './img/partybus/4.jpeg', alt: ''},
                    {path: './img/partybus/5.jpeg', alt: ''},
                    {path: './img/partybus/6.jpeg', alt: ''},
                    {path: './img/partybus/7.jpeg', alt: ''},
                    {path: './img/partybus/8.jpeg', alt: ''},
                    {path: './img/partybus/9.jpeg', alt: ''},
                    {path: './img/partybus/10.jpeg', alt: ''},
                    {path: './img/partybus/11.jpeg', alt: ''},
                ]}
            />
            <Footer />
        </div>
    );
};

export default PartyBus;
