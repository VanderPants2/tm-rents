import usps from '../../content/usps.ts';
import Container from '../ui/Container.tsx';
import Section from '../ui/Section.tsx';
import SectionHeading from '../ui/SectionHeading.tsx';

const WhyUs = () => (
    <Section id={'waarom'}>
        <Container width={'breed'}>
            <div className={'grid gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20'}>
                <SectionHeading
                    eyebrow={'Waarom TM Events'}
                    intro={'Een klein bedrijf met eigen materiaal. Dat merk je vooral aan hoe snel dingen geregeld raken.'}
                    title={'Geen gedoe, wel geregeld'}
                />

                <ul className={'grid gap-x-10 gap-y-8 sm:grid-cols-2'}>
                    {usps.map((usp) => (
                        <li className={'flex flex-col gap-3'} key={usp.title}>
                            <span
                                className={'grid h-11 w-11 place-items-center rounded-full border border-rand text-(--service)'}
                            >
                                <i aria-hidden className={usp.icon} />
                            </span>
                            <h3 className={'text-lg font-semibold text-krijt'}>{usp.title}</h3>
                            <p className={'text-krijt-dim'}>{usp.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    </Section>
);

export default WhyUs;
