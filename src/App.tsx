import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import ListBlock from './components/ListBlock.tsx';
import ListItem from './components/ListItem.tsx';
import React from 'react';
import ImageContentBlock from './components/ImageContentBlock.tsx';

const App = () => {
    return (
        <div className={'flex flex-col gap-8'}>
            <Header />
            <ImageContentBlock imageAlt={'tapwagen'} imagePath={'./img/tapwagen/1.jpeg'} title={'TM - Rents'}>
                <p>
                    TM - Rents is dé specialist in feestverhuur. Of je nu een kinderfeestje, een vrijgezellenfeest of een
                    bedrijfsfeest organiseert, wij hebben alles om jouw event onvergetelijk te maken. Van kleurrijke
                    springkastelen tot een feestelijke partybus en onze unieke Baravan: bij ons vind je het allemaal.
                </p>
            </ImageContentBlock>
            <ListBlock title={'Onze diensten'}>
                <ListItem
                    content={
                        'Maak van je vervoersopties een feest op zich! Onze partybus is ideaal voor verjaardagen, vrijgezellenfeesten of een dagje uit met vrienden.'
                    }
                    icon={<i className="fa-solid fa-bus"></i>}
                    title={'Partybus'}
                />
                <ListItem
                    content={
                        'Laat de kinderen zich uitleven! Onze springkastelen zorgen voor urenlang plezier en zijn perfect voor kinderfeestjes.'
                    }
                    icon={<i className="fa-solid fa-children"></i>}
                    title={'Springkastelen'}
                />
                <ListItem
                    content={
                        ' Geniet van verse dranken op jouw evenement. Onze tapwagen brengt de bar naar jou, zodat je gasten kunnen genieten van hun favoriete biertjes en cocktails.'
                    }
                    icon={<i className="fa-solid fa-caravan"></i>}
                    title={'Tapwagen'}
                />
                <ListItem
                    content={
                        'Zorg voor een betrouwbare stroomvoorziening, waar je ook bent. Onze generators zijn ideaal voor buitenfeesten, festivals of evenementen op locaties zonder stroom.'
                    }
                    icon={<i className="fa-solid fa-gears"></i>}
                    title={'Generators'}
                />
            </ListBlock>
            <ImageContentBlock imageAlt={'tibo en rudy'} imagePath={'./img/tibo_en_rudy.jpeg'} title={'Tibo'}>
                <p>
                    TM - Rents is dé specialist in feestverhuur. Of je nu een kinderfeestje, een vrijgezellenfeest of een
                    bedrijfsfeest organiseert, wij hebben alles om jouw event onvergetelijk te maken. Van kleurrijke
                    springkastelen tot een feestelijke partybus en onze unieke Baravan: bij ons vind je het allemaal.
                </p>
            </ImageContentBlock>
            <Footer />
        </div>
    );
};

export default App;
