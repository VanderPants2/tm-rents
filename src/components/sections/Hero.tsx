import services from '../../content/services.ts';
import site from '../../content/site.ts';
import {Img} from '../../content/types.ts';
import Button from '../ui/Button.tsx';
import Container from '../ui/Container.tsx';
import Media from '../ui/Media.tsx';
import Lichtslinger from '../layout/Lichtslinger.tsx';
import {Link} from 'react-router-dom';
import {serviceStyle} from '../../utils/utils.ts';

const image: Img = {
    src: './img/partybus/20.jpeg',
    alt: 'De partybus bij nacht op de kasseien, met discobol-belettering op de flank',
    width: 1600,
    height: 1200,
};

const Hero = () => (
    <div className={'relative isolate overflow-hidden border-b border-rand'}>
        <div className={'absolute inset-0 -z-10'}>
            <Media image={image} priority sizes={'100vw'} />
            <div className={'absolute inset-0 bg-nacht/80'} />
            <div className={'absolute inset-0 bg-gradient-to-b from-nacht/60 via-transparent to-nacht'} />
        </div>

        <Lichtslinger className={'absolute inset-x-0 top-0'} count={26} />

        <Container width={'breed'}>
            <div className={'flex flex-col items-start gap-8 pb-16 pt-28 sm:pb-24 sm:pt-36'}>
                <h1 className={'display-kop offset-schaduw text-5xl'}>
                    Jij regelt het feest.
                    <br />
                    Wij brengen de rest.
                </h1>

                <p className={'max-w-[52ch] text-lg text-krijt/85 text-pretty sm:text-xl'}>
                    Partybus, springkastelen, de Baravan en stroom. Geleverd, geplaatst en weer opgehaald - zodat jij je met je
                    gasten kunt bezighouden in plaats van met het materiaal.
                </p>

                <div className={'flex flex-wrap items-center gap-3'}>
                    <Button href={site.phone.href} icon={'fa-solid fa-phone'} size={'lg'}>
                        {site.phone.display}
                    </Button>
                    <Button size={'lg'} to={'/contact'} variant={'secondary'}>
                        Vraag je datum aan
                    </Button>
                </div>

                <ul className={'flex flex-wrap gap-2 pt-4'}>
                    {services.map((service) => (
                        <li key={service.slug} style={serviceStyle(service.hue)}>
                            <Link
                                className={
                                    'flex items-center gap-2 rounded-full border border-rand bg-nacht/50 px-4 py-2 ' +
                                    'font-mono text-xs uppercase tracking-[0.14em] text-krijt-dim backdrop-blur-sm ' +
                                    'transition-colors hover:border-(--service) hover:text-krijt'
                                }
                                state={service.hasPage ? undefined : {subject: service.formSubject}}
                                to={service.to}
                            >
                                <span aria-hidden className={'lamp h-1.5 w-1.5 rounded-full text-(--service)'} />
                                {service.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    </div>
);

export default Hero;
