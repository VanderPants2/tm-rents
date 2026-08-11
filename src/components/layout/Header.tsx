import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import services from '../../content/services.ts';
import site from '../../content/site.ts';
import Button from '../ui/Button.tsx';
import Container from '../ui/Container.tsx';
import MobileMenu from './MobileMenu.tsx';
import NavItem from './NavItem.tsx';
import Wordmark from './Wordmark.tsx';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {pathname} = useLocation();

    useEffect(() => setIsMenuOpen(false), [pathname]);

    return (
        <header className={'sticky top-0 z-40 border-b border-rand bg-nacht/85 backdrop-blur-md'}>
            <Container width={'breed'}>
                <div className={'flex h-20 items-center justify-between gap-6'}>
                    <Wordmark />

                    <nav aria-label={'Hoofdnavigatie'} className={'hidden items-center gap-8 lg:flex'}>
                        {services
                            .filter((service) => service.hasPage)
                            .map((service) => (
                                <NavItem hue={service.hue} key={service.slug} linkTo={service.to}>
                                    {service.name}
                                </NavItem>
                            ))}
                        <NavItem linkTo={'/contact'}>Contact</NavItem>
                    </nav>

                    <div className={'flex items-center gap-2 sm:gap-3'}>
                        <a
                            aria-label={`Instagram ${site.instagram.handle}`}
                            className={
                                'hidden h-10 w-10 place-items-center rounded-full border border-rand text-krijt-dim ' +
                                'transition-colors hover:border-krijt hover:text-krijt sm:grid'
                            }
                            href={site.instagram.href}
                            rel={'noreferrer'}
                            target={'_blank'}
                        >
                            <i aria-hidden className={'fa-brands fa-instagram'} />
                        </a>

                        {/* Wrapped rather than given `hidden`: Button hardcodes `inline-flex`,
                            and a bare display utility from outside loses that cascade fight. */}
                        <div className={'hidden sm:block'}>
                            <Button href={site.phone.href} icon={'fa-solid fa-phone'}>
                                {site.phone.display}
                            </Button>
                        </div>

                        <a
                            aria-label={`Bel ${site.phone.display}`}
                            className={'grid h-10 w-10 place-items-center rounded-full bg-teal text-nacht sm:hidden'}
                            href={site.phone.href}
                        >
                            <i aria-hidden className={'fa-solid fa-phone'} />
                        </a>

                        <button
                            aria-controls={'mobiel-menu'}
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? 'Menu sluiten' : 'Menu openen'}
                            className={
                                'grid h-10 w-10 place-items-center rounded-full border border-rand text-krijt ' +
                                'transition-colors hover:border-krijt lg:hidden'
                            }
                            onClick={() => setIsMenuOpen((open) => !open)}
                            type={'button'}
                        >
                            <i aria-hidden className={isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
                        </button>
                    </div>
                </div>
            </Container>

            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </header>
    );
};

export default Header;
