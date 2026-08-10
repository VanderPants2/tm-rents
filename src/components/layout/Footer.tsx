import {Link} from 'react-router-dom';
import services from '../../content/services.ts';
import site from '../../content/site.ts';
import Container from '../ui/Container.tsx';
import Wordmark from './Wordmark.tsx';

const year = new Date().getFullYear();

const Footer = () => (
    <footer className={'border-t border-rand bg-nacht'}>
        <Container width={'breed'}>
            <div className={'grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4'}>
                <div className={'flex flex-col gap-3'}>
                    <Wordmark size={'lg'} />
                    <p className={'text-sm text-krijt-dim'}>{site.tagline}</p>
                </div>

                <nav aria-label={'Diensten'} className={'flex flex-col gap-3'}>
                    <h2 className={'font-mono text-xs uppercase tracking-[0.2em] text-krijt'}>Diensten</h2>
                    {services.map((service) => (
                        <Link
                            className={'text-sm text-krijt-dim transition-colors hover:text-krijt'}
                            key={service.slug}
                            state={service.hasPage ? undefined : {subject: service.formSubject}}
                            to={service.to}
                        >
                            {service.name}
                        </Link>
                    ))}
                </nav>

                <div className={'flex flex-col gap-3'}>
                    <h2 className={'font-mono text-xs uppercase tracking-[0.2em] text-krijt'}>Contact</h2>
                    <a className={'font-mono text-sm text-krijt transition-colors hover:text-lamp'} href={site.phone.href}>
                        {site.phone.display}
                    </a>
                    <a className={'text-sm text-krijt-dim transition-colors hover:text-krijt'} href={`mailto:${site.email}`}>
                        {site.email}
                    </a>
                    <Link className={'text-sm text-krijt-dim transition-colors hover:text-krijt'} to={'/contact'}>
                        Vraag je datum aan
                    </Link>
                </div>

                <div className={'flex flex-col gap-3'}>
                    <h2 className={'font-mono text-xs uppercase tracking-[0.2em] text-krijt'}>Volg mee</h2>
                    <a
                        className={'flex w-max items-center gap-2 text-sm text-krijt-dim transition-colors hover:text-krijt'}
                        href={site.instagram.href}
                        rel={'noreferrer'}
                        target={'_blank'}
                    >
                        <i aria-hidden className={'fa-brands fa-instagram'} />
                        {site.instagram.handle}
                    </a>
                </div>
            </div>

            <div
                className={
                    'flex flex-col gap-2 border-t border-rand py-6 font-mono text-xs text-krijt-dim sm:flex-row sm:justify-between'
                }
            >
                <span>
                    © {year} {site.name}
                </span>
                <span>Ondernemingsnummer BE {site.vat}</span>
            </div>
        </Container>
    </footer>
);

export default Footer;
