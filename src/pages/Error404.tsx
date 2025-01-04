import React from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import ImageContentBlock from '../components/ImageContentBlock.tsx';
import {Link} from 'react-router-dom';

const Error404 = () => {
    return (
        <div className={'flex flex-col gap-8'}>
            <Header />
            <ImageContentBlock
                imageAlt={'partybus'}
                imagePath={'./img/partybus/12.jpeg'}
                title={'Oeps, deze pagina bestaat niet.'}
            >
                <Link to={'/'}>
                    <div
                        className={
                            'px-4 py-2 bg-primary rounded-md text-white font-medium disabled:opacity-50 select-none mt-8 w-max'
                        }
                    >
                        Ga terug naar de homepagina
                    </div>
                </Link>
            </ImageContentBlock>
            <Footer />
        </div>
    );
};

export default Error404;
