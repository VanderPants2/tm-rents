import React, {useEffect, useState} from 'react';
import Header from '../components/Header.tsx';
import ImageContentBlock from '../components/ImageContentBlock.tsx';
import Footer from '../components/Footer.tsx';
import SplitBlock from '../components/SplitBlock.tsx';
import ListItem from '../components/ListItem.tsx';
import InputField from '../components/InputField.tsx';
import TextArea from '../components/TextArea.tsx';
import Button from '../components/Button.tsx';
import {useSearchParams} from 'react-router-dom';

const Contact = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    useEffect(() => {
        if (searchParams.has('formSubmitted')) {
            setFormSubmitted(true);

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
                        <img alt={'partybus'} className={'rounded-xl hidden sm:block'} src={'./img/partybus/12.jpeg'} />
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
                    </div>
                }
                title={'Contact'}
            >
                <div>
                    Heeft u vragen over onze producten of diensten? Wilt u meer weten over de mogelijkheden voor samenwerking of
                    hebt u een specifieke vraag? Vul het onderstaande contactformulier in en wij nemen zo snel mogelijk contact
                    met u op.
                </div>
                <form
                    action="https://formsubmit.co/ec1243b2af7c20e0a3c784962a72d197"
                    method="POST"
                    onSubmit={() => {
                        setIsSubmitting(true);
                    }}
                >
                    <InputField disabled={isSubmitting} name={'name'} required>
                        Naam
                    </InputField>
                    <InputField disabled={isSubmitting} name={'email'} required type={'email'}>
                        E-mailadres
                    </InputField>
                    <TextArea disabled={isSubmitting} name={'message'} required rows={5}>
                        Uw vraag
                    </TextArea>
                    <input
                        name="_next"
                        type="hidden"
                        value={window.location.origin + window.location.pathname + '?formSubmitted=true'}
                    />
                    <Button disabled={isSubmitting} type={'submit'}>
                        {isSubmitting ? (
                            <>
                                Verzenden <i className="fa-solid fa-spinner ml-2 animate-spin"></i>
                            </>
                        ) : (
                            <div>Verzend</div>
                        )}
                    </Button>
                    {formSubmitted ? (
                        <div className={'bg-teal-600/40 rounded-md mt-4 px-3 py-2'}>
                            Uw vraag is verzonden en goed toegekomen. Wij nemen zo snel mogelijk contact met u op.
                        </div>
                    ) : null}
                </form>
            </SplitBlock>
            <Footer />
        </div>
    );
};

export default Contact;
