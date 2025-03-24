import React from 'react';
import Header from '../components/Header.tsx';
import ImageContentBlock from '../components/ImageContentBlock.tsx';
import ImageList from '../components/ImageList.tsx';
import Footer from '../components/Footer.tsx';
import {Link} from 'react-router-dom';
import VideoBlock from '../components/VideoBlock.tsx';

const PartyBus = () => {
    return (
        <div className={'flex flex-col gap-8'}>
            <Header />
            <ImageContentBlock imageAlt={'partybus'} imagePath={'./img/partybus/1.jpeg'} title={'Partybus'}>
                <p>
                    Maak van je vervoersopties een feest op zich! Onze partybus is ideaal voor verjaardagen, vrijgezellenfeesten
                    of een dagje uit met vrienden.
                </p>
                <p className={'pt-4'}>Waarom onze partybus?</p>
                <ul className={'list-disc list-inside'}>
                    <div className={'indent-3'}>
                        <li>Ruime en comfortabele bus</li>
                        <li>Genoeg plaats om een hele rit te dansen</li>
                        <li>Uitgerust met genoeg frigo ruimte</li>
                        <li>Krachtige speakers, zodat je kunt dansen op je favoriete muziek.</li>
                        <li>Maak onvergetelijke herinneringen met vrienden en familie</li>
                    </div>
                </ul>
                <Link state={{subject: 'Partybus'}} to={'/contact'}>
                    <div
                        className={
                            'px-6 py-3 mt-8 bg-primary text-white rounded-xl font-semibold border-2 border-primary drop-shadow transition-all hover:text-primary hover:bg-background w-max select-none'
                        }
                    >
                        Neem contact op
                    </div>
                </Link>
            </ImageContentBlock>
            <ImageContentBlock
                imageAlt={'partybus'}
                imagePath={'./img/tibo_en_rudy.jpeg'}
                reverse
                title={'Buschauffeur inbegrepen'}
            />
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
                ]}
            />
            <VideoBlock videoList={['./video/promo_video_partybus.mp4', './video/video_carnaval_partybus.mp4']} />
            <Footer />
        </div>
    );
};

export default PartyBus;
