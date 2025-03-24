import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import ImageList from '../components/ImageList.tsx';
import ImageContentBlock from '../components/ImageContentBlock.tsx';
import {Link} from 'react-router-dom';

const Tapwagen = () => {
    return (
        <div className={'flex flex-col gap-8'}>
            <Header />
            <ImageContentBlock imageAlt={'tapwagen'} imagePath={'./img/tapwagen/1.jpeg'} title={'De Baravan'}>
                <p>
                    Maak je volgende evenement legendarisch met de Baravan, onze unieke en volledig uitgeruste mobiele tapwagen!
                    Perfect voor elke gelegenheid, van epische bruiloften en onvergetelijke verjaardagen tot bruisende
                    bedrijfsfeesten en knallende festivals.
                </p>
                <p className={'pt-4'}>Waarom de Baravan?</p>
                <ul className={'list-disc list-inside'}>
                    <div className={'indent-3'}>
                        <li>Professioneel en uniek bar concept</li>
                        <li>Volledig uitgerust met tapinstallatie en koeling</li>
                        <li>Flexibel en geschikt voor elke locatie</li>
                        <li>Beleef plezier!</li>
                    </div>
                </ul>
                <p className={'pt-4'}>
                    Gasten genieten van perfect getapte drankjes, creëer een gezellige sfeer met een stijlvolle bar ambiance. Maak
                    onvergetelijke herinneringen met vrienden en familie..️ Reserveer de Baravan vandaag nog en voeg een vleugje
                    magie en gemak toe aan je evenement!
                </p>
                <Link state={{subject: 'Tapwagen'}} to={'/contact'}>
                    <div
                        className={
                            'px-6 py-3 mt-8 bg-primary text-white rounded-xl font-semibold border-2 border-primary drop-shadow transition-all hover:text-primary hover:bg-background w-max select-none'
                        }
                    >
                        Neem contact op
                    </div>
                </Link>
            </ImageContentBlock>
            <ImageList
                imageList={[
                    {path: './img/tapwagen/6.jpeg', alt: ''},
                    {path: './img/tapwagen/3.jpeg', alt: ''},
                    {path: './img/tapwagen/4.jpeg', alt: ''},
                    {path: './img/tapwagen/5.jpeg', alt: ''},
                    {path: './img/tapwagen/2.jpeg', alt: ''},
                ]}
            />
            <Footer />
        </div>
    );
};

export default Tapwagen;
