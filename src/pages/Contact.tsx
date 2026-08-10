import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import ContactForm from '../components/form/ContactForm.tsx';
import Container from '../components/ui/Container.tsx';
import PageHeader from '../components/sections/PageHeader.tsx';
import Section from '../components/ui/Section.tsx';
import Seo from '../components/layout/Seo.tsx';
import site from '../content/site.ts';

const description = 'Geef je datum, locatie en wat je nodig hebt door. Je hoort snel of alles nog vrij is en wat het kost.';

const details = [
    {icon: 'fa-solid fa-phone', label: 'Telefoon', href: site.phone.href, value: site.phone.display},
    {icon: 'fa-solid fa-envelope', label: 'E-mail', href: `mailto:${site.email}`, value: site.email},
    {icon: 'fa-brands fa-instagram', label: 'Instagram', href: site.instagram.href, value: site.instagram.handle},
    {icon: 'fa-solid fa-building', label: 'Ondernemingsnummer', href: undefined, value: `BE ${site.vat}`},
];

const Contact = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (!searchParams.has('formSubmitted')) return;

        const next = new URLSearchParams(searchParams);
        next.delete('formSubmitted');
        setSearchParams(next, {replace: true});
    }, [searchParams, setSearchParams]);

    return (
        <>
            <Seo description={description} path={'/contact'} title={'Contact'} />

            <PageHeader
                eyebrow={'Contact'}
                intro={'Vertel kort wat je zoekt en voor wanneer. Bellen mag natuurlijk ook — dat gaat het snelst.'}
                title={'Vraag je datum aan'}
            />

            <Section>
                <Container width={'breed'}>
                    <div className={'grid gap-12 lg:grid-cols-[1fr_minmax(0,20rem)] lg:gap-20'}>
                        <ContactForm />

                        <aside className={'flex flex-col gap-8 lg:order-2'}>
                            <dl className={'flex flex-col gap-6'}>
                                {details.map((detail) => (
                                    <div className={'flex items-start gap-4'} key={detail.label}>
                                        <span
                                            className={
                                                'grid h-10 w-10 shrink-0 place-items-center rounded-full ' +
                                                'border border-rand text-(--service)'
                                            }
                                        >
                                            <i aria-hidden className={detail.icon} />
                                        </span>
                                        <div className={'flex flex-col gap-0.5'}>
                                            <dt className={'font-mono text-xs uppercase tracking-[0.14em] text-krijt-dim'}>
                                                {detail.label}
                                            </dt>
                                            <dd className={'text-krijt'}>
                                                {detail.href ? (
                                                    <a
                                                        className={'transition-colors hover:text-(--service)'}
                                                        href={detail.href}
                                                        rel={detail.href.startsWith('http') ? 'noreferrer' : undefined}
                                                        target={detail.href.startsWith('http') ? '_blank' : undefined}
                                                    >
                                                        {detail.value}
                                                    </a>
                                                ) : (
                                                    detail.value
                                                )}
                                            </dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>

                            <p className={'rounded-blok border border-rand bg-nacht-op p-5 text-sm text-krijt-dim'}>
                                Kies je <strong className={'text-krijt'}>Partybus</strong> als onderwerp, dan vraagt het formulier
                                meteen naar je start- en einduur en je programma. Zo hoeft Tibo niet terug te mailen voor de
                                details.
                            </p>
                        </aside>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Contact;
