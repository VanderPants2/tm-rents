import {Link} from 'react-router-dom';
import NavItem from './NavItem.tsx';
import React from 'react';

const Footer = () => {
    return (
        <footer className={'bg-black p-8 text-white'}>
            <div className={'sm:flex justify-evenly items-center w-full'}>
                <div>
                    <div className={'text-center text-2xl uppercase font-bold'}>
                        <span className={'text-teal-600'}>TM</span> - Rents
                    </div>
                    <div className={'text-center font-light'}>Verhuur voor evenementen</div>
                </div>
                <div className={'flex flex-col sm:flex-row gap-8 items-center pt-8 sm:pt-0'}>
                    <div className={'flex justify-center'}>
                        <a href={'tel:+32470824801'}>
                            <div
                                className={
                                    'px-6 py-3 bg-white text-teal-600 rounded-full font-semibold transition-all hover:text-white hover:bg-teal-600 w-max'
                                }
                            >
                                <i className="fa-solid fa-phone"></i> 0470/82.48.01
                            </div>
                        </a>
                    </div>
                    <div className={'text-center text-2xl'}>
                        <a
                            className={'transition-all hover:text-teal-600'}
                            href={'https://www.instagram.com/tm_rents/'}
                            target={'_blank'}
                        >
                            <i className="fa-brands fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
