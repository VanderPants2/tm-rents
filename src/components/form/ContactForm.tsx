import {useForm} from '@formspree/react';
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import services from '../../content/services.ts';
import Button from '../ui/Button.tsx';
import Dropdown from './Dropdown.tsx';
import InputField from './InputField.tsx';
import TextArea from './TextArea.tsx';

const FORM_ID = 'xnnqpjaq';

const subjectOptions = services.map((service) => ({
    label: service.formSubject,
    value: service.formSubject,
}));

const ContactForm = () => {
    const [state, handleSubmit] = useForm(FORM_ID);
    const {state: routerState} = useLocation();
    const [subject, setSubject] = useState<string>((routerState as {subject?: string} | null)?.subject ?? '');

    useEffect(() => {
        if (!state.succeeded) return;
        document.querySelector<HTMLFormElement>('#contactForm')?.reset();
    }, [state.succeeded]);

    const isPartybus = subject === 'Partybus';

    return (
        <form className={'flex flex-col gap-5'} id={'contactForm'} method={'POST'} onSubmit={handleSubmit}>
            {state.succeeded ? (
                <p className={'rounded-blok border border-(--service) bg-(--service)/10 px-4 py-3 text-krijt'} role={'status'}>
                    Je bericht is verstuurd en goed aangekomen. Je hoort snel iets terug.
                </p>
            ) : null}

            <InputField autoComplete={'name'} disabled={state.submitting} label={'Naam'} name={'Naam'} required />
            <InputField
                autoComplete={'email'}
                disabled={state.submitting}
                label={'E-mailadres'}
                name={'Email'}
                required
                type={'email'}
            />

            <Dropdown
                isDisabled={state.submitting}
                label={'Onderwerp'}
                name={'Onderwerp'}
                onChange={setSubject}
                options={subjectOptions}
                required
                value={subject}
            />

            {isPartybus ? (
                <>
                    <InputField
                        autoComplete={'tel'}
                        disabled={state.submitting}
                        label={'GSM-nummer'}
                        name={'GSM nummer contactpersoon'}
                        required
                        type={'tel'}
                    />
                    <InputField
                        disabled={state.submitting}
                        label={'Datum'}
                        name={'Datum jaar-maand-dag'}
                        required
                        type={'date'}
                    />

                    <div className={'flex flex-col gap-5 sm:flex-row'}>
                        <InputField disabled={state.submitting} label={'Startlocatie'} name={'Startlocatie'} required />
                        <InputField disabled={state.submitting} label={'Startuur'} name={'Startuur'} required type={'time'} />
                    </div>

                    <div className={'flex flex-col gap-5 sm:flex-row'}>
                        <InputField disabled={state.submitting} label={'Eindlocatie'} name={'Eindlocatie'} required />
                        <InputField disabled={state.submitting} label={'Einduur'} name={'Einduur'} required type={'time'} />
                    </div>

                    <TextArea
                        description={'Waar wil je langs, en wat is het plan? Een ruwe schets volstaat.'}
                        disabled={state.submitting}
                        label={'Voorlopig programma'}
                        name={'Voorlopig programma'}
                        required
                        rows={4}
                    />
                </>
            ) : null}

            <TextArea
                disabled={state.submitting}
                label={isPartybus ? 'Extra info' : 'Je vraag'}
                name={isPartybus ? 'Extra info' : 'Uw vraag'}
                placeholder={isPartybus ? undefined : 'Vertel kort wat je zoekt, voor welke datum en op welke locatie.'}
                required={!isPartybus}
                rows={isPartybus ? 3 : 5}
            />

            <Button disabled={state.submitting} size={'lg'} type={'submit'}>
                {state.submitting ? (
                    <>
                        Versturen <i aria-hidden className={'fa-solid fa-spinner animate-spin'} />
                    </>
                ) : (
                    'Verstuur je aanvraag'
                )}
            </Button>
        </form>
    );
};

export default ContactForm;
