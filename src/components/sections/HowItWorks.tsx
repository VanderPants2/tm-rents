import steps from '../../content/steps.ts';
import Container from '../ui/Container.tsx';
import Section from '../ui/Section.tsx';
import SectionHeading from '../ui/SectionHeading.tsx';

/** Numbered because this genuinely is a sequence - the reader needs the order. */
const HowItWorks = () => (
    <Section id={'zo-werkt-het'} tone={'op'}>
        <Container width={'breed'}>
            <SectionHeading
                eyebrow={'Zo werkt het'}
                intro={'Van eerste telefoontje tot opgeruimde tuin. Je hoeft nergens achter te bellen.'}
                title={'In drie stappen geregeld'}
            />

            <ol className={'mt-12 grid gap-px overflow-hidden rounded-blok border border-rand bg-rand sm:grid-cols-3'}>
                {steps.map((step, index) => (
                    <li className={'flex flex-col gap-4 bg-nacht-op p-7'} key={step.title}>
                        <span className={'font-mono text-4xl leading-none text-(--service)'}>
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className={'text-xl font-semibold text-krijt'}>{step.title}</h3>
                        <p className={'text-krijt-dim'}>{step.body}</p>
                    </li>
                ))}
            </ol>
        </Container>
    </Section>
);

export default HowItWorks;
