import React, {useEffect} from 'react';
import Header from '../components/Header.tsx';
import Footer from '../components/Footer.tsx';
import SplitBlock from '../components/SplitBlock.tsx';
import ListItem from '../components/ListItem.tsx';
import {useSearchParams} from 'react-router-dom';
import ContactForm from '../components/ContactForm.tsx';

const Contact = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.has('formSubmitted')) {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.delete('formSubmitted');
            setSearchParams(newSearchParams);
        }
    }, []);

    return (
        <div className={'flex flex-col gap-8'}>
            <Header />
            <SplitBlock
                blockRight={
                    <div className={'flex flex-col gap-4'}>
                        <img
                            alt={'partybus'}
                            className={'rounded-xl hidden sm:block drop-shadow'}
                            src={'./img/partybus/13.jpeg'}
                        />
                        <a className={'transition-all hover:text-primary w-max'} href={'tel:+32470824801'}>
                            <ListItem icon={<i className="fa-solid fa-phone"></i>} title={'Telefoonnummer'}>
                                0470/82.48.01
                            </ListItem>
                        </a>
                        <a className={'transition-all hover:text-primary w-max'} href={'mailto:info@tm-events-rents.be'}>
                            <ListItem icon={<i className="fa-solid fa-envelope"></i>} title={'E-mailadres'}>
                                info@tm-events-rents.be
                            </ListItem>
                        </a>
                        <ListItem icon={<i className="fa-solid fa-building"></i>} title={'Ondernemingsnummer'}>
                            0780.866.232
                        </ListItem>
                    </div>
                }
                title={'Contact'}
            >
                <div>
                    Heeft u vragen over onze producten of diensten? Wilt u meer weten over de mogelijkheden voor samenwerking of
                    hebt u een specifieke vraag? Vul het onderstaande contactformulier in en wij nemen zo snel mogelijk contact
                    met u op.
                </div>
                <ContactForm />
            </SplitBlock>
            <Footer />
        </div>
    );
};

export default Contact;
