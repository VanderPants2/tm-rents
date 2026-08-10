import site from '../../content/site.ts';
import Button from '../ui/Button.tsx';
import Container from '../ui/Container.tsx';
import Section from '../ui/Section.tsx';

type Props = {
    /** Pre-fills the contact form's subject when set. */
    subject?: string;
    title?: string;
};

const CtaBand = ({subject, title = 'Weet je je datum al?'}: Props) => (
    <Section className={'border-t border-rand'} size={'sm'}>
        <Container width={'breed'}>
            <div className={'flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between'}>
                <div className={'flex flex-col gap-3'}>
                    <h2 className={'display-kop offset-schaduw text-3xl'}>{title}</h2>
                    <p className={'max-w-[46ch] text-krijt-dim'}>
                        Geef je datum en locatie door, dan hoor je snel of alles nog vrij is en wat het kost.
                    </p>
                </div>

                <div className={'flex flex-wrap items-center gap-3'}>
                    <Button href={site.phone.href} icon={'fa-solid fa-phone'} size={'lg'}>
                        {site.phone.display}
                    </Button>
                    <Button size={'lg'} state={subject ? {subject} : undefined} to={'/contact'} variant={'secondary'}>
                        Vraag je datum aan
                    </Button>
                </div>
            </div>
        </Container>
    </Section>
);

export default CtaBand;
