import faq from '../../content/faq.ts';
import Accordion from '../ui/Accordion.tsx';
import Button from '../ui/Button.tsx';
import Container from '../ui/Container.tsx';
import Section from '../ui/Section.tsx';
import SectionHeading from '../ui/SectionHeading.tsx';
import site from '../../content/site.ts';

const Faq = () => (
    <Section id={'faq'} tone={'op'}>
        <Container width={'breed'}>
            <div className={'grid gap-12 lg:grid-cols-[minmax(0,24rem)_1fr] lg:gap-20'}>
                <div className={'flex flex-col gap-6'}>
                    <SectionHeading eyebrow={'Veelgestelde vragen'} title={'Vaak gevraagd'} />
                    <p className={'text-krijt-dim'}>Staat je vraag er niet bij? Bel gerust, dat gaat het snelst.</p>
                    <Button href={site.phone.href} icon={'fa-solid fa-phone'} variant={'secondary'}>
                        {site.phone.display}
                    </Button>
                </div>

                <Accordion items={faq} />
            </div>
        </Container>
    </Section>
);

export default Faq;
