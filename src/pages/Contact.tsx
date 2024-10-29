import React from 'react';
import Header from '../components/Header.tsx';
import ImageContentBlock from '../components/ImageContentBlock.tsx';
import Footer from '../components/Footer.tsx';
import ImageListBlock from '../components/ImageListBlock.tsx';
import ListItem from '../components/ListItem.tsx';

const Contact = () => {
    return (
        <div className={'flex flex-col gap-8'}>
            <Header />
            <ImageListBlock imageAlt={'partybus'} imagePath={'./img/partybus/12.jpeg'} title={'Contacteer mij'}>
                <a className={'transition-all hover:text-teal-600 w-max'} href={'tel:+32470824801'}>
                    <ListItem icon={<i className="fa-solid fa-phone"></i>} title={'Telefoonnummer'}>
                        0470/82.48.01
                    </ListItem>
                </a>
                <a className={'transition-all hover:text-teal-600 w-max'} href={'mailto:tibo.mertens@hotmail.com'}>
                    <ListItem icon={<i className="fa-solid fa-envelope"></i>} title={'E-mailadres'}>
                        tibo.mertens@hotmail.com
                    </ListItem>
                </a>
                <ListItem icon={<i className="fa-solid fa-building"></i>} title={'Ondernemingsnummer'}>
                    0780.866.232
                </ListItem>
            </ImageListBlock>
            <Footer />
        </div>
    );
};

export default Contact;
