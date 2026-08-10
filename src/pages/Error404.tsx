import Button from '../components/ui/Button.tsx';
import Container from '../components/ui/Container.tsx';
import PageHeader from '../components/sections/PageHeader.tsx';
import Section from '../components/ui/Section.tsx';
import Seo from '../components/layout/Seo.tsx';
import ServiceCard from '../components/sections/ServiceCard.tsx';
import services from '../content/services.ts';
import {Img} from '../content/types.ts';

const image: Img = {
    src: './img/partybus/19.jpeg',
    alt: 'De partybus bij nacht, geparkeerd voor een verlichte gevel',
    width: 1200,
    height: 1600,
};

const Error404 = () => (
    <>
        <Seo
            description={'Deze pagina bestaat niet meer. Bekijk wat TM Events wel verhuurt.'}
            path={'/404'}
            title={'Pagina niet gevonden'}
        />

        <PageHeader
            eyebrow={'404'}
            image={image}
            intro={'Deze pagina bestaat niet of is verhuisd. Hieronder vind je wel waar het echt om draait.'}
            title={'Verkeerd afgeslagen'}
        />

        <Section>
            <Container width={'breed'}>
                <ul className={'grid gap-5 sm:grid-cols-2 lg:grid-cols-4'}>
                    {services.map((service) => (
                        <ServiceCard key={service.slug} service={service} />
                    ))}
                </ul>

                <Button className={'mt-10'} to={'/'} variant={'secondary'}>
                    Terug naar de homepagina
                </Button>
            </Container>
        </Section>
    </>
);

export default Error404;
