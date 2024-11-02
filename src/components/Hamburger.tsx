import React, {useState} from 'react';
import NavItem from './NavItem.tsx';
import {AnimatePresence, motion} from 'framer-motion';

const Hamburger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <div>
            <div
                className={'w-[15px]'}
                onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                }}
            >
                {isMenuOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </div>

            <AnimatePresence>
                {isMenuOpen ? (
                    <motion.div
                        animate={{height: isMenuOpen ? 'max-content' : '0%'}}
                        className={'absolute bg-black top-[128px] left-0 w-full px-4 rounded-b-2xl overflow-y-hidden'}
                        exit={{height: 0}}
                        initial={{height: 0}}
                    >
                        <div>
                            <ul className={'gap-2 py-4 flex-col sm:flex-row flex'}>
                                <NavItem linkTo={'/'}>Home</NavItem>
                                <NavItem linkTo={'/partybus'}>Partybus</NavItem>
                                <NavItem linkTo={'/springkastelen'}>Springkastelen</NavItem>
                                <NavItem linkTo={'/tapwagen'}>Tapwagen</NavItem>
                                <NavItem linkTo={'/contact'}>Contact</NavItem>
                            </ul>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default Hamburger;
