import {AnimatePresence, motion} from 'motion/react';
import services from '../../content/services.ts';
import site from '../../content/site.ts';
import Button from '../ui/Button.tsx';
import NavItem from './NavItem.tsx';

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const MobileMenu = ({isOpen, onClose}: Props) => (
    <AnimatePresence>
        {isOpen ? (
            <motion.div
                animate={{opacity: 1, y: 0}}
                className={'absolute inset-x-0 top-full border-b border-rand bg-nacht/98 backdrop-blur-md lg:hidden'}
                exit={{opacity: 0, y: -8}}
                id={'mobiel-menu'}
                initial={{opacity: 0, y: -8}}
                transition={{duration: 0.18, ease: 'easeOut'}}
            >
                <nav aria-label={'Hoofdnavigatie'} className={'flex flex-col gap-1 px-5 py-6'}>
                    <NavItem className={'py-3 text-sm'} linkTo={'/'} onClick={onClose}>
                        Home
                    </NavItem>
                    {services
                        .filter((service) => service.hasPage)
                        .map((service) => (
                            <NavItem
                                className={'py-3 text-sm'}
                                hue={service.hue}
                                key={service.slug}
                                linkTo={service.to}
                                onClick={onClose}
                            >
                                {service.name}
                            </NavItem>
                        ))}
                    <NavItem className={'py-3 text-sm'} linkTo={'/contact'} onClick={onClose}>
                        Contact
                    </NavItem>

                    <Button className={'mt-5'} href={site.phone.href} icon={'fa-solid fa-phone'} size={'lg'}>
                        {site.phone.display}
                    </Button>
                </nav>
            </motion.div>
        ) : null}
    </AnimatePresence>
);

export default MobileMenu;
