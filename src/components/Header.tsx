import {Link} from 'react-router-dom';
import NavItem from './NavItem.tsx';
import React from 'react';
import Hamburger from './Hamburger.tsx';

const Header = () => {
    return (
        <header className={'bg-black p-8 text-white'}>
            <div className={'flex sm:flex-col items-center justify-center h-full max-h-full'}>
                <div className={'flex flex-col items-center w-full mr-[-15px]'}>
                    <Link to={'/'}>
                        <div className={'text-2xl uppercase font-bold'}>
                            <span className={'text-teal-600'}>TM</span> - Rents
                        </div>
                    </Link>
                    <div className={'grid grid-cols-3 items-center w-full'}>
                        <div className={'text-center text-2xl hidden sm:block'}>
                            <a
                                className={'transition-all hover:text-teal-600'}
                                href={'https://www.instagram.com/tm_rents/'}
                                target={'_blank'}
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <div className={'text-center font-light col-span-3 sm:col-span-1'}>Verhuur voor evenementen</div>
                        <div className={'justify-center hidden sm:flex'}>
                            <a href={'tel:+32470824801'}>
                                <div
                                    className={
                                        'px-6 py-3 bg-white text-teal-600 rounded-full font-semibold transition-all hover:text-white hover:bg-teal-600'
                                    }
                                >
                                    <i className="fa-solid fa-phone"></i> 0470/82.48.01
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={'sm:hidden'}>
                    <Hamburger />
                </div>
                <ul className={'gap-8 pt-4 flex-col sm:flex-row hidden sm:flex'}>
                    <NavItem linkTo={'/partybus'}>Partybus</NavItem>
                    <NavItem linkTo={'/springkastelen'}>Springkastelen</NavItem>
                    <NavItem linkTo={'/tapwagen'}>Tapwagen</NavItem>
                    <NavItem linkTo={'/contact'}>Contact</NavItem>
                </ul>
            </div>
        </header>
    );
};

export default Header;
