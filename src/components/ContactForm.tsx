import React, {useEffect, useState} from 'react';
import {useForm} from '@formspree/react';
import InputField from './InputField.tsx';
import TextArea from './TextArea.tsx';
import Button from './Button.tsx';
import Dropdown from './Dropdown.tsx';
import {useLocation} from 'react-router-dom';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('xnnqpjaq');
    const {state: stateParams} = useLocation();
    const [subject, setSubject] = useState<string>(stateParams?.subject ?? '');

    useEffect(() => {
        if (state.succeeded) {
            const form: HTMLFormElement = document.querySelector('#contactForm');
            form.reset();
        }
    }, [state.succeeded]);

    return (
        <form action="https://formspree.io/f/xnnqpjaq" id={'contactForm'} method="POST" onSubmit={handleSubmit}>
            {state.succeeded ? (
                <div className={'bg-primary/40 rounded-md mb-4 px-3 py-2'}>
                    Uw vraag is verzonden en goed toegekomen. Wij nemen zo snel mogelijk contact met u op.
                </div>
            ) : null}
            <InputField disabled={state.submitting} name={'Naam'} required>
                Naam
            </InputField>
            <InputField disabled={state.submitting} name={'Email'} required type={'email'}>
                E-mailadres
            </InputField>
            <Dropdown
                isDisabled={state.submitting}
                name={'Onderwerp'}
                onChange={(value) => setSubject(value as string)}
                options={[
                    {value: 'Partybus', label: 'Partybus'},
                    {value: 'Springkastelen', label: 'Springkastelen'},
                    {value: 'Tapwagen', label: 'Tapwagen'},
                    {value: 'Generators', label: 'Generators'},
                ]}
                required
                value={subject}
            >
                Onderwerp
            </Dropdown>
            {/*{subject === 'Springkastelen' && (*/}
            {/*    <>*/}
            {/*        <Dropdown*/}
            {/*            isMulti*/}
            {/*            onChange={(value) => setSpringkasteel(value as string)}*/}
            {/*            options={[*/}
            {/*                {value: 'Diddl', label: 'Diddl'},*/}
            {/*                {value: 'Frozen', label: 'Frozen'},*/}
            {/*                {value: 'Bungee', label: 'Bungee'},*/}
            {/*            ]}*/}
            {/*            required*/}
            {/*            value={springkasteel}*/}
            {/*        >*/}
            {/*            Springkasteel*/}
            {/*        </Dropdown>*/}
            {/*        <InputField name={'start position'} required={subject === 'Partybus'} type={'date'}>*/}
            {/*            Startdatum*/}
            {/*        </InputField>*/}
            {/*        <InputField name={'start position'} required={subject === 'Partybus'} type={'date'}>*/}
            {/*            Einddatum*/}
            {/*        </InputField>*/}
            {/*    </>*/}
            {/*)}*/}
            {subject === 'Partybus' && (
                <>
                    <InputField
                        disabled={state.submitting}
                        name={'Datum jaar-maand-dag'}
                        required={subject === 'Partybus'}
                        type={'date'}
                    >
                        Datum
                    </InputField>
                    <div className={'flex gap-4'}>
                        <InputField disabled={state.submitting} name={'Startlocatie'} required={subject === 'Partybus'}>
                            Startlocatie
                        </InputField>
                        <InputField disabled={state.submitting} name={'Startuur'} required={subject === 'Partybus'} type={'time'}>
                            Startuur
                        </InputField>
                    </div>
                    <div className={'flex gap-4'}>
                        <InputField disabled={state.submitting} name={'Eindlocatie'} required={subject === 'Partybus'}>
                            Eindlocatie
                        </InputField>
                        <InputField disabled={state.submitting} name={'Einduur'} required={subject === 'Partybus'} type={'time'}>
                            Einduur
                        </InputField>
                    </div>
                    <TextArea disabled={state.submitting} name={'Voorlopig programma'} required={subject === 'Partybus'} rows={5}>
                        Voorlopig programma
                    </TextArea>
                </>
            )}
            <TextArea
                disabled={state.submitting}
                name={subject === 'Partybus' ? 'Extra info' : 'Uw vraag'}
                required={subject !== 'Partybus'}
                rows={subject === 'Partybus' ? 3 : 5}
            >
                {subject === 'Partybus' ? 'Extra info' : 'Uw vraag'}
            </TextArea>
            <Button disabled={state.submitting} type={'submit'}>
                {state.submitting ? (
                    <>
                        Verzenden <i className="fa-solid fa-spinner ml-2 animate-spin"></i>
                    </>
                ) : (
                    <div>Verzend</div>
                )}
            </Button>
        </form>
    );
};

export default ContactForm;
