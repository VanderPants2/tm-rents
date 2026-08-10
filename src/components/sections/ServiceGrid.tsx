import services from '../../content/services.ts';
import Container from '../ui/Container.tsx';
import Section from '../ui/Section.tsx';
import SectionHeading from '../ui/SectionHeading.tsx';
import ServiceCard from './ServiceCard.tsx';

const ServiceGrid = () => (
    <Section id={'diensten'}>
        <Container width={'breed'}>
            <SectionHeading
                eyebrow={'Onze diensten'}
                intro={'Vier dingen, één telefoonnummer. Combineer gerust wat je nodig hebt voor je feest.'}
                title={'Wat je bij ons huurt'}
            />

            <ul className={'mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'}>
                {services.map((service) => (
                    <ServiceCard key={service.slug} service={service} />
                ))}
            </ul>
        </Container>
    </Section>
);

export default ServiceGrid;
