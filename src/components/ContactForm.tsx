import React, {useEffect} from 'react';
import {useForm} from '@formspree/react';
import InputField from './InputField.tsx';
import TextArea from './TextArea.tsx';
import Button from './Button.tsx';

const ContactForm = () => {
    const [state, handleSubmit] = useForm('xnnqpjaq');

    useEffect(() => {
        if (state.succeeded) {
            const form: HTMLFormElement = document.querySelector('#contactForm');
            form.reset();
        }
    }, [state.succeeded]);

    return (
        <form action="https://formspree.io/f/xnnqpjaq" id={'contactForm'} method="POST" onSubmit={handleSubmit}>
            {state.succeeded ? (
                <div className={'bg-teal-600/40 rounded-md mb-4 px-3 py-2'}>
                    Uw vraag is verzonden en goed toegekomen. Wij nemen zo snel mogelijk contact met u op.
                </div>
            ) : null}
            <InputField disabled={state.submitting} name={'name'} required>
                Naam
            </InputField>
            <InputField disabled={state.submitting} name={'email'} required type={'email'}>
                E-mailadres
            </InputField>
            <TextArea disabled={state.submitting} name={'message'} required rows={5}>
                Uw vraag
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
